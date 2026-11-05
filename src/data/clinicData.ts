export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  experience: string;
  image: string;
  specialty: string;
  education: string;
  bio: string;
}

export interface Treatment {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  duration: string;
  anesthesia: string;
  recovery: string;
  benefits: string[];
  procedureSteps: { title: string; desc: string }[];
}

export interface SmileTransformation {
  id: string;
  title: string;
  doctor: string;
  treatment: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  story: string;
}

export interface Review {
  id: string;
  author: string;
  source: string;
  date: string;
  rating: number;
  treatment: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Appointments' | 'Treatments' | 'Location & Insurance' | 'Aftercare';
}

export const CLINIC_INFO = {
  name: 'Dental Zone',
  arabicName: 'منطقة الأسنان',
  legalName: 'Dental Zone W.L.L.',
  headline: 'Your Smile. Our Priority.',
  tagline: 'Personalised dental care, advanced treatments, and a gentle approach in Riffa, Bahrain.',
  address: 'Road No. 977, Riffa 973, Kingdom of Bahrain',
  landmark: 'Easy highway access, dedicated patient parking in Riffa',
  phone1: '+973 1700 0320',
  phone2: '+973 6660 0424',
  whatsapp: '97366600424',
  instagram: 'https://www.instagram.com/dentalzonebh/',
  instagramHandle: '@dentalzonebh',
  rating: 4.8,
  reviewCount: 340,
  operatingHours: [
    { days: 'Saturday – Wednesday', hours: '9:00 AM – 10:00 PM' },
    { days: 'Thursday', hours: '9:00 AM – 9:00 PM' },
    { days: 'Friday', hours: '2:00 PM – 10:00 PM' }
  ],
  stats: [
    { label: 'Happy Patients', value: '10K+', helper: 'Treated with gentle precision' },
    { label: 'Expert Specialists', value: '12+', helper: 'Multi-disciplinary dental team' },
    { label: 'Years of Excellence', value: '8+', helper: 'Serving the Bahrain community' },
    { label: 'Patient Satisfaction', value: '99%', helper: 'Verified Google & clinic reviews' }
  ]
};

