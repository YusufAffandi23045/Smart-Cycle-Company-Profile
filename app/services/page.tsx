import Image from "next/image";

export default function Services() {
  return (
    <div>
      {/* HERO */}
      <section className="services-hero">
        <h1>Layanan Kami</h1>
        <p>
          Solusi lengkap untuk membantu pengelolaan sampah yang lebih efektif
          dan ramah lingkungan.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="services-list-page">

        {/* CARD 1 */}
        <div className="service-item">
          <div className="service-text">
            <h2>Klasifikasi Sampah</h2>
            <p>
              Gunakan teknologi AI untuk mengidentifikasi jenis sampah secara
              otomatis dan akurat.
            </p>
          </div>

          <div className="service-img">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
              alt="Klasifikasi"
              width={500}
              height={350}
            />
          </div>
        </div>

        {/* CARD 2 (zig-zag) */}
        <div className="service-item reverse">
          <div className="service-text">
            <h2>Pickup Sampah</h2>
            <p>
              Layanan penjemputan sampah terjadwal langsung dari lokasi Anda.
            </p>
          </div>

          <div className="service-img">
            <Image
              src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=500&q=80"
              alt="Pickup"
              width={500}
              height={350}
            />
          </div>
        </div>

        {/* CARD 3 */}
        <div className="service-item">
          <div className="service-text">
            <h2>Edukasi Lingkungan</h2>
            <p>
              Program edukasi untuk meningkatkan kesadaran masyarakat tentang
              pentingnya pengelolaan sampah.
            </p>
          </div>

          <div className="service-img">
            <Image
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=500&q=80"
              alt="Edukasi"
              width={500}
              height={350}
            />
          </div>
        </div>

      </section>
    </div>
  );
}