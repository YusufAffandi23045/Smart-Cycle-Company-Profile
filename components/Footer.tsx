import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* BRAND */}
        <div>
          <div style={styles.brand}>
            <Image
              src="/images/logo.png"
              alt="Smart Cycle Logo"
              width={40}
              height={40}
            />
            <h2 style={styles.brandName}>Smart Cycle</h2>
          </div>
          <p style={styles.desc}>
            Gunakan teknologi untuk mengenali dan membuang sampah dengan benar.
          </p>

          {/* SOCIAL MEDIA */}
          <div style={styles.socials}>
            <a href="https://x.com/user" target="_blank">
              <Image src="/images/x.png" alt="X" width={24} height={24} />
            </a>
            <a href="https://instagram.com/user" target="_blank">
              <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://linkedin.com/in/user" target="_blank">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://youtube.com/@akunmu" target="_blank">
              <Image src="/images/youtube.png" alt="YouTube" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* EKSPLORASI */}
        <div>
          <h3 style={styles.heading}>Eksplorasi</h3>
          <ul style={styles.list}>
            <li><Link href="/about" style={styles.link}>About</Link></li>
            <li><Link href="/services" style={styles.link}>Services</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 style={styles.heading}>Contact</h3>
          <p style={styles.text}>smartcycle@email.com</p>
          <p style={styles.text}>Jl. Ahmad Yani No.45,</p>
          <p style={styles.text}>Kabupaten Ngawi.</p>
        </div>

        {/* HELP */}
        <div>
          <h3 style={styles.heading}>Help</h3>
          <ul style={styles.list}>
            <li><Link href="#" style={styles.link}>Pusat Bantuan</Link></li>
            <li><Link href="#" style={styles.link}>FAQ</Link></li>
            <li><Link href="#" style={styles.link}>Kebijakan & Privasi</Link></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div style={styles.bottom}>
        <p>© 2026 Smart Cycle. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#3a5a2e",
    color: "#ffffff",
    padding: "60px 40px 30px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "40px",
    maxWidth: "1100px",
    margin: "0 auto 40px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
  },
  brandName: {
    color: "#ffffff",
    fontSize: "20px",
  },
  desc: {
    color: "#bdc617",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  socials: {
    display: "flex",
    gap: "12px",
    marginTop: "12px",
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
  },
  text: {
    color: "#ffffff",
    fontSize: "14px",
    marginBottom: "6px",
  },
  bottom: {
    textAlign: "center",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "20px",
    fontSize: "13px",
    color: "#c8e6a0",
    maxWidth: "1100px",
    margin: "0 auto",
  },
};