import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// On Vercel, write to /tmp (ephemeral but works for the session).
// Locally, write to <project root>/data/applications.db
// Override with DATABASE_PATH env var.
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

db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    submitted_at     TEXT    NOT NULL DEFAULT (datetime('now')),
    status           TEXT    NOT NULL DEFAULT 'new',

    -- Step 1: Personal
    full_name        TEXT    NOT NULL,
    email            TEXT    NOT NULL,
    phone            TEXT    NOT NULL,
    country          TEXT    NOT NULL,

    -- Step 2: Professional
    current_position     TEXT    NOT NULL,
    current_institution  TEXT    NOT NULL,
    medical_specialty    TEXT    NOT NULL,
    years_of_practice    INTEGER NOT NULL,
    medical_license      TEXT    NOT NULL,

    -- Step 3: Education
    medical_school            TEXT    NOT NULL,
    graduation_year           INTEGER NOT NULL,
    additional_certifications TEXT    NOT NULL DEFAULT '',

    -- Step 4: Ultrasound experience & essays
    ultrasound_experience  TEXT    NOT NULL,
    prior_training         TEXT    NOT NULL DEFAULT '',
    ultrasound_types       TEXT    NOT NULL DEFAULT '[]',
    application_essay1     TEXT    NOT NULL,
    application_essay2     TEXT    NOT NULL
  )
`);

// Index so duplicate-email lookups are fast
db.exec(`CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email)`);

export interface ApplicationData {
	fullName: string;
	email: string;
	phone: string;
	country: string;
	currentPosition: string;
	currentInstitution: string;
	medicalSpecialty: string;
	yearsOfPractice: number;
	medicalLicense: string;
	medicalSchool: string;
	graduationYear: number;
	additionalCertifications: string;
	ultrasoundExperience: string;
	priorTraining: string;
	ultrasoundTypes: string[];
	applicationEssay1: string;
	applicationEssay2: string;
}

const stmtInsert = db.prepare(`
  INSERT INTO applications (
    full_name, email, phone, country,
    current_position, current_institution, medical_specialty, years_of_practice, medical_license,
    medical_school, graduation_year, additional_certifications,
    ultrasound_experience, prior_training, ultrasound_types,
    application_essay1, application_essay2
  ) VALUES (
    @fullName, @email, @phone, @country,
    @currentPosition, @currentInstitution, @medicalSpecialty, @yearsOfPractice, @medicalLicense,
    @medicalSchool, @graduationYear, @additionalCertifications,
    @ultrasoundExperience, @priorTraining, @ultrasoundTypesJson,
    @applicationEssay1, @applicationEssay2
  )
`);

export function saveApplication(data: ApplicationData): number {
	const result = stmtInsert.run({
		...data,
		ultrasoundTypesJson: JSON.stringify(data.ultrasoundTypes)
	});
	return result.lastInsertRowid as number;
}

export interface ApplicationRow {
	id: number;
	submitted_at: string;
	status: string;
	full_name: string;
	email: string;
	phone: string;
	country: string;
	current_position: string;
	current_institution: string;
	medical_specialty: string;
	years_of_practice: number;
	medical_license: string;
	medical_school: string;
	graduation_year: number;
	additional_certifications: string;
	ultrasound_experience: string;
	prior_training: string;
	ultrasound_types: string;
	application_essay1: string;
	application_essay2: string;
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
