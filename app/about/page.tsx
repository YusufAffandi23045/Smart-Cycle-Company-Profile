import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* HERO ABOUT */}
      <section className="about-hero">
        <h1>Tentang Smart Cycle</h1>
        <p>
          Kami berkomitmen untuk menciptakan lingkungan yang lebih bersih
          melalui teknologi dan inovasi.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="about-text">
          <h2>Siapa Kami?</h2>
          <p>
            Smart Cycle adalah platform inovatif yang membantu masyarakat
            dalam mengelola sampah secara efisien dan ramah lingkungan.
          </p>
          <p>
            Dengan teknologi modern, kami menghadirkan solusi untuk
            klasifikasi, pengelolaan, dan edukasi lingkungan.
          </p>
        </div>

        <div className="about-img">
          <Image
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80"
            alt="About Smart Cycle"
            width={500}
            height={400}
          />
        </div>
      </section>

      {/* VISI MISI */}
      <section className="vision-mission">
        <div className="card">
          <h3>Visi</h3>
          <p>
            Menjadi platform terdepan dalam pengelolaan sampah berbasis
            teknologi di Indonesia.
          </p>
        </div>

        <div className="card">
          <h3>Misi</h3>
          <p>
            Meningkatkan kesadaran masyarakat, menyediakan solusi praktis,
            dan mendukung lingkungan yang berkelanjutan.
          </p>
        </div>
      </section>
    </div>
  );
}