export const IMAGES = {
  headerBg: '/src/assets/images/cinematic_clinic_header_hd_1793797167983.jpg',
  heroCoupleBg: '/src/assets/images/dental_zone_hero_couple_hd_1793797649640.jpg',
  brightClinicBg: '/src/assets/images/dental_zone_bright_clinic_hd_1793797859245.jpg',
  officialLogo: '/assets/brand/dental_zone_official_logo.jpg',
  heroDentist: '/src/assets/images/hero_dentist_patient_1793794974373.jpg',
  clinicInterior: '/src/assets/images/clinic_interior_reception_1793794976540.jpg',
  drAfrah: '/src/assets/images/doctor_dr_afrah_1793794976487.jpg',
  smileBanner: '/src/assets/images/cinematic_smile_banner_1793794978140.jpg',
  consultation: '/src/assets/images/appointment_consultation_1793794977458.jpg',
  services: {
    general: '/src/assets/images/service_general_dentistry_1793795008442.jpg',
    cosmetic: '/src/assets/images/service_cosmetic_veneers_1793795007702.jpg',
    orthodontics: '/src/assets/images/service_orthodontics_aligner_1793795009982.jpg',
    implants: '/src/assets/images/service_dental_implants_1793795010170.jpg'
  },
  transformations: {
    trans1Before: '/src/assets/images/smile_trans_1_before_1793795092714.jpg',
    trans1After: '/src/assets/images/smile_trans_1_after_1793795092973.jpg',
    trans2After: '/src/assets/images/smile_trans_2_after_1793795094191.jpg'
  },
  doctors: {
    drAfrah: '/src/assets/images/doctor_dr_afrah_1793794976487.jpg',
    orthodontist: '/src/assets/images/doctor_orthodontist_1793795112618.jpg',
    implantologist: '/src/assets/images/doctor_implantologist_1793795112461.jpg'
  }
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry & Veneers',
    category: 'Aesthetic Dentistry',
    shortDesc: 'Artisan composite and porcelain veneers tailored to naturally harmonize your face and smile.',
    fullDesc: 'At Dental Zone Bahrain, cosmetic dentistry is practiced as a blend of fine art and restorative precision. Guided by specialists like Dr. Afrah, our smile design process takes into account facial symmetry, lip lines, and natural tooth enamel characteristics. We specialize in minimally invasive composite veneers and ultra-thin porcelain restorations.',
    image: IMAGES.services.cosmetic,
    duration: '60 – 90 minutes per session',
    anesthesia: 'Gentle local numbing (if required)',
    recovery: 'Immediate return to daily activities',
    benefits: [
      'Natural tooth translucency and light reflection',
      'Correction of chips, gaps, and severe discoloration',
      'Minimally invasive preparation preserving natural tooth structure',
      'High-polish longevity resistant to everyday staining'
    ],
    procedureSteps: [
      { title: 'Digital Smile Simulation', desc: 'High-resolution photographic analysis and mockups to preview your ideal smile curve.' },
      { title: 'Tooth Preparation & Shade Matching', desc: 'Micro-sculpting the natural enamel surface and matching your desired brightness.' },
      { title: 'Handcrafted Layering', desc: 'Meticulous application of nanohybrid composite or bespoke ceramic bonding.' },
      { title: 'Polishing & Occlusal Balancing', desc: 'Precision contouring for silky smoothness and a completely balanced bite.' }
    ]
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Restorations',
    category: 'Implantology',
    shortDesc: 'Permanent titanium and zirconia implants that restore full biting function and authentic aesthetics.',
    fullDesc: 'Dental Zone provides hospital-grade implant dentistry with 3D guided surgery. Whether replacing a single missing tooth or performing a full-arch rehabilitation, our surgical team uses biocompatible Swiss and German titanium fixtures that integrate securely with the jawbone.',
    image: IMAGES.services.implants,
    duration: '45 – 75 minutes',
    anesthesia: 'Local anesthesia with optional sedation for complete calm',
    recovery: '2 – 3 days mild recovery with routine post-op guidance',
    benefits: [
      'Permanent foundation preventing bone resorption and facial sagging',
      'Looks, feels, and chews identical to healthy natural teeth',
      'Preserves neighboring natural teeth without grinding adjacent enamel',
      'Designed for lifetime durability with routine hygiene care'
    ],
    procedureSteps: [
      { title: '3D CBCT Radiographic Scan', desc: 'Sub-millimeter bone density assessment and virtual implant planning.' },
      { title: 'Minimally Invasive Placement', desc: 'Computer-guided placement of the bio-compatible titanium root fixture.' },
      { title: 'Osseointegration Period', desc: 'Natural biological fusing between the implant surface and your jawbone.' },
      { title: 'Custom Ceramic Crown', desc: 'Securing your handcrafted porcelain or zirconia crown for a seamless smile.' }
    ]
  },
  {
    id: 'orthodontics',
    title: 'Clear Aligners & Orthodontics',
    category: 'Orthodontics',
    shortDesc: 'Virtually invisible aligners and aesthetic ceramic braces for adults, teens, and children.',
    fullDesc: 'Straighten crowded, crooked, or spaced teeth discreetly. Our orthodontic department offers state-of-the-art clear aligner therapy designed with digital 3D intraoral mapping, allowing you to preview every stage of tooth alignment before treatment begins.',
    image: IMAGES.services.orthodontics,
    duration: '6 – 18 months total treatment',
    anesthesia: 'None required',
    recovery: 'Zero downtime; comfortable gentle pressure',
    benefits: [
      'Removable aligners: eat, drink, brush, and floss with complete freedom',
      'Smooth medical-grade polymer without sharp wires or brackets',
      'Predictable 3D timeline tracking every micron of movement',
      'Corrects overbites, underbites, crossbites, and tooth rotation'
    ],
    procedureSteps: [
      { title: 'Intraoral 3D Digital Scan', desc: 'Fast, comfortable digital impression without messy alginate trays.' },
      { title: 'Virtual ClinCheck Plan', desc: 'Doctor-designed sequential movement plan and simulation video.' },
      { title: 'Aligner Delivery & Guidance', desc: 'Receive your custom sets of clear trays with instructions on wear cadence.' },
      { title: 'Retainer Stabilization', desc: 'Custom clear retainers to preserve your aligned smile for life.' }
    ]
  },
  {
    id: 'general-dentistry',
    title: 'General & Preventive Care',
    category: 'General Care',
    shortDesc: 'Comprehensive oral examinations, painless hygiene prophylaxis, digital X-rays, and fluoride protection.',
    fullDesc: 'Prevention is the heart of enduring dental wellness. Our gentle hygienists and clinicians conduct thorough periodontal assessments, deep ultrasonic cleaning, plaque and tartar elimination, and microscopic cavity checks to protect your oral health before complications arise.',
    image: IMAGES.services.general,
    duration: '30 – 50 minutes',
    anesthesia: 'Non-invasive or topical desensitizing gel',
    recovery: 'Immediate',
    benefits: [
      'Stops gum inflammation, gingivitis, and bad breath at the source',
      'Gentle ultrasonic scaling that protects delicate tooth enamel',
      'Early detection of hidden decay with low-radiation digital radiography',
      'Personalized at-home oral care regimens tailored to your lifestyle'
    ],
    procedureSteps: [
      { title: 'Periodontal Assessment', desc: 'Comprehensive examination of gums, teeth, and soft oral tissues.' },
      { title: 'Ultrasonic Scaling', desc: 'Vibrational plaque and calculus removal without scraping enamel.' },
      { title: 'Airflow Polishing', desc: 'Gentle sodium bicarbonate spray removing coffee, tea, and tobacco stains.' },
      { title: 'Protective Fluoride Varnish', desc: 'Remineralizing treatment that strengthens enamel defense against acid.' }
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-afrah',
    name: 'Dr. Afrah',
    title: 'BDS, MSc Cosmetic & Restorative Dentistry',
    role: 'Lead Specialist in Aesthetic & Cosmetic Dentistry',
    experience: '9+ Years Experience',
    image: IMAGES.doctors.drAfrah,
    specialty: 'Composite Veneers, Smile Design, Aesthetic Restorations',
    education: 'Advanced Fellowship in Aesthetic Dentistry',
    bio: 'Renowned among Bahrain patients for her gentle, empathetic touch and artistic precision in composite veneers. Dr. Afrah is dedicated to creating smiles that enhance each individual face with natural harmony rather than artificial uniformity.'
  },
  {
    id: 'dr-david-chen',
    name: 'Dr. David Chen',
    title: 'DDS, MOrth RCSEd',
    role: 'Senior Consultant Orthodontist',
    experience: '8+ Years Experience',
    image: IMAGES.doctors.orthodontist,
    specialty: 'Clear Aligners, Dentofacial Orthopedics & Aesthetic Braces',
    education: 'Specialist Certification in Digital Clear Aligner Systems',
    bio: 'Specializing in complex malocclusion corrections using minimally visible aligners. Dr. Chen combines digital 3D biomechanics with a warm patient-first methodology for teenagers and adult professionals alike.'
  },
  {
    id: 'dr-m-albright',
    name: 'Dr. M. Albright',
    title: 'DMD, ICOI Fellow',
    role: 'Oral Surgeon & Implantology Director',
    experience: '12+ Years Experience',
    image: IMAGES.doctors.implantologist,
    specialty: 'Guided Dental Implants, Bone Grafting & Full-Arch Restorations',
    education: 'Fellow of the International Congress of Oral Implantologists',
    bio: 'With over a decade of surgical implantology experience, Dr. Albright has performed hundreds of guided implant procedures with exemplary success rates, restoring biting confidence and enduring oral health.'
  }
];

