import Image from "next/image";

export default function About() {
  return (
    <div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Tentang Smart Cycle</h1>
          <p style={styles.heroDesc}>
            Kami berkomitmen untuk menciptakan lingkungan yang lebih bersih
            melalui teknologi dan inovasi yang ramah lingkungan.
          </p>
        </div>
        <div style={styles.heroRight}>
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
            alt="Smart Cycle Hero"
            width={600}
            height={400}
            style={styles.heroImg}
          />
        </div>
      </section>

      {/* STATISTIK */}
      <section style={styles.statsSection}>
        <div style={styles.statItem}>
          <span style={styles.statIcon}>♻️</span>
          <h2 style={styles.statNumber}>100+</h2>
          <p style={styles.statLabel}>Sampah Teridentifikasi</p>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statIcon}>👥</span>
          <h2 style={styles.statNumber}>50+</h2>
          <p style={styles.statLabel}>Pengguna</p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section style={styles.row}>
        <div style={styles.imgWrap}>
          <Image
            src="/images/Klasifikasi_sampah.png"
            alt="Our Mission"
            width={500}
            height={380}
            style={styles.sectionImg}
          />
        </div>
        <div style={styles.textWrap}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionDesc}>
            Misi kami adalah membantu masyarakat mengelola sampah dengan lebih
            efektif menggunakan teknologi modern, sehingga tercipta lingkungan
            yang bersih dan berkelanjutan.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>✅ Klasifikasi sampah berbasis teknologi</li>
            <li style={styles.listItem}>✅ Edukasi lingkungan untuk masyarakat</li>
            <li style={styles.listItem}>✅ Layanan pickup sampah terjadwal</li>
          </ul>
        </div>
      </section>

      {/* OUR VISION */}
      <section style={{ ...styles.row, flexDirection: "row-reverse" }}>
        <div style={styles.imgWrap}>
          <Image
            src="/images/vision.png"
            alt="Our Vision"
            width={500}
            height={380}
            style={styles.sectionImg}
          />
        </div>
        <div style={styles.textWrap}>
          <h2 style={styles.sectionTitle}>Our Vision</h2>
          <p style={styles.sectionDesc}>
            Menjadi platform terdepan dalam pengelolaan sampah berbasis
            teknologi di Indonesia, menciptakan dampak positif bagi lingkungan
            dan generasi mendatang.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>✅ Inovasi berkelanjutan</li>
            <li style={styles.listItem}>✅ Dampak lingkungan yang nyata</li>
            <li style={styles.listItem}>✅ Menjangkau seluruh Indonesia</li>
          </ul>
        </div>
      </section>

      {/* OUR HISTORY */}
      <section style={styles.row}>
        <div style={styles.imgWrap}>
          <Image
            src="/images/history.jpg"
            alt="Our History"
            width={500}
            height={380}
            style={styles.sectionImg}
          />
        </div>
        <div style={styles.textWrap}>
          <h2 style={styles.sectionTitle}>Our History</h2>
          <p style={styles.sectionDesc}>
            Smart Cycle didirikan dengan tekad untuk mengatasi permasalahan
            sampah di Indonesia. Berawal dari ide sederhana, kami berkembang
            menjadi platform yang dipercaya oleh banyak masyarakat.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>✅ Didirikan dengan semangat perubahan</li>
            <li style={styles.listItem}>✅ Berkembang bersama komunitas</li>
            <li style={styles.listItem}>✅ Terus berinovasi untuk masa depan</li>
          </ul>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={styles.howSection}>
        <h2 style={styles.howTitle}>How We Work</h2>
        <p style={styles.howDesc}>
          Kami menerapkan pendekatan yang kolaboratif dan transparan, memastikan
          setiap langkah memberikan dampak nyata bagi lingkungan dan masyarakat.
        </p>
        <div style={styles.howImg}>
          <Image
            src="/images/work.JPG"
            alt="How We Work"
            width={1000}
            height={450}
            style={styles.howImgStyle}
          />
        </div>
      </section>

    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  // HERO
  hero: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    maxWidth: "1100px",
    margin: "80px auto",
    padding: "0 20px",
  },
  heroLeft: {
    flex: 1,
  },
  breadcrumb: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "12px",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: "bold",
    lineHeight: "1.2",
    marginBottom: "16px",
    color: "#111827",
  },
  heroDesc: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#555",
  },
  heroRight: {
    flex: 1,
  },
  heroImg: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },

  // STATISTIK
  statsSection: {
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    backgroundColor: "#f0fdf4",
    padding: "60px 20px",
    textAlign: "center",
    marginBottom: "60px",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  statIcon: {
    fontSize: "40px",
    color: "#16a34a",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#111827",
    margin: 0,
  },
  statLabel: {
    fontSize: "14px",
    color: "#555",
    margin: 0,
  },

  // ROW SECTION
  row: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    maxWidth: "1100px",
    margin: "0 auto 80px",
    padding: "0 20px",
  },
  imgWrap: {
    flex: 1,
  },
  sectionImg: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },
  textWrap: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#111827",
  },
  sectionDesc: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  listItem: {
    fontSize: "14px",
    color: "#374151",
  },

  // HOW WE WORK
  howSection: {
    textAlign: "center",
    maxWidth: "1100px",
    margin: "0 auto 80px",
    padding: "0 20px",
  },
  howTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#111827",
  },
  howDesc: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#555",
    marginBottom: "30px",
    maxWidth: "700px",
    margin: "0 auto 30px",
  },
  howImg: {
    borderRadius: "12px",
    overflow: "hidden",
  },
  howImgStyle: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },
};