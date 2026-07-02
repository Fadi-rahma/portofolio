/* ==========================================================================
   data.js — Seluruh konten bilingual (ID/EN) untuk portofolio Fadi Rahma
   Semua teks yang tampil di layar diambil dari sini, supaya switch bahasa
   tinggal ganti object "id" <-> "en" tanpa reload halaman.
   ========================================================================== */

const SITE_DATA = {
  id: {
    nav: {
      home: "Beranda",
      skills: "Keahlian",
      projects: "Proyek",
      certificates: "Sertifikat",
      contact: "Kontak"
    },
    hero: {
      greeting: "Halo, saya",
      name: "Fadi Rahma Azizah",
      nickname: "biasa dipanggil Rahma",
      role: "Siswa Teknik Komputer & Jaringan (TKJ/TJKT)",
      school: "SMK Negeri 1 Dukuhturi · 2024 – 2027",
      personality: "Tipe kepribadian INTJ — strategis, analitis, dan terstruktur.",
      desc: "Fokus membangun fondasi kuat di dunia jaringan & infrastruktur, sembari terus mengasah kemampuan pengembangan web modern dan integrasi AI.",
      ctaProjects: "Lihat Proyek",
      ctaContact: "Hubungi Saya",
      orbitCaption: "Visualisasi jaringan node — merepresentasikan dunia Networking"
    },
    skills: {
      title: "Keahlian",
      subtitle: "Arahkan kursor ke setiap kartu untuk melihat rincian & statistik kemahiran.",
      categories: [
        {
          id: "networking",
          icon: "🖧",
          title: "Networking & Sistem Operasi",
          summary: "Administrasi server, konfigurasi jaringan, hingga virtualisasi.",
          items: [
            { name: "Administrasi Server (Debian Linux)", level: 85 },
            { name: "Konfigurasi Jaringan & Layanan (BIND9 DNS, IP Configuration)", level: 80 },
            { name: "Virtualisasi (VMware, VirtualBox)", level: 78 }
          ]
        },
        {
          id: "webdev",
          icon: "💻",
          title: "Web Development & Tools",
          summary: "Membangun aplikasi web modern serta memanfaatkan AI sebagai alat bantu.",
          items: [
            { name: "Next.js & TypeScript", level: 80 },
            { name: "Data Analytics & Visualization", level: 75 },
            { name: "AI Tools Integration & Prompting", level: 90 }
          ]
        },
        {
          id: "languages",
          icon: "🌐",
          title: "Bahasa yang Dikuasai",
          summary: "Kemampuan komunikasi lintas bahasa untuk berkolaborasi lebih luas.",
          items: [
            { name: "Bahasa Indonesia (Native)", level: 100 },
            { name: "Inggris (Tingkat B1)", level: 60 },
            { name: "Jepang (Dasar — menuju N5)", level: 20 },
            { name: "Rusia (Dasar)", level: 15 },
            { name: "Jerman (Dasar)", level: 15 }
          ]
        }
      ],
      note: "*Persentase merupakan estimasi tingkat kemahiran pribadi sebagai ilustrasi statistik."
    },
    experience: {
      title: "Pengalaman, Pelatihan & Sertifikasi",
      items: [
        {
          title: "Pelatihan Data Analytics",
          desc: "Program Mini-Course RevoU & Sertifikasi HP LIFE (Data Analytics)."
        },
        {
          title: "AI & Produktivitas",
          desc: "Kelas AI+ Foundation, AI Productivity, serta AI API Integration untuk Developer."
        },
        {
          title: "Webinar & Soft Skills",
          desc: "HaloTech Academy, Brave Talk (Public Speaking & Presentation Skills)."
        }
      ],
      more: "Untuk selengkapnya, kunjungi folder dokumentasi",
      moreLink: "https://drive.google.com/drive/folders/1wbH8CgDRvZukqktBYytzseOO7Wqze9ft"
    },
    projects: {
      title: "Proyek yang Telah Dideploy",
      subtitle: "Lima proyek yang sudah live dan dapat diakses secara langsung.",
      live: "Live",
      visit: "Kunjungi Situs →",
      list: [
        {
          name: "Latihan PSAS Bahasa Inggris XI",
          period: "Jun 2026 – Sekarang",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "Teman-teman saya terbantu dengan pelatihan ini. Saya dapat menerima request untuk perkembangan kedepannya.",
          feature: "Modul latihan berbasis kurikulum, antarmuka responsif, dan konteks bilingual.",
          link: "https://inglis-vert.vercel.app/",
          tags: ["Web Development", "HTML", "UI/UX Design"]
        },
        {
          name: "SMEKAR BISA — Platform Akademik & Informasi SMK",
          period: "Jun 2026 – Sekarang",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "Sebuah web uji coba yang hasilnya sangat memuaskan.",
          feature: "Informasi program keahlian terintegrasi, pemuatan halaman cepat (fast load), dan desain premium.",
          link: "https://smekarbisa.vercel.app/",
          tags: ["Web Design", "Front-End Development", "Vercel"]
        },
        {
          name: "Personal Simple Portfolio (Pink Aesthetic)",
          period: "Nov 2025 – Sekarang",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "Sebuah web pribadi yang saya kembangkan dengan identitas yang disamarkan.",
          feature: "Tata letak responsif, animasi ringan, dan optimasi performa di berbagai perangkat.",
          link: "https://rahma-opal.vercel.app/",
          tags: ["HTML", "CSS", "JavaScript", "Vercel"]
        },
        {
          name: "Raevorin Zephyr — Jurnal Digital & Portofolio Praktikum TKJ",
          period: "Mei 2026 – Sekarang",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "Platform blog berbasis WordPress sebagai jurnal digital interaktif untuk mendokumentasikan tugas & laporan praktikum TKJ.",
          feature: "Publikasi laporan praktikum terstruktur, manajemen kategori tugas yang rapi, serta integrasi menu navigasi sosial.",
          link: "https://ravhaell.wordpress.com/",
          tags: ["Technical Writing", "Jaringan Komputer", "WordPress"]
        },
        {
          name: "Warung Welut — Menu & Bisnis Digital",
          period: "Jul 2026 – Sekarang",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "Landing page responsif untuk digitalisasi UMKM kuliner lokal di Dukuhturi.",
          feature: "Status operasional real-time, katalog menu dengan klasifikasi rapi, social proof rating, serta integrasi Direct-to-WhatsApp.",
          link: "https://warung-welut.vercel.app/",
          tags: ["Front-End Dev", "HTML5 & CSS3", "WhatsApp API"]
        }
      ]
    },
    certificates: {
      title: "Sertifikat",
      subtitle: "Klik atau arahkan kursor ke kartu untuk melihat detail pencapaian.",
      flipHint: "Klik untuk membalik",
      list: [
        {
          name: "EF SET English Certificate — Level B1 Menengah",
          issuer: "EF SET",
          desc: "Berhasil meraih sertifikasi EF SET level B1 (Menengah) dengan pencapaian Reading di level B2 (Menengah Atas). Bukti komitmen untuk terus mengasah keterampilan komunikasi internasional.",
          link: "https://drive.google.com/file/d/129VhhnJ--SLMxHdlhQpA8Qtj9ACWD7uF/view?usp=drive_link"
        },
        {
          name: "Personal Branding for Future Career",
          issuer: "AIBI HE & Victory",
          desc: "Mengikuti pelatihan intensif mengenai strategi pembangunan citra diri profesional dan keterampilan komunikasi digital untuk kesiapan karier.",
          link: "https://drive.google.com/file/d/16yQa20Ho_gUqrv8S8HBuuoyXNROh7e4-/view?usp=drive_link"
        },
        {
          name: "Basic Cybersecurity",
          issuer: "JagoanSiber (CODEPOLITAN)",
          desc: "Menyelesaikan sertifikasi Basic Cybersecurity sebagai langkah nyata dalam mengembangkan potensi diri di bidang teknologi informasi.",
          link: "https://drive.google.com/file/d/1T-gV4a8YTTP7YvTbbRtDjjK_Ngjdf-03/view?usp=drive_link"
        },
        {
          name: "Talent Discovery Certificate",
          issuer: "BrightCHAMPS",
          desc: "Berhasil masuk ke Top 10% terbaik dalam penilaian bakat teknologi oleh BrightCHAMPS.",
          link: "https://drive.google.com/file/d/1oGvIBHYO4_CBUvOyGn_Ife44oCsOQHu-/view?usp=drive_link"
        }
      ]
    },
    contact: {
      title: "Mari Terhubung",
      subtitle: "Terbuka untuk kolaborasi, proyek, maupun sekadar berdiskusi seputar teknologi.",
      whatsapp: "WhatsApp",
      email: "Email",
      location: "Domisili",
      locationValue: "Tegal, Jawa Tengah",
      footer: "Dirancang & dikembangkan oleh Fadi Rahma Azizah."
    },
    langToggle: { id: "ID", en: "EN" }
  },

  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Fadi Rahma Azizah",
      nickname: "you can call me Rahma",
      role: "Computer Network Engineering Student (TKJ/TJKT)",
      school: "SMK Negeri 1 Dukuhturi · 2024 – 2027",
      personality: "INTJ personality type — strategic, analytical, and structured.",
      desc: "Focused on building a strong foundation in networking & infrastructure, while continuously sharpening modern web development skills and AI integration.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      orbitCaption: "Node network visualization — representing the world of Networking"
    },
    skills: {
      title: "Skills",
      subtitle: "Hover over each card to reveal details & proficiency statistics.",
      categories: [
        {
          id: "networking",
          icon: "🖧",
          title: "Networking & Operating Systems",
          summary: "Server administration, network configuration, and virtualization.",
          items: [
            { name: "Server Administration (Debian Linux)", level: 85 },
            { name: "Network & Service Configuration (BIND9 DNS, IP Configuration)", level: 80 },
            { name: "Virtualization (VMware, VirtualBox)", level: 78 }
          ]
        },
        {
          id: "webdev",
          icon: "💻",
          title: "Web Development & Tools",
          summary: "Building modern web apps while leveraging AI as a productivity tool.",
          items: [
            { name: "Next.js & TypeScript", level: 80 },
            { name: "Data Analytics & Visualization", level: 75 },
            { name: "AI Tools Integration & Prompting", level: 90 }
          ]
        },
        {
          id: "languages",
          icon: "🌐",
          title: "Languages",
          summary: "Cross-language communication skills for broader collaboration.",
          items: [
            { name: "Indonesian (Native)", level: 100 },
            { name: "English (B1 Level)", level: 60 },
            { name: "Japanese (Basic — heading to N5)", level: 20 },
            { name: "Russian (Basic)", level: 15 },
            { name: "German (Basic)", level: 15 }
          ]
        }
      ],
      note: "*Percentages are a personal, illustrative estimate of proficiency level."
    },
    experience: {
      title: "Experience, Training & Certifications",
      items: [
        {
          title: "Data Analytics Training",
          desc: "RevoU Mini-Course Program & HP LIFE Certification (Data Analytics)."
        },
        {
          title: "AI & Productivity",
          desc: "AI+ Foundation class, AI Productivity, and AI API Integration for Developers."
        },
        {
          title: "Webinars & Soft Skills",
          desc: "HaloTech Academy, Brave Talk (Public Speaking & Presentation Skills)."
        }
      ],
      more: "For more details, visit the documentation folder",
      moreLink: "https://drive.google.com/drive/folders/1wbH8CgDRvZukqktBYytzseOO7Wqze9ft"
    },
    projects: {
      title: "Deployed Projects",
      subtitle: "Five projects that are live and can be accessed directly.",
      live: "Live",
      visit: "Visit Site →",
      list: [
        {
          name: "English PSAS Practice XI",
          period: "Jun 2026 – Present",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "My classmates have benefited from this training tool. I'm open to feature requests for future development.",
          feature: "Curriculum-based practice modules, responsive interface, and bilingual context.",
          link: "https://inglis-vert.vercel.app/",
          tags: ["Web Development", "HTML", "UI/UX Design"]
        },
        {
          name: "SMEKAR BISA — Academic & School Info Platform",
          period: "Jun 2026 – Present",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "A trial website with very satisfying results.",
          feature: "Integrated program information, fast page loading, and a premium design.",
          link: "https://smekarbisa.vercel.app/",
          tags: ["Web Design", "Front-End Development", "Vercel"]
        },
        {
          name: "Personal Simple Portfolio (Pink Aesthetic)",
          period: "Nov 2025 – Present",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "A personal site developed under a disguised identity.",
          feature: "Responsive layout, lightweight animation, and cross-device performance optimization.",
          link: "https://rahma-opal.vercel.app/",
          tags: ["HTML", "CSS", "JavaScript", "Vercel"]
        },
        {
          name: "Raevorin Zephyr — Digital Journal & TKJ Practicum Portfolio",
          period: "May 2026 – Present",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "A WordPress-based blog serving as an interactive digital journal for documenting TKJ practicum tasks and reports.",
          feature: "Structured practicum report publishing, tidy task category management, and social navigation menu integration.",
          link: "https://ravhaell.wordpress.com/",
          tags: ["Technical Writing", "Computer Networking", "WordPress"]
        },
        {
          name: "Warung Welut — Menu & Digital Business",
          period: "Jul 2026 – Present",
          org: "SMK Negeri 1 Dukuhturi",
          desc: "A responsive landing page for the digitalization of a local culinary small business in Dukuhturi.",
          feature: "Real-time operational status, neatly classified menu catalog, rating-based social proof, and Direct-to-WhatsApp integration.",
          link: "https://warung-welut.vercel.app/",
          tags: ["Front-End Dev", "HTML5 & CSS3", "WhatsApp API"]
        }
      ]
    },
    certificates: {
      title: "Certificates",
      subtitle: "Click or hover over a card to see achievement details.",
      flipHint: "Click to flip",
      list: [
        {
          name: "EF SET English Certificate — Intermediate B1",
          issuer: "EF SET",
          desc: "Achieved EF SET B1 (Intermediate) certification with a Reading score at B2 (Upper Intermediate) level — proof of ongoing commitment to international communication skills.",
          link: "https://drive.google.com/file/d/129VhhnJ--SLMxHdlhQpA8Qtj9ACWD7uF/view?usp=drive_link"
        },
        {
          name: "Personal Branding for Future Career",
          issuer: "AIBI HE & Victory",
          desc: "Completed an intensive workshop on professional self-image building strategy and digital communication skills for career readiness.",
          link: "https://drive.google.com/file/d/16yQa20Ho_gUqrv8S8HBuuoyXNROh7e4-/view?usp=drive_link"
        },
        {
          name: "Basic Cybersecurity",
          issuer: "JagoanSiber (CODEPOLITAN)",
          desc: "Completed the Basic Cybersecurity certification as a concrete step in developing potential in the field of information technology.",
          link: "https://drive.google.com/file/d/1T-gV4a8YTTP7YvTbbRtDjjK_Ngjdf-03/view?usp=drive_link"
        },
        {
          name: "Talent Discovery Certificate",
          issuer: "BrightCHAMPS",
          desc: "Ranked in the Top 10% in a technology talent assessment by BrightCHAMPS.",
          link: "https://drive.google.com/file/d/1oGvIBHYO4_CBUvOyGn_Ife44oCsOQHu-/view?usp=drive_link"
        }
      ]
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Open to collaboration, projects, or just a chat about technology.",
      whatsapp: "WhatsApp",
      email: "Email",
      location: "Location",
      locationValue: "Tegal, Central Java",
      footer: "Designed & developed by Fadi Rahma Azizah."
    },
    langToggle: { id: "ID", en: "EN" }
  }
};

/* Data statis non-bilingual (link sosial, dsb) */
const PROFILE = {
  fullName: "Fadi Rahma Azizah",
  nickname: "Rahma",
  whatsapp: "+62 889-8385-8921",
  whatsappLink: "https://wa.me/628898385892",
  email: "fadi.rahma67@gmail.com",
  linkedin: "https://www.linkedin.com/in/f-rahmazizah",
  github: "https://github.com/fadi-rahma",
  initials: "FR"
};
