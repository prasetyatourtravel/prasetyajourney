// Sumber kebenaran tunggal untuk seluruh konten situs.
import heroImg from "@/assets/images/hero-mountain.jpg";
import aerialMist from "@/assets/images/aerial-mist-texture.jpg";
import stepsBackdrop from "@/assets/images/steps-backdrop.jpg";
import scenicValley from "@/assets/images/travel-scenic-view.jpg";
import imgStudy from "@/assets/images/study.jpg";
import imgBromo from "@/assets/images/bromo.jpg";
import imgBali from "@/assets/images/bali.jpg";
import imgBus from "@/assets/images/bus.jpg";
import imgFleet from "@/assets/images/fleet.jpg";
import imgJogja from "@/assets/images/jogja.jpg";
import imgLombok from "@/assets/images/lombok.jpg";

export const images = {
  hero: heroImg,
  aerialMist,
  stepsBackdrop,
  scenicValley,
  study: imgStudy,
  bromo: imgBromo,
  bali: imgBali,
  bus: imgBus,
  fleet: imgFleet,
  jogja: imgJogja,
  lombok: imgLombok,
};

export const site = {
  name: "PT Prasetya Tour and Travel",
  shortName: "Prasetya Tour",
  wordmark: "Prasetya Tour & Travel",
  tagline: "Your Journey, Our Passion",
  url: "https://prasetyatour.com",
  description:
    "PT Prasetya Tour and Travel — biro wisata & transportasi eksklusif di Sidoarjo. Paket study tour, wisata domestik, sewa bus pariwisata eksekutif Jetbus 5 & Avante Luxury, dan paket custom ke seluruh Nusantara. Legalitas resmi ber-SK Kemenkumham RI.",
  shortDescription:
    "Biro Wisata & Transportasi Eksklusif di Sidoarjo. Kurasi perjalanan eksklusif Study Tour, korporasi, dan liburan keluarga berstandar eksekutif.",
  phoneDisplay: "081239691998",
  phoneIntl: "+6281239691998",
  email: "psytourtravel@gmail.com",
  address: {
    street: "Perum Omah Kweni Blok A 40, Anggaswangi",
    district: "Kec. Sukodono",
    city: "Kabupaten Sidoarjo",
    region: "Jawa Timur",
    postalCode: "61252",
    country: "ID",
  },
  addressLine:
    "Perum Omah Kweni Blok A 40, Anggaswangi, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur",
  hours: "Senin – Sabtu: 08.00 – 20.00 WIB",
  hoursNote: "Layanan Darurat On-Tour: 24 Jam",
  headlineLabel: "Biro Wisata & Transportasi Eksklusif — Sidoarjo",
} as const;

export const wa = (text: string): string =>
  `https://wa.me/6281239691998?text=${encodeURIComponent(text)}`;

export const social = {
  instagram: "https://www.instagram.com/prasetyatourtravel/",
  handle: "@prasetyatourtravel",
} as const;

export const waGreeting =
  "Halo Prasetya Tour, saya ingin konsultasi layanan wisata.";

export const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan-destinasi" },
  { label: "Destinasi", href: "#layanan-destinasi" },
  { label: "Tim", href: "#tim" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
] as const;

export type FilterId = "edukasi" | "domestik" | "bus" | "custom";

export interface CatalogFilter {
  id: "all" | FilterId;
  label: string;
}

export const catalogFilters: CatalogFilter[] = [
  { id: "all", label: "Semua Layanan" },
  { id: "edukasi", label: "Study Tour & Edukasi" },
  { id: "domestik", label: "Wisata Domestik" },
  { id: "bus", label: "Sewa Bus Pariwisata" },
  { id: "custom", label: "Paket Custom" },
];

export interface Service {
  id: string;
  category: FilterId;
  overlayLabel: string;
  overlayMeta: string;
  location: string;
  title: string;
  description: string;
  footerLabel: string;
  waText: string;
  img: ImageMetadata;
  alt: string;
}

