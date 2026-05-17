import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "FAQ - Smart Cycle | Pertanyaan yang Sering Diajukan",
  description:
    "Temukan jawaban atas pertanyaan umum seputar Smart Cycle, platform pengelolaan sampah berbasis teknologi. Pelajari cara kerja, layanan, dan cara menghubungi kami.",
  keywords: [
    "FAQ Smart Cycle",
    "pertanyaan Smart Cycle",
    "pengelolaan sampah",
    "daur ulang",
    "bantuan Smart Cycle",
  ],
  openGraph: {
    title: "FAQ - Smart Cycle",
    description:
      "Jawaban atas pertanyaan umum seputar Smart Cycle dan layanan pengelolaan sampah kami.",
    url: "https://smart-cycle-company-profile.vercel.app/faq",
    siteName: "Smart Cycle",
    locale: "id_ID",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Apa itu Smart Cycle?",
    answer:
      "Smart Cycle adalah platform inovatif berbasis teknologi yang membantu masyarakat mengelola sampah secara lebih efektif dan ramah lingkungan. Kami menyediakan fitur klasifikasi sampah otomatis menggunakan AI, layanan penjemputan sampah terjadwal, dan program edukasi lingkungan untuk komunitas.",
  },
  {
    question: "Bagaimana cara kerja Smart Cycle?",
    answer:
      "Smart Cycle bekerja dalam tiga langkah mudah: (1) Identifikasi jenis sampah Anda menggunakan fitur kamera berbasis AI kami, (2) Jadwalkan layanan pickup sampah sesuai lokasi dan waktu yang Anda inginkan, dan (3) Dapatkan poin reward dari setiap sampah yang berhasil didaur ulang. Semua prosesnya dapat dilakukan melalui aplikasi atau website kami.",
  },
  {
    question: "Apakah Smart Cycle ramah lingkungan?",
    answer:
      "Tentu saja. Seluruh operasional Smart Cycle dirancang untuk mengurangi dampak lingkungan. Kami memastikan sampah yang dijemput diolah secara bertanggung jawab oleh mitra daur ulang kami yang terverifikasi. Setiap kilogram sampah yang Anda kelola bersama kami berkontribusi langsung pada pengurangan limbah di tempat pembuangan akhir.",
  },
  {
    question: "Apakah tersedia aplikasi mobile Smart Cycle?",
    answer:
      "Ya, Smart Cycle tersedia sebagai aplikasi mobile untuk platform Android dan iOS. Aplikasi kami memudahkan Anda mengakses semua fitur termasuk klasifikasi sampah real-time, penjadwalan pickup, pelacakan status pengambilan, dan pengelolaan poin reward Anda kapan saja dan di mana saja.",
  },
  {
    question: "Bagaimana cara menghubungi tim Smart Cycle?",
    answer:
      "Anda dapat menghubungi tim Smart Cycle melalui beberapa saluran: Email kami di smartcycle@email.com, mengisi formulir kontak di halaman Contact website kami, atau mengikuti kami di media sosial (Instagram, X, LinkedIn, YouTube) untuk informasi terbaru. Tim customer support kami siap membantu Anda.",
  },
  {
    question: "Apakah layanan Smart Cycle tersedia 24 jam?",
    answer:
      "Platform digital Smart Cycle, termasuk fitur klasifikasi sampah dan penjadwalan, dapat diakses 24 jam sehari, 7 hari seminggu. Untuk layanan pickup sampah, penjemputan dilakukan pada hari dan jam kerja yang telah ditentukan sesuai area layanan Anda. Tim customer support kami aktif melayani pertanyaan pada jam kerja pukul 08.00–17.00 WIB.",
  },
  {
    question: "Di daerah mana saja Smart Cycle beroperasi?",
    answer:
      "Saat ini Smart Cycle beroperasi di beberapa wilayah Jawa Timur dengan pusat operasional di Kabupaten Ngawi. Kami terus memperluas jangkauan layanan ke kota-kota lain di Indonesia. Untuk mengecek ketersediaan layanan di daerah Anda, silakan gunakan fitur pengecekan area di aplikasi atau hubungi tim kami.",
  },
  {
    question: "Apakah ada biaya untuk menggunakan Smart Cycle?",
    answer:
      "Pendaftaran dan penggunaan fitur dasar Smart Cycle seperti klasifikasi sampah dan edukasi lingkungan sepenuhnya gratis. Untuk layanan pickup sampah, mungkin terdapat biaya layanan tergantung volume dan jarak. Kami juga memiliki program reward di mana Anda bisa mendapatkan poin yang dapat ditukarkan dengan berbagai keuntungan.",
  },
];

export default function FAQPage() {
  return (
    <main className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        {/* Decorative circles */}
        <div className="faq-circle faq-circle-top" />
        <div className="faq-circle faq-circle-bottom" />

        <div className="faq-hero-content">
          <div className="faq-hero-icon-wrap">
            <svg
              className="faq-hero-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </div>

          <h1 className="faq-hero-title">
            Pertanyaan yang Sering
            <br />
            <span className="faq-hero-title-highlight">Diajukan</span>
          </h1>

          <p className="faq-hero-desc">
            Temukan jawaban atas pertanyaan umum seputar Smart Cycle dan layanan
            pengelolaan sampah kami.
          </p>

          {/* Search hint badge */}
          <div className="faq-hero-badge">
            <svg
              className="faq-hero-badge-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {faqItems.length} pertanyaan tersedia
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-accordion-section">
        <div className="faq-accordion-container">
          <SectionTitle
            title="Daftar Pertanyaan"
            subtitle="Klik pertanyaan untuk melihat jawabannya. Tidak menemukan yang Anda cari? Hubungi kami langsung."
          />
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta-section">
        <div className="faq-cta-card">
          <div className="faq-cta-icon-wrap">
            <svg
              className="faq-cta-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>

          <h3 className="faq-cta-title">
            Masih punya pertanyaan?
          </h3>

          <p className="faq-cta-desc">
            Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami
            kapan saja.
          </p>

          <a
            href="/contact"
            className="faq-cta-btn"
          >
            Hubungi Kami

            <svg
              className="faq-cta-btn-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
