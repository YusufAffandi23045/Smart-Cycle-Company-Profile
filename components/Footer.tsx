import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* BRAND */}
        <div>
          <h2>SmartCycle</h2>
          <p>
            Solusi pintar untuk pengelolaan sampah yang lebih baik dan ramah lingkungan.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3>Navigation</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3>Contact</h3>
          <p>Email: smartcycle@email.com</p>
          <p>Phone: +62 812-3456-7890</p>
          <p>Location: Indonesia</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2026 SmartCycle. All rights reserved.</p>
      </div>
    </footer>
  );
}