export const services: Service[] = [
  {
    id: "study-tour",
    category: "edukasi",
    overlayLabel: "Edukasi & Industri",
    overlayMeta: "All-in Sekolah",
    location: "Yogyakarta • Bandung • Malang",
    title: "Study Tour & Kunjungan Industri",
    description:
      "Integrasi kurikulum lapangan terpadu, lembar kerja siswa, kunjungan pabrik berlisensi, serta pendampingan tour leader bersertifikasi.",
    footerLabel: "Spesialis Grup Siswa",
    waText: "Saya ingin info paket Study Tour Sekolah",
    img: imgStudy,
    alt: "Bus pariwisata eksekutif dan rombongan siswa saat study tour kunjungan industri bersama Prasetya Tour",
  },
  {
    id: "bromo-ijen",
    category: "domestik",
    overlayLabel: "Eksklusif Domestik",
    overlayMeta: "Midnight / 2D1N",
    location: "Taman Nasional Bromo Semeru",
    title: "Eksotisme Bromo & Kawah Ijen",
    description:
      "Penjemputan private dari Sidoarjo/Surabaya, armada 4WD Jeep terawat, homestay/resort premium, dokumentasi fotografer profesional.",
    footerLabel: "Sunrise Expeditions",
    waText: "Saya ingin info paket Bromo Sunrise",
    img: imgBromo,
    alt: "Lanskap gunung berkabut dan sunrise di Taman Nasional Bromo, destinasi favorit paket eksotisme Bromo Kawah Ijen",
  },
  {
    id: "bali-nusa-penida",
    category: "domestik",
    overlayLabel: "Island Luxury",
    overlayMeta: "3D2N • 4D3N",
    location: "Bali • Nusa Penida",
    title: "Bali Retreat & Nusa Penida",
    description:
      "Kombinasi villa privat bintang 5, sunset dinner seafood Jimbaran eksklusif, speedboat VIP Nusa Penida, serta relaksasi beach club privilege.",
    footerLabel: "VIP Leisure Tour",
    waText: "Saya ingin info paket Bali Retreat",
    img: imgBali,
    alt: "Pantai tropis Bali dengan perahu nelayan tradisional pada pemandian matahari, destinasi paket Bali Retreat & Nusa Penida",
  },
  {
    id: "sewa-bus",
    category: "bus",
    overlayLabel: "Armada VIP",
    overlayMeta: "Medium & Big Bus",
    location: "Jetbus 5 / Avante Series",
    title: "Sewa Bus Pariwisata Executive",
    description:
      "Kapasitas 30 - 50 kursi, reclining seats lega, full AC, sound audio karaoke, toilet terawat, USB charging ports di setiap bangku, kru ramah.",
    footerLabel: "Harian / Kontrak Tour",
    waText: "Saya ingin sewa Bus Pariwisata Executive",
    img: imgBus,
    alt: "Armada bus pariwisata eksekutif Jetbus 5 dan Avante Luxury siap sewa di PT Prasetya Tour Sidoarjo",
  },
  {
    id: "jogja-borobudur",
    category: "domestik",
    overlayLabel: "Budaya & Sejarah",
    overlayMeta: "2D1N / 3D2N",
    location: "Yogyakarta Istimewa",
    title: "Yogyakarta & Borobudur Royal",
    description:
      "Batik workshop privat, akses pemandu sejarah Keraton, kuliner otentik Sultan, serta kenyamanan armada hotel bintang 4/5 pilihan.",
    footerLabel: "Cultural Voyage",
    waText: "Saya ingin info paket Yogyakarta Royal",
    img: imgJogja,
    alt: "Suasana pusat kebudayaan Yogyakarta dengan arsitektur Keraton untuk paket wisata budaya Yogyakarta Borobudur",
  },
  {
    id: "lombok-bajo",
    category: "custom",
    overlayLabel: "Signature Voyage",
    overlayMeta: "Bespoke Tailored",
    location: "Nusa Tenggara Timur & Barat",
    title: "Lombok & Labuan Bajo Voyage",
    description:
      "Liveaboard Phinisi mewah, eksplorasi habitat komodo, snorkeling di Pink Beach, serta kurasi penginapan resor tepi tebing bertaraf internasional.",
    footerLabel: "Custom Maritime",
    waText: "Saya ingin info paket Lombok Labuan Bajo",
    img: imgLombok,
    alt: "Panorama perairan Lombok dan Labuan Bajo dengan perahu kapal untuk paket voyage custom PT Prasetya Tour",
  },
];

export interface HeroMini {
  label: string;
  title: string;
  img: ImageMetadata;
  alt: string;
}

export const heroMinis: HeroMini[] = [
  { label: "Sunrise Expedition", title: "Bromo & Kawah Ijen", img: imgBromo, alt: "Preview destinasi Bromo & Kawah Ijen" },
  { label: "Island Retreat", title: "Bali & Nusa Penida", img: imgBali, alt: "Preview destinasi Bali & Nusa Penida" },
  { label: "Executive Fleet", title: "Jetbus 5 Luxury Series", img: imgFleet, alt: "Preview armada Jetbus 5 Luxury Series" },
];

