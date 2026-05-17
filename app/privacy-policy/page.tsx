import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Smart Cycle",
  description:
    "Pelajari bagaimana Smart Cycle mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
};

interface PolicySectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function PolicySection({
  icon,
  title,
  children,
}: PolicySectionProps) {
  return (
    <section className="policy-section-card">
      <div className="policy-section-header">
        <div className="policy-section-icon-wrap">
          {icon}
        </div>

        <h2 className="policy-section-title">
          {title}
        </h2>
      </div>

      <div className="policy-section-content">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "17 Mei 2026";

  return (
    <main className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-circle privacy-hero-circle-right" />
        <div className="privacy-hero-circle privacy-hero-circle-left" />

        <div className="privacy-hero-content">
          <div className="privacy-hero-icon-wrap">
            <svg
              className="privacy-hero-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>

          <h1 className="privacy-hero-title">
            Kebijakan Privasi
          </h1>

          <p className="privacy-hero-desc">
            Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi
            Anda dengan transparan dan bertanggung jawab.
          </p>

          <div className="privacy-hero-badge">
            <svg
              className="privacy-hero-badge-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            Terakhir diperbarui: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="privacy-intro-section">
        <div className="privacy-intro-card">
          <p className="privacy-intro-text">
            Kebijakan Privasi ini menjelaskan bagaimana{" "}
            <strong className="privacy-intro-highlight">
              PT Smart Cycle Indonesia
            </strong>{" "}
            mengumpulkan, menggunakan, menyimpan, dan melindungi informasi
            pribadi Anda saat menggunakan layanan kami.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="privacy-toc-section">
        <SectionTitle title="Daftar Isi" />

        <nav className="privacy-toc-card">
          {[
            "Informasi yang Kami Kumpulkan",
            "Penggunaan Data",
            "Keamanan Data",
            "Cookies & Teknologi Pelacak",
            "Hak-Hak Pengguna",
            "Kontak Perusahaan",
          ].map((item, i) => (
            <a
              key={i}
              href={`#section-${i + 1}`}
              className="privacy-toc-link"
            >
              <span className="privacy-toc-number">
                {i + 1}
              </span>

              {item}
            </a>
          ))}
        </nav>
      </section>

      {/* Policy Content */}
      <article className="privacy-article">
        <div id="section-1">
          <PolicySection
            icon={<span>📋</span>}
            title="Informasi yang Kami Kumpulkan"
          >
            <p>
              Kami mengumpulkan data yang diperlukan untuk memberikan layanan
              Smart Cycle secara optimal.
            </p>
          </PolicySection>
        </div>

        <div id="section-2">
          <PolicySection
            icon={<span>📊</span>}
            title="Penggunaan Data"
          >
            <p>
              Data digunakan untuk meningkatkan layanan, keamanan, dan
              pengalaman pengguna.
            </p>
          </PolicySection>
        </div>

        <div id="section-3">
          <PolicySection
            icon={<span>🔒</span>}
            title="Keamanan Data"
          >
            <p>
              Kami menerapkan perlindungan data dengan standar keamanan modern.
            </p>
          </PolicySection>
        </div>

        <div id="section-4">
          <PolicySection
            icon={<span>🍪</span>}
            title="Cookies & Teknologi Pelacak"
          >
            <p>
              Cookies digunakan untuk membantu pengalaman pengguna di platform.
            </p>
          </PolicySection>
        </div>

        <div id="section-5">
          <PolicySection
            icon={<span>👤</span>}
            title="Hak-Hak Pengguna"
          >
            <p>
              Anda memiliki hak untuk mengakses, memperbarui, dan menghapus
              data pribadi Anda.
            </p>
          </PolicySection>
        </div>

        <div id="section-6">
          <PolicySection
            icon={<span>📧</span>}
            title="Kontak Perusahaan"
          >
            <p>
              Hubungi kami melalui email resmi Smart Cycle untuk pertanyaan
              terkait privasi.
            </p>
          </PolicySection>
        </div>

        <div className="privacy-footer-note">
          <p className="privacy-footer-text">
            Kebijakan Privasi ini dapat diperbarui sewaktu-waktu sesuai
            perkembangan layanan dan regulasi yang berlaku.
          </p>

          <p className="privacy-footer-version">
            Versi terakhir: {lastUpdated}
          </p>
        </div>
      </article>
    </main>
  );
}
