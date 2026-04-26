import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      <section className="contact-section">

        {/* KIRI */}
        <div className="contact-left">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-desc">
            Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut
            tentang layanan Smart Cycle, hubungi kami melalui email atau telepon.
            Kami siap membantu Anda!
          </p>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-icon">📞</span>
              <span>+62 812-3456-7890</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">✉️</span>
              <span>smartcycle@email.com</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">📍</span>
              <span>Jl. Ahmad Yani No.45, Kabupaten Ngawi, Indonesia</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">🕐</span>
              <div>
                <p style={{ margin: 0 }}>Senin - Jumat:</p>
                <p style={{ margin: 0 }}>08:00 - 17:00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN */}
        <div className="contact-right">
          <Image
            src="/images/Contact_Us.jpg"
            alt="Contact Smart Cycle"
            width={550}
            height={400}
            className="contact-img"
          />
        </div>

      </section>
    </div>
  );
}