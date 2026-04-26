import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      {/* CONTACT US SECTION */}
      <section style={styles.section}>

        {/* KIRI - INFO KONTAK */}
        <div style={styles.left}>
          <h1 style={styles.title}>Contact Us</h1>
          <p style={styles.desc}>
            Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut
            tentang layanan Smart Cycle, hubungi kami melalui email atau telepon.
            Kami siap membantu Anda!
          </p>

          <div style={styles.infoList}>
            <div style={styles.infoItem}>
              <span style={styles.icon}>📞</span>
              <span>+62 812-3456-7890</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.icon}>✉️</span>
              <span>smartcycle@email.com</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.icon}>📍</span>
              <span>Jl. Ahmad Yani No.45, Kabupaten Ngawi, Indonesia</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.icon}>🕐</span>
              <div>
                <p style={{ margin: 0 }}>Senin - Jumat:</p>
                <p style={{ margin: 0 }}>08:00 - 17:00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN - GAMBAR */}
        <div style={styles.right}>
          <Image
            src="/images/Contact_Us.jpg"
            alt="Contact Smart Cycle"
            width={550}
            height={400}
            style={styles.image}
          />
        </div>

      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    maxWidth: "1100px",
    margin: "80px auto",
    padding: "0 20px",
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#111827",
  },
  desc: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "32px",
  },
  infoList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    fontSize: "15px",
    color: "#111827",
  },
  icon: {
    fontSize: "22px",
    marginTop: "2px",
  },
  right: {
    flex: 1,
    borderRadius: "12px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },
};