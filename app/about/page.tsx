import Image from "next/image";

export default function About() {
  return (
    <div>

      {/* HERO */}
      <section className="about-hero-section">
        <div className="about-hero-left">
          <h1 className="about-hero-title">Tentang Smart Cycle</h1>
          <p className="about-hero-desc">
            Kami berkomitmen untuk menciptakan lingkungan yang lebih bersih
            melalui teknologi dan inovasi yang ramah lingkungan.
          </p>
        </div>
        <div className="about-hero-right">
          <Image
            src="/images/phone.png"
            alt="Smart Cycle Hero"
            width={600}
            height={400}
            className="about-hero-img"
          />
        </div>
      </section>

      {/* STATISTIK */}
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-icon">♻️</span>
          <h2 className="stat-number">100+</h2>
          <p className="stat-label">Sampah Teridentifikasi</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">👥</span>
          <h2 className="stat-number">50+</h2>
          <p className="stat-label">Pengguna</p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="about-row">
        <div className="about-row-img-wrap">
          <Image
            src="/images/Klasifikasi_sampah.png"
            alt="Our Mission"
            width={500}
            height={380}
            className="about-row-img"
          />
        </div>
        <div className="about-row-text">
          <h2 className="about-section-title">Our Mission</h2>
          <p className="about-section-desc">
            Misi kami adalah membantu masyarakat mengelola sampah dengan lebih
            efektif menggunakan teknologi modern, sehingga tercipta lingkungan
            yang bersih dan berkelanjutan.
          </p>
          <ul className="about-list">
            <li className="about-list-item">✅ Klasifikasi sampah berbasis teknologi</li>
            <li className="about-list-item">✅ Edukasi lingkungan untuk masyarakat</li>
            <li className="about-list-item">✅ Layanan pickup sampah terjadwal</li>
          </ul>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="about-row reverse">
        <div className="about-row-img-wrap">
          <Image
            src="/images/vision.png"
            alt="Our Vision"
            width={500}
            height={380}
            className="about-row-img"
          />
        </div>
        <div className="about-row-text">
          <h2 className="about-section-title">Our Vision</h2>
          <p className="about-section-desc">
            Menjadi platform terdepan dalam pengelolaan sampah berbasis
            teknologi di Indonesia, menciptakan dampak positif bagi lingkungan
            dan generasi mendatang.
          </p>
          <ul className="about-list">
            <li className="about-list-item">✅ Inovasi berkelanjutan</li>
            <li className="about-list-item">✅ Dampak lingkungan yang nyata</li>
            <li className="about-list-item">✅ Menjangkau seluruh Indonesia</li>
          </ul>
        </div>
      </section>

      {/* OUR HISTORY */}
      <section className="about-row">
        <div className="about-row-img-wrap">
          <Image
            src="/images/history.jpg"
            alt="Our History"
            width={500}
            height={380}
            className="about-row-img"
          />
        </div>
        <div className="about-row-text">
          <h2 className="about-section-title">Our History</h2>
          <p className="about-section-desc">
            Smart Cycle didirikan dengan tekad untuk mengatasi permasalahan
            sampah di Indonesia. Berawal dari ide sederhana, kami berkembang
            menjadi platform yang dipercaya oleh banyak masyarakat.
          </p>
          <ul className="about-list">
            <li className="about-list-item">✅ Didirikan dengan semangat perubahan</li>
            <li className="about-list-item">✅ Berkembang bersama komunitas</li>
            <li className="about-list-item">✅ Terus berinovasi untuk masa depan</li>
          </ul>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="how-section">
        <h2 className="how-title">How We Work</h2>
        <p className="how-desc">
          Kami menerapkan pendekatan yang kolaboratif dan transparan, memastikan
          setiap langkah memberikan dampak nyata bagi lingkungan dan masyarakat.
        </p>
        <div className="how-img-wrap">
          <Image
            src="/images/work.JPG"
            alt="How We Work"
            width={1000}
            height={450}
            className="how-img"
          />
        </div>
      </section>

    </div>
  );
}