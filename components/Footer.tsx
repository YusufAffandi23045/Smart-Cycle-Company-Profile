import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            <Image src="/images/logo.png" alt="Smart Cycle Logo" width={40} height={40} />
            <h2 className="footer-brand-name">Smart Cycle</h2>
          </div>
          <p className="footer-desc">
            Gunakan teknologi untuk mengenali dan membuang sampah dengan benar.
          </p>
          <div className="footer-socials">
            <a href="https://x.com/user" target="_blank">
              <Image src="/images/x.png" alt="X" width={24} height={24} className="social-icon" />
            </a>
            <a href="https://instagram.com/user" target="_blank">
              <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/user" target="_blank">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} className="social-icon" />
            </a>
            <a href="https://youtube.com/@user" target="_blank">
              <Image src="/images/youtube.png" alt="YouTube" width={36} height={24} className="social-icon" />
            </a>
          </div>
        </div>

        {/* EKSPLORASI */}
        <div className="footer-col">
          <h3 className="footer-heading">Eksplorasi</h3>
          <ul className="footer-list">
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/about" className="footer-link">About</Link></li>
            <li><Link href="/services" className="footer-link">Services</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">smartcycle@email.com</p>
          <p className="footer-text">Jl. Ahmad Yani No.45,</p>
          <p className="footer-text">Kabupaten Ngawi.</p>
        </div>

        {/* HELP */}
        <div className="footer-col">
          <h3 className="footer-heading">Help</h3>
          <ul className="footer-list">
            <li><Link href="/contact" className="footer-link">Contact</Link></li>
            <li><Link href="/faq" className="footer-link">FAQ</Link></li>
            <li><Link href="/privacy-policy" className="footer-link">Kebijakan & Privasi</Link></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 Smart Cycle. All rights reserved.</p>
      </div>
    </footer>
  );
}
