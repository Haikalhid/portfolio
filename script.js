/**
 * Muhammad Haikal Hidayat — Portfolio Client Script
 * Features:
 * 1. Bilingual ID / EN switcher
 * 2. Hero Portrait Style switcher (Formal Shirt, Editorial Duotone, Smart Casual)
 * 3. Experience timeline filtering
 * 4. Native <dialog> modal interaction & WhatsApp/Email message composer
 * 5. Progressive enhancement fallbacks for CSS Scroll-Driven Animations
 */

const translations = {
  id: {
    'nav.available': 'Available for New Project',
    'nav.work': 'Work',
    'nav.service': 'Service',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.letsTalk': "Let's Talk",
    'hero.univ': 'Teknologi Rekayasa Internet — Universitas Gadjah Mada (GPA 3.71/4.00)',
    'hero.chip1': 'Cybersecurity & IoT Security',
    'hero.chip2': 'Network Operations',
    'hero.chip3': 'AI Enthusiast',
    'hero.role': 'Internet Engineering & Security',
    'hero.tagline':
      'Mahasiswa Teknologi Rekayasa Internet UGM yang berfokus pada pengembangan keamanan sistem IoT, operasional jaringan berskala nasional (NOC), dan integrasi kecerdasan buatan.',
    'hero.ctaPrimary': "Let's collaborate",
    'hero.ctaSecondary': 'Lihat Profil Lengkap',
    'about.title': 'Tentang Saya',
    'about.lead':
      'Mahasiswa Sarjana Terapan Teknologi Rekayasa Internet di Universitas Gadjah Mada (IPK 3.71/4.00) dengan minat kuat di bidang Artificial Intelligence dan Cybersecurity.',
    'about.body':
      'Saya memiliki pengalaman langsung dalam operasional jaringan (Network Operations Center), memantau ratusan titik jaringan di wilayah 3T (Terdepan, Terluar, Tertinggal), mendukung teknisi lapangan dalam pemecahan masalah (troubleshooting), serta menyusun laporan status harian. Selain itu, saya berpengalaman dalam penjaminan kualitas data (Data QA), membersihkan, memvalidasi, dan menstrukturkan data marketplace untuk mendukung analisis klien. Melalui keterlibatan aktif di organisasi kemahasiswaan dan konferensi teknologi internasional, saya terus mengasah kemampuan kolaborasi tim, komunikasi profesional, dan koordinasi acara.',
    'metrics.m1Label': 'IPK Universitas Gadjah Mada',
    'metrics.m1Note': 'Sarjana Terapan Teknologi Rekayasa Internet',
    'metrics.m2Label': 'Monitoring Jaringan Harian',
    'metrics.m2Note': 'Wilayah 3T melintasi 13 klaster operasional',
    'metrics.m3Label': 'Pemulihan Gangguan NOC',
    'metrics.m3Note': 'Kolaborasi troubleshooting bersama teknisi lapangan',
    'metrics.m4Label': 'Validasi Data Marketplace',
    'metrics.m4Note': 'Standarisasi produk dari 50+ brand & 4 platform',
    'work.title': 'Proyek Kolaborasi & Kontribusi',
    'work.subtitle':
      'Proyek kolaborasi tim di mana saya (@Haikalhid) berkontribusi pada sistem akses berbasis AI, penguatan keamanan infrastruktur IoT, dan pengembangan perangkat jaringan.',
    'work.p1Status': 'Team Collaboration',
    'work.p1Role': 'Proyek Kolaborasi Tim • Kontributor: @Haikalhid',
    'work.p1Desc':
      'Proyek kolaborasi pengembangan sistem kontrol akses gerbang pintar (smart gate) otomatis berbasis Internet of Things (IoT) yang mengintegrasikan model Artificial Intelligence untuk pemindaian biometrik wajah (face recognition & liveness detection), mikrokontroler ESP32, infrastruktur backend Python, serta dashboard pemantauan terpusat secara real-time.',
    'work.p2Status': 'Collab: IoT Security Focus',
    'work.p2Role': 'Proyek Kolaborasi • Fokus Kontribusi (@Haikalhid): Keamanan IoT',
    'work.p2Desc':
      'Berkolaborasi pada platform pemantauan gedung pintar DTEDI dengan fokus spesifik pada perancangan dan penguatan lapisan keamanan (IoT Security Enhancement). Mencakup pengamanan autentikasi jalur edge-ke-server menggunakan verifikasi kriptografis constant-time di atas TLS, pemfilteran whitelist perangkat di tingkat gateway, pengamanan sesi berbasis Argon2id, pembatasan laju akses (rate limiting & per-user lockout), kontrol akses berbasis peran (RBAC), serta prosedur rotasi kredensial.',
    'work.p2Note':
      'Catatan Peran Kolaborasi: Proyek ini merupakan repositori kolaborasi tim (mochmizan/proyek-monitoring-dtedi). Kontribusi saya (@Haikalhid) berfokus khusus pada pengembangan keamanan sistem IoT, bukan pada pembangunan awal perangkat IoT maupun komunikasi dasar sensornya.',
    'work.p3Status': 'Sedang On Progress',
    'work.p3Role': 'Proyek Kolaborasi Tim • Kontributor: @Haikalhid',
    'work.p3Desc':
      'Proyek kolaborasi ini saat ini sedang dalam tahap pengerjaan (On Progress).',
    'work.repoOwnerLabel': 'Repositori Tim:',
    'work.viewRepo': 'Lihat Repository Tim',
    'services.title': 'Bidang Keahlian Utama',
    'services.subtitle':
      'Kombinasi keahlian teknis di bidang infrastruktur jaringan, keamanan siber, pemrograman, dan penjaminan kualitas data.',
    'services.s1Title': 'Network Operations & MikroTik',
    'services.s1Desc':
      'Pemantauan infrastruktur jaringan skala besar (NOC) di wilayah 3T, konfigurasi router MikroTik, administrasi sistem Linux, analisis insiden konektivitas, dan pelaporan status operasional harian.',
    'services.s2Title': 'Cybersecurity & IoT Security',
    'services.s2Desc':
      'Penguatan keamanan sistem Internet of Things (IoT), autentikasi kriptografis antar-gateway, manajemen kontrol akses (RBAC), pengamanan sesi pengguna, dan mitigasi celah keamanan jaringan.',
    'services.s3Title': 'AI Integration & Web Development',
    'services.s3Desc':
      'Pengembangan aplikasi web dan prototipe berbasis kecerdasan buatan menggunakan Python, JavaScript, HTML, PHP, serta pemrograman basis data untuk sistem pemantauan dan kontrol cerdas.',
    'services.s4Title': 'Data QA & Technical Coordination',
    'services.s4Desc':
      'Pembersihan, validasi, dan standarisasi ribuan data produk multi-marketplace untuk analisis pasar, didukung kemampuan komunikasi publik, manajemen acara teknologi, dan kolaborasi lintas divisi.',
    'exp.title': 'Pengalaman Profesional & Organisasi',
    'exp.filterAll': 'Semua [06]',
    'exp.filterPro': 'Profesional [02]',
    'exp.filterOrg': 'Organisasi & Komunitas [04]',
    'exp.badgePro': 'Professional',
    'exp.badgeOrg': 'Organization & Event',
    'exp.trippo1':
      'Memantau 475 titik jaringan (network sites) setiap hari di wilayah 3T (Terdepan, Terluar, dan Tertinggal), serta mengidentifikasi 5–20 titik yang mengalami gangguan baru per hari untuk tindak lanjut segera.',
    'exp.trippo2':
      'Mendukung teknisi lapangan di 13 klaster dalam menangani pemecahan masalah (troubleshooting) gangguan titik jaringan, berkontribusi sebagai bagian dari tim NOC untuk memulihkan 50–100 titik kembali online.',
    'exp.trippo3':
      'Menyusun laporan status titik jaringan dua kali sehari (pagi dan sore) yang mencakup titik aktif (up) dan gangguan (down) guna memastikan tim serta pemangku kepentingan selalu mendapatkan informasi terkini.',
    'exp.magpie1':
      'Membersihkan, menyortir, dan menstandarisasi 300–1.000 daftar produk (product listings) per bulan dari 4 marketplace utama (Shopee, Tokopedia, Lazada, dan TikTok Shop) melalui platform Magpie.',
    'exp.magpie2':
      'Memverifikasi dan memvalidasi nama produk, harga, serta kategori di lebih dari 50 brand untuk menjamin konsistensi dan akurasi data.',
    'exp.magpie3':
      'Mengonversi data mentah menjadi format terstruktur pada 3 kategori produk untuk mendukung analisis pasar klien.',
    'exp.forkomDate': 'Mei 2025 – Sekarang',
    'exp.forkom1':
      'Melaksanakan kunjungan studi banding (benchmarking) dengan organisasi mahasiswa TI di berbagai universitas mitra untuk bertukar praktik terbaik kelembagaan dan memperluas jejaring eksternal.',
    'exp.forkom2':
      'Menyelenggarakan webinar berbagi pengalaman alumni secara daring bekerja sama dengan Divisi Kajian Strategis dan Advokasi (Kastrad) untuk memfasilitasi bimbingan serta wawasan karier.',
    'exp.opensuse1':
      'Bertugas sebagai Liaison Officer (LO) bagi para pembicara, mendampingi jadwal, lokasi venue, serta logistik acara, sekaligus mendukung operasional ruang pembicara sebagai pencatat waktu (timekeeper).',
    'exp.opensuse2':
      'Bertugas sebagai Master of Ceremony (MC) pada Hari ke-2, memandu jalannya rangkaian acara dan membangun interaksi dengan audiens internasional.',
    'exp.netcomp1':
      'Merancang susunan acara (rundown) dan mengelola keseluruhan alur NetClass, rangkaian lokakarya (workshop series) di bawah naungan NETCOMP 4.0.',
    'exp.netcomp2':
      'Berkoordinasi dengan moderator, divisi IT (pengaturan lingkungan Zoom), dan divisi KSK (distribusi e-sertifikat) untuk memastikan kelancaran sesi bagi seluruh peserta.',
    'exp.openinfra1':
      'Membantu menyiapkan dan mengelola peralatan teknis untuk mendukung kelancaran jalannya sesi-sesi seminar.',
    'exp.openinfra2':
      'Berperan aktif selama acara utama dengan menjaga keamanan area venue serta bertugas sebagai timekeeper bagi pembicara workshop sebelum dan sesudah sesi berlangsung.',
    'edu.title': 'Riwayat Pendidikan',
    'edu.ugmDegree': 'Sarjana Terapan (D4), Teknologi Rekayasa Internet',
    'edu.ugmPeriod': 'Agu 2024 – Sekarang',
    'edu.courseworkLabel': 'Mata Kuliah Relevan:',
    'edu.ugmCourses': 'Cybersecurity, Cloud Computing, Network Administration, Internet of Things.',
    'edu.projectLabel': 'Proyek Akademik:',
    'edu.ugmProjects':
      'Pengembangan SAPA (Smart Access Prototyping Application), Penguatan Keamanan untuk Sistem Monitoring Gedung Pintar (Smart Building Monitoring Systems).',
    'edu.smaDegree': 'Program Ilmu Pengetahuan Alam (MIPA)',
    'edu.smaCourses': 'Matematika Lanjut, Fisika, Kimia, Biologi, Statistika.',
    'skills.title': 'Keahlian & Bahasa',
    'skills.techTitle': 'Technical Skills',
    'skills.softTitle': 'Soft Skills',
    'skills.s1': 'Adaptability & Rapid Learning',
    'skills.s2': 'Critical Thinking & Problem-Solving',
    'skills.s3': 'Teamwork & Cross-Functional Collaboration',
    'skills.s4': 'Time Management & Self-Discipline',
    'skills.langTitle': 'Bahasa (Languages)',
    'skills.langId': 'Native Speaker',
    'skills.langEn': 'Conversational',
    'contact.title': 'Mari Berkolaborasi pada Proyek Berikutnya.',
    'contact.subtitle':
      'Terbuka untuk kesempatan magang, riset keamanan IoT & jaringan, pengembangan sistem AI, maupun kolaborasi proyek teknologi.',
    'contact.backToTop': 'Kembali ke Atas ↑',
    'modal.title': 'Hubungi Muhammad Haikal',
    'modal.desc':
      'Pilih jalur komunikasi langsung atau tulis pesan singkat di bawah untuk dikirimkan via Email atau WhatsApp.',
    'modal.nameLabel': 'Nama Anda',
    'modal.emailLabel': 'Email Anda',
    'modal.msgLabel': 'Pesan / Topik Kolaborasi',
    'modal.sendWa': 'Kirim via WhatsApp ↗',
    'modal.sendEmail': 'Buka di Email Client',
  },
  en: {
    'nav.available': 'Available for New Project',
    'nav.work': 'Work',
    'nav.service': 'Service',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.letsTalk': "Let's Talk",
    'hero.univ': 'Internet Engineering Technology — Universitas Gadjah Mada (GPA 3.71/4.00)',
    'hero.chip1': 'Cybersecurity & IoT Security',
    'hero.chip2': 'Network Operations',
    'hero.chip3': 'AI Enthusiast',
    'hero.role': 'Internet Engineering & Security',
    'hero.tagline':
      'Undergraduate Internet Engineering Technology student at UGM focusing on IoT security hardening, large-scale Network Operations (NOC), and AI-driven systems.',
    'hero.ctaPrimary': "Let's collaborate",
    'hero.ctaSecondary': 'Explore Full Profile',
    'about.title': 'About Me',
    'about.lead':
      'Undergraduate Internet Engineering Technology student at Universitas Gadjah Mada (GPA 3.71/4.00) with a strong interest in Artificial Intelligence and Cybersecurity.',
    'about.body':
      'I have hands-on experience in network operations, where I monitor network sites across frontier, outermost, and disadvantaged (3T) regions, support field technicians in troubleshooting, and prepare daily status reports. I also have experience in data quality assurance, cleaning, validating, and structuring marketplace data to support client analysis. Through my involvement in student organizations and technology events, I have strengthened my teamwork, professional communication, and event coordination skills.',
    'metrics.m1Label': 'Universitas Gadjah Mada GPA',
    'metrics.m1Note': 'B.App.Sc. in Internet Engineering Technology',
    'metrics.m2Label': 'Daily Network Sites Monitored',
    'metrics.m2Note': 'Across 3T regions & 13 operational clusters',
    'metrics.m3Label': 'NOC Site Restorations',
    'metrics.m3Note': 'Collaborative troubleshooting with field engineers',
    'metrics.m4Label': 'Marketplace Data QA',
    'metrics.m4Note': 'Standardized listings across 50+ brands & 4 platforms',
    'work.title': 'Collaborative Projects & Contributions',
    'work.subtitle':
      'Team collaboration repositories where I (@Haikalhid) contributed across AI biometric access control, IoT security hardening, and network tooling.',
    'work.p1Status': 'Team Collaboration',
    'work.p1Role': 'Team Collaboration Project • Contributor: @Haikalhid',
    'work.p1Desc':
      'Collaborative team project building an automated IoT smart gate access control system integrating Artificial Intelligence for biometric face recognition & liveness detection, ESP32 microcontrollers, a Python backend infrastructure, and a real-time centralized monitoring dashboard.',
    'work.p2Status': 'Collab: IoT Security Focus',
    'work.p2Role': 'Team Collaboration • Contribution Focus (@Haikalhid): IoT Security',
    'work.p2Desc':
      'Collaborated on the DTEDI Smart Building Monitoring platform with a specific focus on designing and hardening the IoT security layer. Implemented authenticated edge-to-cloud communication with constant-time cryptographic verification over TLS, gateway device whitelist filtering, Argon2id session security, rate limiting & per-user lockout, Role-Based Access Control (RBAC), and credential rotation procedures.',
    'work.p2Note':
      'Collaboration Scope Note: This is a team repository (mochmizan/proyek-monitoring-dtedi). My contribution (@Haikalhid) focused strictly on IoT security enhancement and hardening, rather than the initial IoT hardware assembly or baseline sensor communication protocols.',
    'work.p3Status': 'Currently On Progress',
    'work.p3Role': 'Team Collaboration Project • Contributor: @Haikalhid',
    'work.p3Desc':
      'This collaborative project is currently on progress.',
    'work.repoOwnerLabel': 'Team Repository:',
    'work.viewRepo': 'View Team Repository',
    'services.title': 'Core Competencies',
    'services.subtitle':
      'Combining technical execution in network operations, cybersecurity hardening, software development, and data quality assurance.',
    'services.s1Title': 'Network Operations & MikroTik',
    'services.s1Desc':
      'Large-scale network site monitoring (NOC) across 3T regions, MikroTik router configuration, Linux system administration, incident troubleshooting, and daily operational reporting.',
    'services.s2Title': 'Cybersecurity & IoT Security',
    'services.s2Desc':
      'Hardening Internet of Things (IoT) architectures, gateway-to-cloud authentication, Role-Based Access Control (RBAC), session protection, and network vulnerability mitigation.',
    'services.s3Title': 'AI Integration & Web Development',
    'services.s3Desc':
      'Developing web applications and AI-integrated prototypes using Python, JavaScript, HTML, PHP, and relational/non-relational database programming.',
    'services.s4Title': 'Data QA & Technical Coordination',
    'services.s4Desc':
      'Cleaning, validating, and standardizing high-volume multi-marketplace datasets for client analytics, paired with strong public relations and tech event coordination.',
    'exp.title': 'Professional & Leadership Experience',
    'exp.filterAll': 'All [06]',
    'exp.filterPro': 'Professional [02]',
    'exp.filterOrg': 'Organization & Events [04]',
    'exp.badgePro': 'Professional',
    'exp.badgeOrg': 'Organization & Event',
    'exp.trippo1':
      'Monitored 475 network sites daily across 3T (frontier, outermost, and disadvantaged) regions, identifying 5–20 newly down sites per day for immediate follow-up.',
    'exp.trippo2':
      'Supported field technicians across 13 clusters in troubleshooting site issues, contributing as part of the NOC team to restoring 50–100 sites back online.',
    'exp.trippo3':
      'Prepared twice-daily (morning and evening) site status reports, covering up and down sites, to keep the team and stakeholders informed.',
    'exp.magpie1':
      'Cleaned, sorted, and standardized 300–1,000 product listings per month from 4 marketplaces (Shopee, Tokopedia, Lazada, and TikTok Shop) through the Magpie platform.',
    'exp.magpie2':
      'Verified and validated product names, prices, and categories across 50+ brands to ensure data consistency.',
    'exp.magpie3':
      'Converted raw data into structured formats across 3 product categories to support client market analysis.',
    'exp.forkomDate': 'May 2025 – Present',
    'exp.forkom1':
      'Conducted benchmarking visits with IT student organizations across partner universities to exchange institutional best practices and expand external networks.',
    'exp.forkom2':
      'Organized an online alumni sharing webinar in collaboration with the Strategic Studies and Advocacy (Kastrad) Division to facilitate career mentorship and insights.',
    'exp.opensuse1':
      'Served as Liaison Officer (LO) for speakers, guiding them on schedules, venue locations, and other event logistics, and supported speaker room operations as timekeeper.',
    'exp.opensuse2':
      'Served as Master of Ceremony on Day 2, guiding the flow of the program and engaging the international audience.',
    'exp.netcomp1':
      'Designed the event rundown and managed the overall flow of NetClass, a workshop series under NETCOMP 4.0.',
    'exp.netcomp2':
      'Coordinated with moderators, the IT division (Zoom environment setup), and the KSK division (e-certificate distribution) to ensure smooth session delivery for participants.',
    'exp.openinfra1':
      'Assisted in preparing and managing technical equipment to support the smooth running of the seminar sessions.',
    'exp.openinfra2':
      'Volunteered during the main event by maintaining venue security and serving as timekeeper for workshop speakers, providing guidance and coordination before and after their session.',
    'edu.title': 'Education',
    'edu.ugmDegree': 'Bachelor of Applied Science, Internet Engineering',
    'edu.ugmPeriod': 'Aug 2024 – Present',
    'edu.courseworkLabel': 'Relevant Coursework:',
    'edu.ugmCourses': 'Cybersecurity, Cloud Computing, Network Administration, Internet of Things.',
    'edu.projectLabel': 'Projects:',
    'edu.ugmProjects':
      'Developed SAPA (Smart Access Prototyping Application), Security Enhancement for Smart Building Monitoring Systems.',
    'edu.smaDegree': 'Natural Science Program',
    'edu.smaCourses': 'Advanced Mathematics, Physics, Chemistry, Biology, Statistics.',
    'skills.title': 'Skills & Competencies',
    'skills.techTitle': 'Technical Skills',
    'skills.softTitle': 'Soft Skills',
    'skills.s1': 'Adaptability & Rapid Learning',
    'skills.s2': 'Critical Thinking & Problem-Solving',
    'skills.s3': 'Teamwork & Cross-Functional Collaboration',
    'skills.s4': 'Time Management & Self-Discipline',
    'skills.langTitle': 'Languages',
    'skills.langId': 'Native',
    'skills.langEn': 'Conversational',
    'contact.title': "Let's Collaborate on Your Next Project.",
    'contact.subtitle':
      'Open for internship opportunities, IoT & network security projects, AI system integration, and technical collaborations.',
    'contact.backToTop': 'Back to Top ↑',
    'modal.title': 'Contact Muhammad Haikal',
    'modal.desc':
      'Reach out directly through the channels below or compose a quick message via WhatsApp or Email.',
    'modal.nameLabel': 'Your Name',
    'modal.emailLabel': 'Your Email',
    'modal.msgLabel': 'Message / Collaboration Topic',
    'modal.sendWa': 'Send via WhatsApp ↗',
    'modal.sendEmail': 'Open in Email Client',
  },
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Switcher (ID / EN)
  let currentLang = localStorage.getItem('haikal_portfolio_lang') || 'id';
  const langToggleBtn = document.getElementById('lang-toggle');
  const langIndicators = document.querySelectorAll('[data-lang-indicator]');

  const applyLanguage = (lang) => {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('haikal_portfolio_lang', lang);

    const dict = translations[lang] || translations.id;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    langIndicators.forEach((ind) => {
      ind.classList.toggle('active', ind.getAttribute('data-lang-indicator') === lang);
    });
  };

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'id' ? 'en' : 'id');
    });
  }
  applyLanguage(currentLang);

  // 2. Interactive 3D Abstract Geometric Cyber-Lattice (Canvas)
  const geoCanvas = document.getElementById('geo-3d-canvas');
  const motionBtn = document.getElementById('toggle-geo-motion');

  if (geoCanvas && geoCanvas.getContext) {
    const ctx = geoCanvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 460;
    geoCanvas.width = size * dpr;
    geoCanvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Golden ratio icosahedron vertices (Outer Geometric Shell)
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVerts = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ].map(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      return [x / len, y / len, z / len];
    });

    const faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];

    // Inner Octahedron Core vertices & edges
    const innerVerts = [
      [1, 0, 0], [-1, 0, 0], [0, 1, 0],
      [0, -1, 0], [0, 0, 1], [0, 0, -1],
    ];
    const innerFaces = [
      [0, 2, 4], [2, 1, 4], [1, 3, 4], [3, 0, 4],
      [2, 0, 5], [1, 2, 5], [3, 1, 5], [0, 3, 5],
    ];

    let rotX = 0.42;
    let rotY = 0.65;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let isRunning = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    const updateButtonLabel = () => {
      if (!motionBtn) return;
      motionBtn.textContent = isRunning ? 'Pause' : 'Play';
      motionBtn.setAttribute('aria-label', isRunning ? 'Pause 3D rotation' : 'Play 3D rotation');
    };
    updateButtonLabel();

    if (motionBtn) {
      motionBtn.addEventListener('click', () => {
        isRunning = !isRunning;
        updateButtonLabel();
        if (isRunning) requestAnimationFrame(renderLoop);
      });
    }

    // Subtle interactive pointer tilt
    geoCanvas.addEventListener('pointermove', (e) => {
      const rect = geoCanvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetTiltY = nx * 0.45;
      targetTiltX = -ny * 0.45;
      if (!isRunning) drawScene();
    });

    geoCanvas.addEventListener('pointerleave', () => {
      targetTiltX = 0;
      targetTiltY = 0;
      if (!isRunning) drawScene();
    });

    const rotatePoint = ([x, y, z], ax, ay, az) => {
      // Rotate Y
      let x1 = x * Math.cos(ay) + z * Math.sin(ay);
      let z1 = -x * Math.sin(ay) + z * Math.cos(ay);
      // Rotate X
      let y2 = y * Math.cos(ax) - z1 * Math.sin(ax);
      let z2 = y * Math.sin(ax) + z1 * Math.cos(ax);
      // Rotate Z
      let x3 = x1 * Math.cos(az) - y2 * Math.sin(az);
      let y3 = x1 * Math.sin(az) + y2 * Math.cos(az);
      return [x3, y3, z2];
    };

    const project = ([x, y, z], scale) => {
      const fov = 3.8;
      const dist = fov / (fov - z);
      return {
        x: size / 2 + x * scale * dist,
        y: size / 2 + y * scale * dist,
        z,
        dist,
      };
    };

    const drawRing = (radius, tiltX, tiltY, tiltZ, dashed, strokeStyle) => {
      const steps = 64;
      ctx.beginPath();
      if (dashed) ctx.setLineDash([4, 6]);
      else ctx.setLineDash([]);

      for (let i = 0; i <= steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const pt = [Math.cos(theta), Math.sin(theta), 0];
        const rPt = rotatePoint(pt, tiltX, tiltY, tiltZ);
        const p = project(rPt, radius);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 1.15;
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawScene = () => {
      ctx.clearRect(0, 0, size, size);

      const ax = rotX + targetTiltX * 0.35;
      const ay = rotY + targetTiltY * 0.35;

      // Subtle background architectural grid hairlines
      ctx.strokeStyle = 'rgba(24, 24, 27, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, 186, 0, Math.PI * 2);
      ctx.stroke();

      // 1. Back Orbital Gyro Rings
      drawRing(175, ax * 0.6 + 1.05, ay * 0.5, 0.3, true, 'rgba(24, 24, 27, 0.22)');
      drawRing(152, -ax * 0.4 + 0.5, -ay * 0.7, -0.4, false, 'rgba(24, 24, 27, 0.14)');

      // 2. Transform Outer Icosahedron Lattice & Inner Core
      const outerScale = 122;
      const innerScale = 64;

      const tOuter = rawVerts.map((v) => rotatePoint(v, ax, ay, 0.15));
      const pOuter = tOuter.map((v) => project(v, outerScale));

      const tInner = innerVerts.map((v) => rotatePoint(v, -ax * 1.3, -ay * 1.2, 0.4));
      const pInner = tInner.map((v) => project(v, innerScale));

      // Sort outer faces back-to-front
      const sortedOuter = faces
        .map((f) => {
          const v0 = tOuter[f[0]];
          const v1 = tOuter[f[1]];
          const v2 = tOuter[f[2]];
          const cz = (v0[2] + v1[2] + v2[2]) / 3;
          // Face normal
          const ux = v1[0] - v0[0];
          const uy = v1[1] - v0[1];
          const uz = v1[2] - v0[2];
          const vx = v2[0] - v0[0];
          const vy = v2[1] - v0[1];
          const vz = v2[2] - v0[2];
          const nx = uy * vz - uz * vy;
          const ny = uz * vx - ux * vz;
          const nz = ux * vy - uy * vx;
          const nLen = Math.hypot(nx, ny, nz) || 1;
          // Light direction (top-left-front)
          const light = (nx * -0.45 + ny * -0.6 + nz * 0.66) / nLen;
          return { f, cz, nz: nz / nLen, light };
        })
        .sort((a, b) => a.cz - b.cz);

      // Draw back-facing outer facets (translucent architectural glass)
      sortedOuter.forEach(({ f, nz }) => {
        if (nz > 0) return;
        const p0 = pOuter[f[0]];
        const p1 = pOuter[f[1]];
        const p2 = pOuter[f[2]];
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(24, 24, 27, 0.03)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(24, 24, 27, 0.14)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      });

      // Draw Inner Obsidian Octahedron Core (Solid shaded 3D crystal)
      const sortedInner = innerFaces
        .map((f) => {
          const v0 = tInner[f[0]];
          const v1 = tInner[f[1]];
          const v2 = tInner[f[2]];
          const cz = (v0[2] + v1[2] + v2[2]) / 3;
          const ux = v1[0] - v0[0];
          const uy = v1[1] - v0[1];
          const uz = v1[2] - v0[2];
          const vx = v2[0] - v0[0];
          const vy = v2[1] - v0[1];
          const vz = v2[2] - v0[2];
          const nx = uy * vz - uz * vy;
          const ny = uz * vx - ux * vz;
          const nz = ux * vy - uy * vx;
          const nLen = Math.hypot(nx, ny, nz) || 1;
          const light = Math.max(0, (nx * -0.4 + ny * -0.65 + nz * 0.65) / nLen);
          return { f, cz, light };
        })
        .sort((a, b) => a.cz - b.cz);

      sortedInner.forEach(({ f, light }) => {
        const p0 = pInner[f[0]];
        const p1 = pInner[f[1]];
        const p2 = pInner[f[2]];
        const shade = Math.round(22 + light * 48);
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade + 4})`;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw front-facing outer facets (crisp geometric cage + shaded planes)
      sortedOuter.forEach(({ f, nz, light }) => {
        if (nz <= 0) return;
        const p0 = pOuter[f[0]];
        const p1 = pOuter[f[1]];
        const p2 = pOuter[f[2]];
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        const alpha = 0.04 + Math.max(0, light) * 0.12;
        ctx.fillStyle = `rgba(24, 24, 27, ${alpha.toFixed(3)})`;
        ctx.fill();
        ctx.strokeStyle = 'rgba(24, 24, 27, 0.78)';
        ctx.lineWidth = 1.4;
        ctx.stroke();
      });

      // Draw Node Vertices on Outer Geodesic Shell
      pOuter.forEach((p, idx) => {
        const r = p.z > 0 ? 4.2 : 2.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = idx % 4 === 0 && p.z > 0 ? '#22c55e' : '#18181b';
        ctx.fill();
        if (p.z > 0) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });
    };

    const renderLoop = () => {
      if (!isRunning) return;
      rotY += 0.0065;
      rotX += 0.0028;
      drawScene();
      requestAnimationFrame(renderLoop);
    };

    drawScene();
    if (isRunning) {
      requestAnimationFrame(renderLoop);
    }
  }

  // 3. Experience Timeline Filter
  const filterButtons = document.querySelectorAll('.filter-btn[data-exp-filter]');
  const timelineItems = document.querySelectorAll('.timeline-item[data-exp-category]');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-exp-filter');
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      timelineItems.forEach((item) => {
        const category = item.getAttribute('data-exp-category');
        const matches = filterValue === 'all' || category === filterValue;
        item.hidden = !matches;
      });
    });
  });

  // 4. Native <dialog> Modal ("Let's Talk")
  const contactDialog = document.getElementById('contact-dialog');
  const openModalBtn = document.getElementById('open-contact-modal');
  const quickMessageForm = document.getElementById('quick-message-form');

  if (openModalBtn && contactDialog) {
    openModalBtn.addEventListener('click', () => {
      contactDialog.showModal();
    });
  }

  if (quickMessageForm) {
    let activeChannel = 'whatsapp';
    quickMessageForm.querySelectorAll('button[type="submit"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeChannel = btn.getAttribute('data-channel') || 'whatsapp';
      });
    });

    quickMessageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('sender-name')?.value.trim() || '';
      const email = document.getElementById('sender-email')?.value.trim() || '';
      const message = document.getElementById('sender-message')?.value.trim() || '';

      const textBody = `Halo Muhammad Haikal, saya ${name} (${email}).\n\n${message}`;
      if (activeChannel === 'email') {
        const subject = encodeURIComponent(`Kolaborasi Portofolio — ${name}`);
        const body = encodeURIComponent(textBody);
        window.location.href = `mailto:haikalhidayat52@gmail.com?subject=${subject}&body=${body}`;
      } else {
        const waText = encodeURIComponent(textBody);
        window.open(`https://wa.me/6287888451327?text=${waText}`, '_blank', 'noopener,noreferrer');
      }

      if (contactDialog?.open) {
        contactDialog.close();
      }
    });
  }

  // 5. Fallback for Scroll-Driven Animations (modern-web-guidance: scroll-entry-exit-effects & shrinking-header-on-scroll)
  if (
    !CSS.supports('(animation-timeline: view()) and (animation-range: entry)') &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const ratio = Math.min(1, entry.intersectionRatio / 0.25);
          entry.target.style.opacity = String(0.2 + ratio * 0.8);
          entry.target.style.transform = `translateY(${(1 - ratio) * 20}px)`;
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 1],
      }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });
  }

  if (!CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
    const header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener(
        'scroll',
        () => {
          const scrolled = window.scrollY > 40;
          header.style.borderBlockEndColor = scrolled ? 'var(--border-light)' : 'transparent';
          header.style.boxShadow = scrolled ? '0 4px 20px -4px rgba(0, 0, 0, 0.05)' : 'none';
        },
        { passive: true }
      );
    }
  }
});