export interface Pillar {
  index: string;
  title: string;
  description: string;
  tag: string;
}

export const pillars: Pillar[] = [
  {
    index: "01.",
    title: "Perencanaan Terukur",
    description:
      "Riset rute komprehensif, penyusunan jadwal efisien, dan manajemen waktu presisi demi pengalaman bebas tergesa-gesa.",
    tag: "Precision Itinerary",
  },
  {
    index: "02.",
    title: "Fleksibilitas Tinggi",
    description:
      "Kustomisasi itinerary eksklusif sesuai kebutuhan spesifik rombongan korporasi, keluarga, maupun instansi pendidikan.",
    tag: "Bespoke Curation",
  },
  {
    index: "03.",
    title: "Transparansi Informasi",
    description:
      "Rincian biaya jujur dan transparan tanpa hidden fee, disertai spesifikasi armada dan akomodasi yang terbuka sejak awal.",
    tag: "Zero Hidden Fees",
  },
  {
    index: "04.",
    title: "Koordinasi Terstruktur",
    description:
      "Tim ground handling berpengalaman dan tour leader berlisensi standby 24/7 di lapangan untuk merespons setiap situasi.",
    tag: "24/7 Ground Ops",
  },
];

export interface Step {
  index: string;
  title: string;
  description: string;
  phase: string;
}

export const steps: Step[] = [
  {
    index: "01",
    title: "Konsultasi Awal",
    description:
      "Diskusikan rencana rute, jumlah peserta, tanggal, serta ekspektasi anggaran via WhatsApp resmi atau tatap muka di kantor Sidoarjo.",
    phase: "Tahap 1: Diskusi",
  },
  {
    index: "02",
    title: "Desain & Penawaran",
    description:
      "Tim kurasi menyusun draf itinerary mendalam, pilihan armada bus, hotel rekanan, beserta proposal anggaran harga transparan.",
    phase: "Tahap 2: Kurasi",
  },
  {
    index: "03",
    title: "Kesepakatan & DP",
    description:
      "Penandatanganan nota pemesanan resmi (MOU) berbadan hukum dan pembayaran DP yang aman melalui rekening bank atas nama PT.",
    phase: "Tahap 3: Legalitas",
  },
  {
    index: "04",
    title: "Persiapan Matang",
    description:
      "Inspeksi fisik kelayakan armada, finalisasi booking hotel, tiket destinasi, serta technical meeting (briefing) bersama panitia.",
    phase: "Tahap 4: Inspeksi",
  },
  {
    index: "05",
    title: "Pelaksanaan Tur",
    description:
      "Keberangkatan dengan tour leader berlisensi mendampingi rombongan dari titik kumpul hingga kembali pulang dengan rasa puas.",
    phase: "Tahap 5: Eksekusi",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  roleEn: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Wahyu",
    role: "Direktur Utama",
    roleEn: "Chief Executive Officer",
    bio: "Visioner strategi & tata kelola standar kualitas prima. Memimpin ekspansi operasional dengan filosofi kenyamanan tanpa kompromi.",
  },
  {
    name: "Abil",
    role: "Manager Operasional",
    roleEn: "Operations Director",
    bio: "Pengawasan teknis perjalanan & keandalan armada bus pariwisata. Menjamin standar laik jalan dan efisiensi logistik di lapangan.",
  },
  {
    name: "Anisya",
    role: "Manager Marketing",
    roleEn: "Strategic Partnership",
    bio: "Kurasi paket pariwisata & kemitraan strategis dengan hotel dan objek wisata unggulan nasional untuk penawaran terbaik pelanggan.",
  },
  {
    name: "Nastiti",
    role: "Administrasi & Keuangan",
    roleEn: "Finance & Compliance",
    bio: "Presisi dokumen kontrak, penagihan transparan, tata kelola anggaran, dan kepatuhan fiskal menjamin keamanan transaksi klien.",
  },
  {
    name: "Andi",
    role: "Koordinator Lapangan",
    roleEn: "Head Ground Tour Leader",
    bio: "Penyelia handling on-site & keselamatan peserta. Mengawal alur rombongan dengan keramahan dan ketangkasan mitigasi kendala rute.",
  },
  {
    name: "Fatih",
    role: "Spesialis Digital & Layanan Klien",
    roleEn: "Digital & Client Relations Specialist",
    bio: "Responsif 24/7 mendampingi konsultasi pelanggan, mengelola kanal digital & media sosial, mengarahkan pilihan paket ideal, serta memastikan setiap pertanyaan terjawab tuntas.",
  },
];

