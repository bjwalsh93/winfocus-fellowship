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
		name: 'Dr. Sarah Chen',
		title: 'Program Director',
		credentials: 'MD, RDCS, FACEP',
		institution: 'Harvard Medical School',
		bio: 'Dr. Chen is a leading expert in point-of-care ultrasound with over 15 years of experience in emergency medicine. She has trained hundreds of physicians worldwide and published extensively on POCUS applications in critical care.',
		specialties: ['Emergency Medicine', 'Point-of-Care Ultrasound', 'Critical Care'],
		imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop'
	},
	{
		id: 2,
		name: 'Dr. Michael Rodriguez',
		title: 'Associate Program Director',
		credentials: 'MD, PhD, FCCM',
		institution: 'Beth Israel Deaconess Medical Center',
		bio: 'Dr. Rodriguez specializes in cardiac ultrasound and hemodynamic assessment. His research focuses on integrating AI technologies with ultrasound diagnostics to improve patient outcomes in intensive care settings.',
		specialties: ['Cardiology', 'Critical Care', 'Echocardiography'],
		imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
	},
	{
		id: 3,
		name: 'Dr. Priya Patel',
		title: 'Director of Ultrasound Education',
		credentials: 'MD, RDMS, FACEP',
		institution: 'Massachusetts General Hospital',
		bio: 'Dr. Patel is renowned for her innovative teaching methods in ultrasound education. She has developed curricula adopted by medical schools internationally and is passionate about making advanced ultrasound training accessible globally.',
		specialties: ['Emergency Medicine', 'Medical Education', 'Abdominal Ultrasound'],
		imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop'
	},
	{
		id: 4,
		name: 'Dr. James Thompson',
		title: 'Assistant Professor of Medicine',
		credentials: 'MD, FCCM, RDCS',
		institution: 'Harvard Medical School',
		bio: 'With a background in pulmonary and critical care medicine, Dr. Thompson specializes in lung ultrasound and thoracic applications. He leads research initiatives exploring novel POCUS techniques for respiratory pathologies.',
		specialties: ['Pulmonary Medicine', 'Critical Care', 'Lung Ultrasound'],
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
	},
	{
		id: 6,
		name: 'Dr. David Kim',
		title: 'Director of Cardiac POCUS',
		credentials: 'MD, FASE, FAHA',
		institution: 'Harvard Medical School',
		bio: 'Dr. Kim is a cardiologist with subspecialty training in echocardiography. His clinical focus includes rapid cardiac assessment in acute care settings, and he has authored multiple guidelines on focused cardiac ultrasound.',
		specialties: ['Cardiology', 'Echocardiography', 'Hemodynamic Assessment'],
		imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop'
	},
	{
		id: 7,
		name: 'Dr. Elena Volkov',
		title: 'Assistant Professor of Anesthesiology',
		credentials: 'MD, FASA, RDCS',
		institution: 'Massachusetts General Hospital',
		bio: 'Dr. Volkov specializes in perioperative ultrasound applications, including regional anesthesia and hemodynamic monitoring. She is dedicated to advancing ultrasound training for anesthesiologists and critical care physicians.',
		specialties: ['Anesthesiology', 'Regional Anesthesia', 'Perioperative Care'],
		imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
	},
	{
		id: 8,
		name: 'Dr. Ahmed Hassan',
		title: 'Associate Professor of Surgery',
		credentials: 'MD, FACS, RDMS',
		institution: 'Beth Israel Deaconess Medical Center',
		bio: 'Dr. Hassan is a trauma surgeon who has integrated ultrasound into surgical decision-making and trauma assessment. His expertise in FAST exams and surgical ultrasound has made him a sought-after educator internationally.',
		specialties: ['Trauma Surgery', 'FAST Exam', 'Surgical Ultrasound'],
		imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop'
	}
];