export const TRANSFORMATIONS: SmileTransformation[] = [
  {
    id: 'trans-1',
    title: 'Composite Veneers & Diastema Closure',
    doctor: 'Dr. Afrah',
    treatment: 'Aesthetic Composite Veneers (Upper 6)',
    duration: '2 appointments (1 week)',
    beforeImage: IMAGES.transformations.trans1Before,
    afterImage: IMAGES.transformations.trans1After,
    story: 'The patient presented with enamel chipping, slight midline misalignment, and yellowish staining. Dr. Afrah completed minimally invasive composite veneers that restored enamel translucency and created a harmonious smile line.'
  },
  {
    id: 'trans-2',
    title: 'Laser Teeth Whitening & Enamel Polishing',
    doctor: 'Dental Zone Hygiene Team',
    treatment: 'In-Clinic Medical Laser Whitening + Airflow',
    duration: 'Single 60-minute session',
    beforeImage: IMAGES.transformations.trans1Before,
    afterImage: IMAGES.transformations.trans2After,
    story: 'Noticeable brightening by 6 VITA shades in a single comfortable visit, removing deeply ingrained beverage stains while preserving patient enamel comfort.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Noor Al-Khalifa',
    source: 'Google Review',
    date: 'February 2026',
    rating: 5,
    treatment: 'Composite Veneers',
    comment: 'Hands down the best dental experience in Bahrain! Dr. Afrah is incredibly skilled, gentle, and explained every single step. My composite veneers look completely natural and I can’t stop smiling. The clinic in Riffa is spotless and serene.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Hamad Al-Doseri',
    source: 'Google Review',
    date: 'January 2026',
    rating: 5,
    treatment: 'Dental Cleaning & Checkup',
    comment: 'I usually have severe anxiety visiting the dentist, but Dental Zone changed that completely. From the reception staff to the dental assistants, everyone was warm and accommodating. Zero pain during cleaning.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Sara M. Al-Ghatam',
    source: 'Google Review',
    date: 'December 2025',
    rating: 5,
    treatment: 'Clear Aligners Consultation',
    comment: 'Modern technology at its best. They did a 3D scan of my teeth within minutes without any gagging or messy trays. The doctors take their time and never rush you into treatments you don’t need.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Fahad Ebrahim',
    source: 'Google Review',
    date: 'November 2025',
    rating: 5,
    treatment: 'Dental Implant Restoration',
    comment: 'Outstanding medical care. The clinic is equipped with the latest dental chairs and digital imaging. My implant feels exactly like my real tooth. Highly recommended to anyone in Bahrain!',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book an appointment at Dental Zone Bahrain?',
    answer: 'You can book directly using the online appointment form on this website, send us a WhatsApp message at +973 6660 0424, or call our clinic front desk at +973 1700 0320. Our coordinators will assist you in selecting a date and time that fits your schedule.',
    category: 'Appointments'
  },
  {
    question: 'Where is Dental Zone located in Bahrain and is there parking?',
    answer: 'Dental Zone is conveniently located on Road No. 977 in Riffa, Kingdom of Bahrain. We offer dedicated, hassle-free parking spaces directly outside the clinic for our patients.',
    category: 'Location & Insurance'
  },
  {
    question: 'What makes Dr. Afrah’s composite veneers different?',
    answer: 'Dr. Afrah specializes in hand-sculpted, layered composite veneers that mimic the natural translucency, micro-texture, and depth of real tooth enamel. Unlike aggressive porcelain crowns, composite veneers usually require zero to minimal removal of natural tooth enamel.',
    category: 'Treatments'
  },
  {
    question: 'Are dental treatments at Dental Zone painful?',
    answer: 'Not at all. Patient comfort is our highest priority. We utilize gentle topical anesthetic numbing gels before any injection, ergonomic ultra-soft memory-foam dental chairs, and gentle clinical techniques to ensure a relaxing, pain-free visit.',
    category: 'Treatments'
  },
  {
    question: 'What are the clinic’s opening hours?',
    answer: 'We are open Saturday to Wednesday from 9:00 AM to 10:00 PM, Thursday from 9:00 AM to 9:00 PM, and Friday from 2:00 PM to 10:00 PM. We accommodate evening and weekend slots for working professionals and families.',
    category: 'Appointments'
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring your Bahrain CPR (or national ID/passport). If you have recent dental X-rays or a record of existing medical conditions or medications, having those on hand is helpful, though our clinic can perform on-site digital radiography if required.',
    category: 'Appointments'
  }
];
