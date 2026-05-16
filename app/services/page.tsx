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
              src="https://images.unsplash.com/vector-1738396054607-12b35e7310f4?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1635691315495-ff39debe5764?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1758599667729-a6f0f8bd213b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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