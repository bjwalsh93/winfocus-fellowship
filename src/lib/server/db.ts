import { env } from '$env/dynamic/private';
import { createClient, type Client } from '@libsql/client';
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const TURSO_DATABASE_URL =
	env.TURSO_DATABASE_URL || env.DATABASE_URL || process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '';
const TURSO_AUTH_TOKEN =
	env.TURSO_AUTH_TOKEN || env.DATABASE_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || '';
const USE_TURSO = Boolean(TURSO_DATABASE_URL && TURSO_AUTH_TOKEN);

const DATA_DIR = process.env.DATABASE_PATH
	? path.dirname(process.env.DATABASE_PATH)
	: process.env.VERCEL
		? '/tmp'
		: path.join(process.cwd(), 'data');

const DB_PATH = process.env.DATABASE_PATH || path.join(DATA_DIR, 'applications.db');

if (!process.env.VERCEL && !fs.existsSync(DATA_DIR)) {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

const CREATE_APPLICATIONS_SQL = `
	CREATE TABLE IF NOT EXISTS applications (
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
`;

const CREATE_INDEX_SQL = `CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email)`;

let sqliteDb: Database.Database | null = null;
let tursoClient: Client | null = null;
let readyPromise: Promise<void> | null = null;

function getSqliteDb() {
	if (!sqliteDb) {
		sqliteDb = new Database(DB_PATH);
		sqliteDb.pragma('journal_mode = WAL');
		sqliteDb.pragma('foreign_keys = ON');
	}
	return sqliteDb;
}

function tableExists(name: string): boolean {
	const db = getSqliteDb();
	const row = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`).get(name);
	return Boolean(row);
}

function hasColumn(table: string, column: string): boolean {
	const db = getSqliteDb();
	const cols = db.prepare(`PRAGMA table_info(${table})`).all() as { name: string }[];
	return cols.some((c) => c.name === column);
}

function ensureSqliteSchema() {
	const db = getSqliteDb();
	if (!tableExists('applications')) {
		db.exec(CREATE_APPLICATIONS_SQL);
		db.exec(CREATE_INDEX_SQL);
		return;
	}
	if (!hasColumn('applications', 'country_of_residence')) {
		db.exec('DROP INDEX IF EXISTS idx_applications_email');
		db.exec('DROP TABLE IF EXISTS applications');
		db.exec(CREATE_APPLICATIONS_SQL);
		db.exec(CREATE_INDEX_SQL);
		return;
	}
	db.exec(CREATE_INDEX_SQL);
}

function getTursoClient() {
	if (!tursoClient) {
		tursoClient = createClient({
			url: TURSO_DATABASE_URL,
			authToken: TURSO_AUTH_TOKEN
		});
	}
	return tursoClient;
}

async function ensureTursoSchema() {
	const client = getTursoClient();
	await client.execute(CREATE_APPLICATIONS_SQL);
	await client.execute(CREATE_INDEX_SQL);
}

async function ensureDbReady() {
	if (!readyPromise) {
		readyPromise = USE_TURSO ? ensureTursoSchema() : Promise.resolve(ensureSqliteSchema());
	}
	await readyPromise;
}

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

const INSERT_SQL = `
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
		?, ?, ?,
		?, ?,
		?, ?, ?,
		?, ?,
		?, ?,
		?, ?,
		?, ?, ?,
		?, ?, ?
	)
`;

function applicationArgs(data: ApplicationData) {
	return [
		data.fullName,
		data.email,
		data.countryOfResidence,
		data.isPhysician,
		data.medicalTrainingCountry,
		data.residencySpecialty,
		data.residencyInstitution,
		data.residencyDates,
		data.boardCertified,
		data.boardCertifiedDetails,
		data.currentEmployer,
		data.hopedTrainingDates,
		data.sponsorshipDescription,
		data.ultrasoundExperience,
		data.goalsMghCareer,
		data.ultrasoundInterestsAreas,
		data.winfocusMissionContribution,
		data.englishProficiency,
		data.englishExplanation,
		data.otherLanguages
	];
}

export async function saveApplication(data: ApplicationData): Promise<number> {
	await ensureDbReady();

	if (USE_TURSO) {
		const client = getTursoClient();
		const result = await client.execute({
			sql: INSERT_SQL,
			args: applicationArgs(data)
		});
		return Number(result.lastInsertRowid ?? 0);
	}

	const db = getSqliteDb();
	const stmtInsert = db.prepare(INSERT_SQL);
	const result = stmtInsert.run(applicationArgs(data));
	return Number(result.lastInsertRowid);
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

function mapRemoteRow(row: Record<string, unknown>): ApplicationRow {
	return {
		id: Number(row.id ?? 0),
		submitted_at: String(row.submitted_at ?? ''),
		status: String(row.status ?? ''),
		full_name: String(row.full_name ?? ''),
		email: String(row.email ?? ''),
		country_of_residence: String(row.country_of_residence ?? ''),
		is_physician: String(row.is_physician ?? ''),
		medical_training_country: String(row.medical_training_country ?? ''),
		residency_specialty: String(row.residency_specialty ?? ''),
		residency_institution: String(row.residency_institution ?? ''),
		residency_dates: String(row.residency_dates ?? ''),
		board_certified: String(row.board_certified ?? ''),
		board_certified_details: String(row.board_certified_details ?? ''),
		current_employer: String(row.current_employer ?? ''),
		hoped_training_dates: String(row.hoped_training_dates ?? ''),
		sponsorship_description: String(row.sponsorship_description ?? ''),
		ultrasound_experience: String(row.ultrasound_experience ?? ''),
		goals_mgh_career: String(row.goals_mgh_career ?? ''),
		ultrasound_interests_areas: String(row.ultrasound_interests_areas ?? ''),
		winfocus_mission_contribution: String(row.winfocus_mission_contribution ?? ''),
		english_proficiency: String(row.english_proficiency ?? ''),
		english_explanation: String(row.english_explanation ?? ''),
		other_languages: String(row.other_languages ?? '')
	};
}

export async function getAllApplications(): Promise<ApplicationRow[]> {
	await ensureDbReady();

	if (USE_TURSO) {
		const client = getTursoClient();
		const result = await client.execute(
			'SELECT * FROM applications ORDER BY submitted_at DESC, id DESC'
		);
		return result.rows.map((row) => mapRemoteRow(row as Record<string, unknown>));
	}

	const db = getSqliteDb();
	return db.prepare('SELECT * FROM applications ORDER BY submitted_at DESC, id DESC').all() as ApplicationRow[];
}

export async function getApplicationByEmail(email: string): Promise<ApplicationRow | undefined> {
	await ensureDbReady();

	if (USE_TURSO) {
		const client = getTursoClient();
		const result = await client.execute({
			sql: 'SELECT * FROM applications WHERE email = ? LIMIT 1',
			args: [email]
		});
		const row = result.rows[0];
		return row ? mapRemoteRow(row as Record<string, unknown>) : undefined;
	}

	const db = getSqliteDb();
	return db.prepare('SELECT * FROM applications WHERE email = ? LIMIT 1').get(email) as
		| ApplicationRow
		| undefined;
}

export const db = {
	mode: USE_TURSO ? 'turso' : 'sqlite',
	path: USE_TURSO ? TURSO_DATABASE_URL : DB_PATH
};