export interface TrustMetric {
  icon: string;
  title: string;
  note: string;
}

export const trustMetrics: TrustMetric[] = [
  {
    icon: "verified_user",
    title: "100% On-Time Departure Schedule",
    note: "Riset rute presisi & manajemen waktu terukur",
  },
  {
    icon: "shield",
    title: "0 Incident Safety Record",
    note: "Armada bus eksekutif terinspeksi & asuransi resmi",
  },
  {
    icon: "receipt_long",
    title: "Rp 0 Hidden Fees Garansi",
    note: "Proposal transparan & kontrak legal berbadan hukum",
  },
];

export interface Testimonial {
  badge: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    badge: "Study Tour Terverifikasi (2024)",
    quote:
      "Study tour 240 siswa SMA ke Yogyakarta berjalan sangat tertib, aman, dan mendidik. Armada bus bersih terawat dan tim handling lapangan Prasetya sangat disiplin menjaga jadwal serta keselamatan anak didik kami.",
    initials: "DS",
    name: "Drs. Sugeng Waluyo",
    role: "Kepala Sekolah SMAN Sidoarjo",
  },
  {
    badge: "Panitia Gathering BUMN (Verified Trip)",
    quote:
      "Corporate gathering 85 staf kami di kawasan Bromo terorganisir sempurna tanpa kendala sedikit pun. Fleksibilitas tim dalam mengakomodasi rundown manajemen perusahaan kami patut diacungi dua jempol.",
    initials: "RA",
    name: "Rian Adiputra, M.M.",
    role: "HR Director BUMN Logistik Surabaya",
  },
  {
    badge: "Family VIP Client (Private Tour)",
    quote:
      "Liburan keluarga besar 3 generasi ke Bali terasa layaknya private VIP tour kelas atas. Mulai dari makanan ramah lansia, jadwal santai tidak buru-buru, hingga pemilihan hotel villa yang sangat eksklusif.",
    initials: "HK",
    name: "Hj. Kartika Wardhani",
    role: "Koordinator Family Vacation",
  },
];

export const partners = [
  "SMAN 1 Sidoarjo",
  "PT Pupuk Indonesia Logistics",
  "Pertamina EP Regional",
  "BNI Corporate",
  "IKA Universitas Airlangga",
] as const;

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question:
      "Apakah rute perjalanan dan destinasi bisa disesuaikan secara khusus (Custom Itinerary)?",
    answer:
      "Tentu saja. Seluruh paket PT Prasetya Tour and Travel bersifat fleksibel (Bespoke Travel). Anda bebas menentukan durasi hari, rute kunjungan, standar akomodasi hotel, hingga preferensi menu santap kuliner sesuai kebutuhan spesifik instansi atau keluarga Anda. Tim konsultan kami siap menyusun draf rute teroptimal.",
  },
  {
    question:
      "Berapa ketentuan Down Payment (DP) dan mekanisme pelunasannya?",
    answer:
      "Untuk mengamankan alokasi armada dan reservasi fasilitas (hotel, tiket destinasi), Down Payment (DP) standar adalah sebesar 30% pada saat penandatanganan nota kesepakatan (MOU). Sisa pembayaran dapat diangsur secara bertahap dengan pelunasan maksimal H-7 sebelum jadwal keberangkatan rombongan.",
  },
  {
    question:
      "Apa saja fasilitas yang termasuk dalam layanan Sewa Bus Pariwisata?",
    answer:
      "Layanan carter sewa bus kami sudah termasuk unit bus kelas eksekutif tahun terbaru (karoseri Adi Putro Jetbus 5 / Tentrem Avante), bahan bakar (BBM), sopir berpengalaman bersertifikat, asisten driver, asuransi penumpang, fasilitas kabin (Full AC, Reclining Seats, Audio Karaoke, TV, port USB charging per bangku, dan toilet pada tipe tertentu). Biaya tol dan parkir dapat disesuaikan dalam paket All-In.",
  },
  {
    question:
      "Bagaimana protokol keselamatan dan penanganan darurat saat tur berlangsung?",
    answer:
      "Keselamatan adalah prioritas mutlak kami. Setiap unit kendaraan dilengkapi kotak P3K standar, alat pemadam api ringan (APAR), palu pemecah kaca darurat, dan perlindungan asuransi Jasa Raharja. Selain itu, Tour Leader kami terlatih dalam pertolongan pertama (First Aid) dan memiliki jalur koordinasi langsung 24 jam dengan fasilitas medis terdekat di sepanjang rute perjalanan.",
  },
];
