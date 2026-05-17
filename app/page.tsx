import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <h1>Smart Cycle</h1>
        <p>Solusi pintar untuk pengelolaan sampah yang lebih baik</p>
        <div className="hero-btns">
          <Link href="/services" className="btn-primary">
            Lihat Layanan
          </Link>
          <Link href="/contact" className="btn-secondary">
            Hubungi Kami
          </Link>
        </div>
        
      </section>

      {/* 🔥 ABOUT + IMAGE */}
      <section className="about-image">
        <div className="about-text">
          <h2>Tentang Kami</h2>
          <p>
            Smart Cycle adalah platform inovatif untuk membantu masyarakat
            mengelola sampah dengan lebih efektif dan ramah lingkungan.
          </p>

          <Link href="/about" className="link">
            Selengkapnya →
          </Link>
        </div>

        <div className="about-img">
          <Image
            src="/images/image.png"
            alt="Smart Cycle"
            width={500}
            height={400}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Layanan Kami</h2>

        <div className="service-list">
          <div className="card">
            <h3>Klasifikasi Sampah</h3>
            <p>Identifikasi jenis sampah menggunakan teknologi.</p>
          </div>

          <div className="card">
            <h3>Pickup Sampah</h3>
            <p>Layanan penjemputan sampah terjadwal.</p>
          </div>

          <div className="card">
            <h3>Edukasi Lingkungan</h3>
            <p>Meningkatkan kesadaran masyarakat.</p>
          </div>
        </div>

        <Link href="/services" className="link">
          Lihat semua layanan →
        </Link>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Mulai Sekarang</h2>
        <p>Bergabunglah bersama kami untuk lingkungan yang lebih bersih</p>
        <Link href="/contact" className="btn-primary">
          Hubungi Kami
        </Link>
      </section>
    </div>
  );
}