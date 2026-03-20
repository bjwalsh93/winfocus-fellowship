import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DATA_DIR = process.env.DATABASE_PATH
	? path.dirname(process.env.DATABASE_PATH)
	: process.env.VERCEL
		? '/tmp'
		: path.join(process.cwd(), 'data');

const DB_PATH = process.env.DATABASE_PATH || path.join(DATA_DIR, 'applications.db');

if (!process.env.VERCEL && !fs.existsSync(DATA_DIR)) {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

const db = new Database(DB_PATH);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

function tableExists(name: string): boolean {
	const row = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`).get(name);
	return Boolean(row);
}

function hasColumn(table: string, column: string): boolean {
	const cols = db.prepare(`PRAGMA table_info(${table})`).all() as { name: string }[];
	return cols.some((c) => c.name === column);
}

/** One-time replace when upgrading from the pre-FAWUS-questionnaire schema. */
function ensureApplicationsSchema() {
	if (!tableExists('applications')) {
		createApplicationsTable();
		return;
	}
	if (!hasColumn('applications', 'country_of_residence')) {
		db.exec('DROP INDEX IF EXISTS idx_applications_email');
		db.exec('DROP TABLE IF EXISTS applications');
		createApplicationsTable();
	}
}

function createApplicationsTable() {
	db.exec(`
		CREATE TABLE applications (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			submitted_at TEXT NOT NULL DEFAULT (datetime('now')),
			status TEXT NOT NULL DEFAULT 'new',

			full_name TEXT NOT NULL,
			email TEXT NOT NULL,
			country_of_residence TEXT NOT NULL,

			is_physician TEXT NOT NULL,
			medical_training_country TEXT NOT NULL,

			residency_specialty TEXT NOT NULL,
			residency_institution TEXT NOT NULL,
			residency_dates TEXT NOT NULL,
			board_certified TEXT NOT NULL,
			board_certified_details TEXT NOT NULL DEFAULT '',

			current_employer TEXT NOT NULL,
			hoped_training_dates TEXT NOT NULL,

			sponsorship_description TEXT NOT NULL DEFAULT '',
			ultrasound_experience TEXT NOT NULL,

			goals_mgh_career TEXT NOT NULL,
			ultrasound_interests_areas TEXT NOT NULL,
			winfocus_mission_contribution TEXT NOT NULL,

			english_proficiency TEXT NOT NULL,
			english_explanation TEXT NOT NULL DEFAULT '',
			other_languages TEXT NOT NULL DEFAULT ''
		)
	`);
	db.exec(`CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email)`);
}

ensureApplicationsSchema();

export interface ApplicationData {
	fullName: string;
	email: string;
	countryOfResidence: string;
	isPhysician: string;
	medicalTrainingCountry: string;
	residencySpecialty: string;
	residencyInstitution: string;
	residencyDates: string;
	boardCertified: string;
	boardCertifiedDetails: string;
	currentEmployer: string;
	hopedTrainingDates: string;
	sponsorshipDescription: string;
	ultrasoundExperience: string;
	goalsMghCareer: string;
	ultrasoundInterestsAreas: string;
	winfocusMissionContribution: string;
	englishProficiency: string;
	englishExplanation: string;
	otherLanguages: string;
}

const stmtInsert = db.prepare(`
	INSERT INTO applications (
		full_name, email, country_of_residence,
		is_physician, medical_training_country,
		residency_specialty, residency_institution, residency_dates,
		board_certified, board_certified_details,
		current_employer, hoped_training_dates,
		sponsorship_description, ultrasound_experience,
		goals_mgh_career, ultrasound_interests_areas, winfocus_mission_contribution,
		english_proficiency, english_explanation, other_languages
	) VALUES (
		@fullName, @email, @countryOfResidence,
		@isPhysician, @medicalTrainingCountry,
		@residencySpecialty, @residencyInstitution, @residencyDates,
		@boardCertified, @boardCertifiedDetails,
		@currentEmployer, @hopedTrainingDates,
		@sponsorshipDescription, @ultrasoundExperience,
		@goalsMghCareer, @ultrasoundInterestsAreas, @winfocusMissionContribution,
		@englishProficiency, @englishExplanation, @otherLanguages
	)
`);

export function saveApplication(data: ApplicationData): number {
	const result = stmtInsert.run(data);
	return result.lastInsertRowid as number;
}

export interface ApplicationRow {
	id: number;
	submitted_at: string;
	status: string;
	full_name: string;
	email: string;
	country_of_residence: string;
	is_physician: string;
	medical_training_country: string;
	residency_specialty: string;
	residency_institution: string;
	residency_dates: string;
	board_certified: string;
	board_certified_details: string;
	current_employer: string;
	hoped_training_dates: string;
	sponsorship_description: string;
	ultrasound_experience: string;
	goals_mgh_career: string;
	ultrasound_interests_areas: string;
	winfocus_mission_contribution: string;
	english_proficiency: string;
	english_explanation: string;
	other_languages: string;
}

export function getAllApplications(): ApplicationRow[] {
	return db.prepare('SELECT * FROM applications ORDER BY submitted_at DESC').all() as ApplicationRow[];
}

export function getApplicationByEmail(email: string): ApplicationRow | undefined {
	return db.prepare('SELECT * FROM applications WHERE email = ? LIMIT 1').get(email) as
		| ApplicationRow
		| undefined;
}

export { db };
