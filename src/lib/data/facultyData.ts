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
		imageUrl: '/faculty/kristofer-montoya.jpg'
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
		id: 10,
		name: 'Dr. Nour Al Jalbout',
		title: 'Co-Fellowship Director',
		credentials: 'MD',
		institution: 'Massachusetts General Hospital, Harvard Medical School',
		bio: 'Dr. Nour Al Jalbout is the Co-Fellowship Director of the Harvard Emergency Ultrasound Fellowship at Mass General Brigham and Co-Program Director of the International Fellowship in Emergency Ultrasound Research. She serves as Medical Director for Quality and Safety in the MGH Emergency Department and holds an academic appointment as Assistant Professor of Emergency Medicine at Harvard Medical School. Her academic interests center on POCUS in critical care resuscitation, with particular focus on transesophageal echocardiography (TEE), procedural innovation, and simulation-based education. She was recognized with the 2024 Susan Wilcox Education and Teaching Award and the 2025 SAEM Early Educator Award.',
		specialties: ['Emergency Medicine', 'Point-of-Care Ultrasound', 'Transesophageal Echocardiography', 'Medical Education'],
		imageUrl: '/faculty/nour-al-jalbout.jpg'
	},
	{
		id: 11,
		name: 'Dr. Juan Antonio Calderón',
		title: 'WINFOCUS Board of Directors',
		credentials: 'MD',
		institution: 'HGZ #4 IMSS Monterrey, Mexico',
		bio: 'Dr. Juan Antonio Calderón González is a member of the WINFOCUS Board of Directors (2019-2020) and a specialist in Internal Medicine from the University of Guadalajara and Critical Care Medicine from Tecnológico de Monterrey. He is affiliated with the Intensive Care Unit at HGZ #4 IMSS Monterrey and holds credentials at multiple hospitals in the Christus Muguerza Group, Hospital San José Tec de Monterrey, Hospital Zambrano Hellion, Doctors Hospital, and OCA Hospital in Monterrey, Nuevo León.',
		specialties: ['Internal Medicine', 'Critical Care Medicine', 'Point-of-Care Ultrasound'],
		imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop'
	},
	{
		id: 12,
		name: 'Dr. Miguel Montorfano',
		title: 'WINFOCUS Latin America Coordinator',
		credentials: 'MD',
		institution: 'Hospital de Emergencias "Dr. Clemente Alvarez", Rosario, Argentina',
		bio: 'Dr. Montorfano is Head of the Ultrasound and Doppler Service at Hospital de Emergencias "Dr. Clemente Alvarez" in Rosario, Argentina, and Teaching Coordinator for Critical Ultrasound. He is a founding member and former President of the Rosario Ultrasonography Association and former Vice President of FASED (Argentine Federation of Ultrasound and Doppler Societies). As a member of the WINFOCUS Board of Directors and Latin America Coordinator, Dr. Montorfano has authored two books and numerous articles, and has been involved in organizing ultrasound training courses and national and international congresses for over 20 years.',
		specialties: ['Emergency Medicine', 'Critical Ultrasound', 'Doppler Ultrasound', 'Medical Education'],
		imageUrl: '/faculty/miguel-montorfano.jpg'
	},
	{
		id: 13,
		name: 'Dr. Mateusz Zawadka',
		title: 'WINFOCUS Board of Directors',
		credentials: 'MD, PhD, DESAIC',
		institution: 'Medical University of Warsaw, Poland',
		bio: 'Dr. Mateusz Zawadka is a consultant in anaesthesia and intensive care at the 2nd Department of Anaesthesia and Intensive Care at the University Clinical Centre and an assistant professor at the Medical University of Warsaw. He completed research and clinical fellowships at St. Bartholomew and King\'s College Hospital in London, UK, and earned his PhD in perioperative echocardiography. As a member of the WINFOCUS Board of Directors, he contributes actively to the European Society of Intensive Care Medicine as part of the NEXT committee and supports the development of local point-of-care education programs.',
		specialties: ['Anaesthesia', 'Intensive Care', 'Critical Care Echocardiography', 'Procedural Ultrasound'],
		imageUrl: '/faculty/mateusz-zawadka.jpg'
	},
	{
		id: 14,
		name: 'Dr. Alberto Goffi',
		title: 'Co-Director, BASIC Critical Care Ultrasound Curriculum',
		credentials: 'MD',
		institution: 'St. Michael\'s Hospital - Unity Health Toronto, University of Toronto',
		bio: 'Dr. Alberto Goffi is a Staff Physician at St. Michael\'s Hospital and Assistant Professor at the University of Toronto, Department of Medicine and Interdepartmental Division of Critical Care Medicine. He obtained his MD from the University of Turin, Italy, and completed his Fellowship in Adult Critical Care Medicine at the University of Toronto. His clinical and academic interests include neurocritical care and point-of-care ultrasound in acute care medicine. He is co-director of the IDCCM BASIC Critical Care Ultrasound Curriculum and co-lead of the Toronto Addis Ababa Academic Collaboration Adult Critical Care Medicine fellowship. In 2015, he won the Young Lecturer Award at the ESICM annual meeting and in 2019 received the Frank S. Rutledge Award of Excellence in Critical Care Teaching.',
		specialties: ['Critical Care Medicine', 'Neurocritical Care', 'Point-of-Care Ultrasound', 'Medical Education'],
		imageUrl: '/faculty/alberto-goffi.jpg'
	},
	{
		id: 15,
		name: 'Dr. Larry Melniker',
		title: 'WINFOCUS Board of Directors',
		credentials: 'MD, MBA',
		institution: 'New York-Presbyterian Brooklyn Methodist Hospital, Weill Medical College of Cornell University',
		bio: 'Dr. Lawrence A. Melniker is Vice Chair for Quality Management in the Department of Emergency Medicine at New York-Presbyterian Brooklyn Methodist Hospital and Assistant Clinical Professor at Weill Medical College of Cornell University. He completed a Clinical Epidemiology Fellowship and Master\'s Degree at Cornell in 2004 and a Healthcare MBA at George Washington University in 2016. Dr. Melniker serves on the WINFOCUS board of directors, is a senior methodologist for the WINFOCUS International Consensus Conference Series, and serves on the editorial board for the Critical Ultrasound Journal. His interests include clinical ultrasonography, quality management, outcomes research, educational medical informatics, and socio-economics in healthcare.',
		specialties: ['Emergency Medicine', 'Clinical Ultrasonography', 'Quality Management', 'Outcomes Research'],
		imageUrl: '/faculty/larry-melniker.jpg'
	},
	{
		id: 16,
		name: 'Dr. Arif Hussain',
		title: 'WINFOCUS Past President',
		credentials: 'MD',
		institution: 'King Abdulaziz Medical City, Riyadh, Saudi Arabia',
		bio: 'Dr. Arif Hussain is the Head of Cardiac Critical Care at King Abdulaziz Medical City, Riyadh, Saudi Arabia. A Cardiac Anesthesiologist and Intensivist who received his training at Harvard University in Boston, he is a diplomat in critical care echocardiography and advanced perioperative transesophageal echocardiography by the National Board of Echocardiography, USA. As immediate past president of WINFOCUS and 2022 e-Congress Organizing Chair, Dr. Hussain has been involved in developing, teaching, and directing ultrasound courses worldwide for over 20 years. His research interests include right ventricular function, heart-lung interactions, and multi-organ ultrasound assessment of complex cardiovascular problems.',
		specialties: ['Cardiac Anesthesia', 'Critical Care', 'Cardiac Ultrasound', 'Transesophageal Echocardiography'],
		imageUrl: '/faculty/arif-hussain.jpg'
	},
	{
		id: 17,
		name: 'Dr. Gabriele Via',
		title: 'WINFOCUS Founding Member & International Director',
		credentials: 'MD, EDIC',
		institution: 'Istituto Cardiocentro Ticino, Lugano, Switzerland',
		bio: 'Dr. Gabriele Via is a Senior Consultant Intensivist and Anesthesiologist in the Department of Cardiac Anesthesia and Intensive Care at Istituto Cardiocentro Ticino, Lugano, Switzerland. He is a founding member of WINFOCUS and serves as International Director of the WINFOCUS Focused Cardiac Ultrasound Training Program. Dr. Via is international faculty for WINFOCUS US-Basic and US-Advanced Life Support and Lung Ultrasound courses. A passionate educator, international speaker, and author of peer-reviewed publications and textbook chapters, his main interests include focused cardiac ultrasound, trans-thoracic and trans-esophageal echocardiography, lung ultrasound, and point-of-care ultrasound in critically ill patients.',
		specialties: ['Cardiac Anesthesia', 'Intensive Care', 'Focused Cardiac Ultrasound', 'Lung Ultrasound'],
		imageUrl: '/faculty/gabriele-via.jpg'
	},
	{
		id: 17,
		name: 'Dr. Adrian Wong',
		title: 'Scientific Committee Chair',
		credentials: 'MD',
		institution: 'Kings College Hospital, London, UK',
		bio: 'Dr. Adrian Wong is a consultant in Critical Care Medicine and Anesthesiologist at Kings College Hospital in London. He runs the Point-of-Care ultrasound training program for colleagues within the department. In intensive care medicine and all acute medical specialties, POCUS has become an integral part of patient care. Dr. Wong serves as Chair of the Scientific Committee for WINFOCUS, where there is a growing expectation and need for clinicians to be competent in Point-of-Care ultrasound when caring for acutely unwell patients.',
		specialties: ['Critical Care Medicine', 'Anesthesiology', 'Point-of-Care Ultrasound', 'Medical Education'],
		imageUrl: '/faculty/adrian-wong.jpg'
	},
	{
		id: 18,
		name: 'Dr. Segun Olusanya',
		title: 'Scientific Committee Member',
		credentials: 'BSc, BM, MRCP, FRCA, FFICM',
		institution: 'Guys and St Thomas\'s Hospital, London, UK',
		bio: 'Dr. Segun Olusanya is a Specialty Registrar in Intensive Care Medicine currently working at Guys and St Thomas\'s Hospital, London. He is part of the UK Focused Ultrasound in Intensive Care Committee, an associate editor of the Journal of the Intensive Care Society, an editor for the POCUS Journal, and part of the Editorial and Publishing committee for the ESICM. Dr. Olusanya is accredited in Advanced Transthoracic echocardiography and maintains an interest in whole body ultrasound, particularly in hemodynamically unstable patients. His single great achievement is running a wedding cake business with his wife, Fehintola.',
		specialties: ['Intensive Care Medicine', 'Advanced Transthoracic Echocardiography', 'Whole Body Ultrasound', 'Hemodynamic Assessment'],
		imageUrl: '/faculty/segun-olusanya.jpg'
	},
	{
		id: 19,
		name: 'Dr. Alexander Belaia',
		title: 'Emergency Ultrasound Fellow',
		credentials: 'MD',
		institution: 'Massachusetts General Hospital, Brigham & Women\'s Hospital',
		bio: 'Dr. Alexander Belaia is a Belarusian-American emergency medicine physician currently completing his Emergency Medicine Ultrasound Fellowship at Massachusetts General Hospital and Brigham & Women\'s Hospital. Along with being an attending at these two sites, he also moonlights as an Emergency Medicine Attending at Mass Eye and Ear. A former Division 1 wrestler at Duke University, he discovered his passion for emergency medicine and ultrasound during his training in Brooklyn, NY. Dr. Belaia focuses on international ultrasound, along with cardiac, pulmonary, and testicular applications, and aspires to establish ultrasound programs in Eastern Europe. He lives at home with his 2 cats and serves as the co-chair of his local community color guard.',
		specialties: ['Emergency Medicine', 'International Ultrasound', 'Cardiac POCUS', 'Pulmonary Ultrasound'],
		imageUrl: '/faculty/alex_belaia.jpg'
	}
];
