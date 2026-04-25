"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav style={styles.nav}>
      <h2>SmartCycle</h2>

      <div style={styles.menu}>
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path}>
            <span
              style={{
                color: pathname === link.path ? "#685AFF" : "inherit",
              }}
            >
              {link.name}
            </span>
          </Link>
        ))}

        {/* 🌙 Dark Mode Button */}
        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          style={styles.button}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 40px",
  },
  menu: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  button: {
    padding: "6px 10px",
    cursor: "pointer",
  },
};