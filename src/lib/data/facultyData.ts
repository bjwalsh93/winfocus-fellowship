export interface FacultyMember {
	id: number;
	name: string;
	title: string;
	credentials: string;
	institution: string;
	bio: string;
	specialties: string[];
	imageUrl: string;
}

export const facultyMembers: FacultyMember[] = [
	{
		id: 1,
		name: 'Dr. Hamid Shokoohi',
		title: 'Program Director',
		credentials: 'MD, MPH, FACEP, FAEMUS',
		institution: 'Harvard Medical School',
		bio: 'Dr. Hamid Shokoohi is the Director of Emergency Ultrasound at Massachusetts General Hospital (MGH) and an Associate Professor of Emergency Medicine at Harvard Medical School. He is a nationally and internationally recognized leader in clinical ultrasound education and research, with over 160 peer-reviewed publications and numerous presentations at major scientific meetings worldwide. He previously served as Fellowship Director at MGH, where he trained 38 fellows, many of whom have gone on to leadership roles. His work has been recognized with numerous awards, including the National SAEM AEUS Teaching and Research Awards, the Titan in Research Award, and the Stellar Clinical Ultrasound Fellowship Program Award.',
		specialties: ['Emergency Medicine', 'Emergency Ultrasound', 'Clinical Education', 'Research'],
		imageUrl: '/faculty/hamid_shokoohi.jpg'
	},
	{
		id: 2,
		name: 'Dr. Alex Belaia',
		title: 'Associate Program Director',
		credentials: 'MD',
		institution: 'Harvard Emergency Ultrasound Fellow',
		bio: 'Dr. Alex Belaia is a Belarusian-American emergency medicine physician from Cleveland, Ohio. A former Division 1 wrestler at Duke University, he discovered his passion for emergency medicine through coaching high school wrestling. During his emergency medicine training in Brooklyn, NY, he combined his love of art (inspired by his grandfather) with the visual nature of ultrasound, leading to his specialization in emergency ultrasound. As the 2025-2026 Harvard Emergency Ultrasound Fellow, Dr. Belaia focuses on international ultrasound, cardiac, pulmonary, and testicular applications. He aspires to establish ultrasound programs in Eastern Europe, bringing advanced training back to his roots.',
		specialties: ['Emergency Medicine', 'International Ultrasound', 'Cardiac POCUS', 'Pulmonary Ultrasound'],
		imageUrl: '/faculty/alex_belaia.jpg'
	},
	{
		id: 3,
		name: 'Dr. Robert James Adrian',
		title: 'Section Editor, PEERcert+ Advanced Ultrasound',
		credentials: 'MD, FPD-AEMUS',
		institution: 'Saint Anthony Hospital, Chicago',
		bio: 'Dr. Robert James Adrian is a section editor for PEERcert+ Advanced Ultrasound and currently practices emergency medicine at Saint Anthony Hospital in Chicago. He completed his emergency ultrasound fellowship at Massachusetts General Hospital and Brigham and Women\'s Hospital, and achieved the AEMUS FPD while working as a fellow in New Zealand. Dr. Adrian has received the SAEM AEUS Resident Education Award, lectures globally on emergency ultrasound, and has published extensively in peer-reviewed journals. His expertise includes critical care echocardiography and gastric ultrasound.',
		specialties: ['Emergency Medicine', 'Critical Care Echocardiography', 'Gastric Ultrasound', 'Academic Research'],
		imageUrl: '/faculty/rob_adrien.jpeg'
	},
	{
		id: 4,
		name: 'Dr. Kristofer Montoya',
		title: 'Assistant Professor of Medicine',
		credentials: 'MD',
		institution: 'Harvard Medical School',
		bio: 'Dr. Kristofer Montoya is a distinguished faculty member with extensive expertise in emergency medicine and ultrasound applications.',
		specialties: ['Emergency Medicine', 'Point-of-Care Ultrasound', 'Medical Education'],
		imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
	},
	{
		id: 5,
		name: 'Dr. Maria Santos',
		title: 'Associate Professor of Emergency Medicine',
		credentials: 'MD, FACEP, RDMS',
		institution: 'Brigham and Women\'s Hospital',
		bio: 'Dr. Santos brings extensive experience in procedural guidance and vascular access using ultrasound. She has pioneered techniques that have become standard practice in emergency departments worldwide.',
		specialties: ['Emergency Medicine', 'Vascular Access', 'Procedural Guidance'],
		imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop'
	}
];
