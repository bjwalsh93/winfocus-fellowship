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
		title: 'Program Director & Congress Co-Chair',
		credentials: 'MD, MPH, FACEP, FAEMUS',
		institution: 'Massachusetts General Hospital, Harvard Medical School',
		bio: 'Dr. Hamid Shokoohi is the Director of Emergency Ultrasound at Massachusetts General Hospital (MGH) and an Associate Professor of Emergency Medicine at Harvard Medical School. He is a nationally and internationally recognized leader in clinical ultrasound education and research, with over 160 peer-reviewed publications and numerous presentations at major scientific meetings worldwide. He previously served as Fellowship Director at MGH, where he trained 38 fellows, many of whom have gone on to leadership roles. His work has been recognized with numerous awards, including the National SAEM AEUS Teaching and Research Awards, the Titan in Research Award, and the Stellar Clinical Ultrasound Fellowship Program Award.',
		specialties: ['Emergency Medicine', 'Emergency Ultrasound', 'Clinical Education', 'Research'],
		imageUrl: '/faculty/hamid_shokoohi.jpg'
	},
	{
		id: 2,
		name: 'Dr. Chris Fox',
		title: 'Congress Co-Chair',
		credentials: 'MD, RDMS, FACEP',
		institution: 'University of California, Irvine',
		bio: 'Dr. Chris Fox is a Professor and Chair of Emergency Medicine and current Director of Ultrasound in Medical Education at UC Irvine. His clinical research interests focus on emergency ultrasound, and he is dedicated to advancing point-of-care ultrasound through research, teaching, leadership, and clinical expertise. Dr. Fox has published over 100 peer-reviewed papers and contributed to three textbooks, two as sole editor. He has been invited to lecture more than 450 times across 49 states and 15 countries. His TEDx UCI talk, "The Point of Care Revolution: Ultrasound," has been viewed nearly 30,000 times. He serves on the board of directors for both the Society of Ultrasound in Medical Education and the Catalina Island Medical Center.',
		specialties: ['Emergency Medicine', 'Point-of-Care Ultrasound', 'Medical Education', 'Research'],
		imageUrl: '/faculty/chris-fox.jpg'
	},
	{
		id: 3,
		name: 'Dr. Francesco Corradi',
		title: 'Congress Co-Chair',
		credentials: 'MD, PhD',
		institution: 'University of Pisa, Italy',
		bio: 'Dr. Francesco Corradi is a Professor of Anesthesiology at the University of Pisa, trained in Internal Medicine and Gastroenterology with special interest in clinical hepatology and liver transplant programs. With 20 years of ultrasonography experience, he has particular expertise in color-Doppler, abdominal, lung, heart, and vascular ultrasound. His research focuses on functional hemodynamic evaluation, pathophysiology of circulatory changes in critical care patients, and acute respiratory failure assessment using lung ultrasonography. Dr. Corradi has extensive experience in managing complex emergencies, cardiac arrest, ECMO procedures, and renal replacement therapies. He is a member of ESICM, SIAARTI, and WINFOCUS.',
		specialties: ['Anesthesiology', 'Critical Care', 'Hemodynamic Ultrasound', 'Lung Ultrasound'],
		imageUrl: '/faculty/francesco-corradi.jpg'
	},
	{
		id: 4,
		name: 'Dr. Julina Noor',
		title: 'Congress Chair',
		credentials: 'MD, MRCEM',
		institution: 'Universiti Teknologi MARA, Malaysia',
		bio: 'Dr. Julina Md Noor is an Associate Professor in Emergency Medicine and Consultant Emergency Physician at Universiti Teknologi MARA (UiTM) Malaysia. She graduated from University of Wales College of Medicine in 2001, completed her specialist training in emergency medicine at Universiti Malaya in 2010, and pursued a fellowship in critical and emergency ultrasound at Massachusetts General Hospital in 2014. Dr. Noor currently heads the Quality Improvement and Patient Safety Department at Hospital UiTM and serves as President of the Society of Critical Care & Emergency Sonography Malaysia. She has been actively teaching ultrasound for over a decade.',
		specialties: ['Emergency Medicine', 'Critical Care Ultrasound', 'Quality Improvement', 'Medical Education'],
		imageUrl: '/faculty/julina-noor.jpeg'
	},
	{
		id: 5,
		name: 'Dr. Magali Gauthey',
		title: 'Congress Co-Chair',
		credentials: 'MD',
		institution: 'Hôpital de la Tour & Geneva University Children Hospital',
		bio: 'Dr. Magali Gauthey is the Co-head of the Pediatric Department at Hôpital de la Tour in Geneva, Switzerland, and a staff emergency physician in the Division of Emergency Medicine at Geneva University Children Hospital. After completing her pediatrics training in Geneva, she completed a 3-year fellowship in Pediatric Emergency Medicine and Point-of-Care Ultrasound at The Hospital for Sick Children in Toronto, Canada. Dr. Gauthey is one of the few Swiss Pediatric POCUS instructors and is actively involved in implementing and developing POCUS locally and internationally. She serves as Treasurer for the P2Network, a multinational organization dedicated to pediatric point-of-care ultrasound.',
		specialties: ['Pediatric Emergency Medicine', 'Pediatric POCUS', 'Medical Education', 'International Development'],
		imageUrl: '/faculty/magali-gauthey.jpg'
	},
	{
		id: 6,
		name: 'Dr. David Teng',
		title: 'Congress Co-Chair',
		credentials: 'MD, FACEP',
		institution: 'Donald and Barbara Zucker School of Medicine at Hofstra/Northwell',
		bio: 'Dr. David Teng is an Assistant Professor of Emergency Medicine and Pediatric Emergency Medicine at the Donald and Barbara Zucker School of Medicine at Hofstra/Northwell. Board-certified in both Emergency Medicine and Pediatric Emergency Medicine by the American Board of Pediatrics, Dr. Teng completed his medical education at St. Georges University, his residency at Long Island Jewish Medical Center, and his fellowship at Columbia University College of Physicians & Surgeons. He brings expertise in pediatric emergency care and point-of-care ultrasound education.',
		specialties: ['Pediatric Emergency Medicine', 'Emergency Medicine', 'Point-of-Care Ultrasound', 'Medical Education'],
		imageUrl: '/faculty/dave-teng.jpg'
	},
	{
		id: 7,
		name: 'Dr. Kristofer Montoya',
		title: 'Emergency Ultrasound Fellow',
		credentials: 'MD',
		institution: 'Massachusetts General Hospital',
		bio: 'Dr. Kristofer Montoya is an Emergency Medicine physician currently completing his Emergency Ultrasound Fellowship at Massachusetts General Hospital (2025). He graduated from Sidney Kimmel Medical College at Thomas Jefferson University in 2020 and completed his Emergency Medicine residency at Johns Hopkins Hospital in 2024. Dr. Montoya is affiliated with Henry Ford Medical Group and brings expertise in emergency medicine and point-of-care ultrasound.',
		specialties: ['Emergency Medicine', 'Emergency Ultrasound', 'Point-of-Care Ultrasound'],
		imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
	},
	{
		id: 8,
		name: 'Dr. Robert James Adrian',
		title: 'Section Editor, PEERcert+ Advanced Ultrasound',
		credentials: 'MD, FPD-AEMUS',
		institution: 'Saint Anthony Hospital, Chicago',
		bio: 'Dr. Robert James Adrian is a section editor for PEERcert+ Advanced Ultrasound and currently practices emergency medicine at Saint Anthony Hospital in Chicago. He completed his emergency ultrasound fellowship at Massachusetts General Hospital and Brigham and Women\'s Hospital, and achieved the AEMUS FPD while working as a fellow in New Zealand. Dr. Adrian has received the SAEM AEUS Resident Education Award, lectures globally on emergency ultrasound, and has published extensively in peer-reviewed journals. His expertise includes critical care echocardiography and gastric ultrasound.',
		specialties: ['Emergency Medicine', 'Critical Care Echocardiography', 'Gastric Ultrasound', 'Academic Research'],
		imageUrl: '/faculty/rob_adrien.jpeg'
	},
	{
		id: 9,
		name: 'Dr. Nour Al Jalbout',
		title: 'Co-Fellowship Director',
		credentials: 'MD',
		institution: 'Massachusetts General Hospital, Harvard Medical School',
		bio: 'Dr. Nour Al Jalbout is the Co-Fellowship Director of the Harvard Emergency Ultrasound Fellowship at Mass General Brigham and Co-Program Director of the International Fellowship in Emergency Ultrasound Research. She serves as Medical Director for Quality and Safety in the MGH Emergency Department and holds an academic appointment as Assistant Professor of Emergency Medicine at Harvard Medical School. Her academic interests center on POCUS in critical care resuscitation, with particular focus on transesophageal echocardiography (TEE), procedural innovation, and simulation-based education. She was recognized with the 2024 Susan Wilcox Education and Teaching Award and the 2025 SAEM Early Educator Award.',
		specialties: ['Emergency Medicine', 'Point-of-Care Ultrasound', 'Transesophageal Echocardiography', 'Medical Education'],
		imageUrl: '/faculty/nour-al-jalbout.jpg'
	},
	{
		id: 10,
		name: 'Dr. Lauren Selame',
		title: 'Co-Fellowship Director',
		credentials: 'MD',
		institution: 'Brigham and Women\'s Hospital, Harvard Medical School',
		bio: 'Dr. Lauren Selame is an Emergency Medicine physician and Co-Fellowship Director of the Harvard Emergency Ultrasound Fellowship at Mass General Brigham. She also serves as Co-Program Director of the International Fellowship in Emergency Ultrasound Research. Dr. Selame completed her Emergency Ultrasound Fellowship at Massachusetts General Hospital and holds clinical appointments at multiple institutions including Brigham and Women\'s Hospital, MGH, Fort Defiance Indian Hospital in Arizona, and Martha\'s Vineyard Hospital. Her clinical and research interests include diagnostic POCUS, procedural ultrasound, TEE, and simulation integration. She is part of the national teaching faculty for the Resuscitative TEE Project and has received the 2021 SCUF Newbie Award, 2022 SAEM AEUS Rising Star Award, and 2024 Clinical Excellence Award.',
		specialties: ['Emergency Medicine', 'Point-of-Care Ultrasound', 'Transesophageal Echocardiography', 'Simulation Education'],
		imageUrl: '/faculty/lauren-selame.jpg'
	},
	{
		id: 11,
		name: 'Christina "CC" Morone',
		title: 'Director of Education and Training',
		credentials: 'PA-C',
		institution: 'UltraSight / Massachusetts General Hospital',
		bio: 'Christina "CC" Morone led national and international ultrasound education efforts and expanded point-of-care ultrasound (POCUS) training and credentialing at MGH for over 100 providers. She is a NIH-funded researcher, the first PA appointed as a Harvard Medical School faculty as a Teaching Associate, and the first to achieve the highest clinical distinction as an APP Scholar at MGH in emergency medicine. Currently, CC serves as Director of Education and Training at UltraSight, where she leads global ultrasound training for an AI-powered guidance platform for acquiring diagnostic-quality cardiac images. With over a decade of clinical experience, she brings deep bedside insight to her work in advancing accessible, high-quality ultrasound worldwide.',
		specialties: ['Emergency Medicine', 'Point-of-Care Ultrasound', 'Medical Education', 'AI-Powered Ultrasound'],
		imageUrl: '/faculty/christina-morone.jpg'
	},
	{
		id: 12,
		name: 'Dr. Alex Belaia',
		title: 'Emergency Ultrasound Fellow',
		credentials: 'MD',
		institution: 'Massachusetts General Hospital',
		bio: 'Dr. Alex Belaia is a Belarusian-American emergency medicine physician currently completing his Emergency Ultrasound Fellowship at Massachusetts General Hospital. A former Division 1 wrestler at Duke University, he discovered his passion for emergency medicine and ultrasound during his training in Brooklyn, NY. Dr. Belaia focuses on international ultrasound, cardiac, pulmonary, and testicular applications, and aspires to establish ultrasound programs in Eastern Europe.',
		specialties: ['Emergency Medicine', 'International Ultrasound', 'Cardiac POCUS', 'Pulmonary Ultrasound'],
		imageUrl: '/faculty/alex_belaia.jpg'
	}
];
