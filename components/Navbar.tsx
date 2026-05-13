"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="logo" width={35} />
        <span>SmartCycle</span>
      </div>

      {/* Hamburger button - hanya muncul di mobile */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Menu */}
      <div className={`navbar-menu ${menuOpen ? "navbar-menu-open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`navbar-link ${pathname === link.path ? "navbar-link-active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link href="/login" className="navbar-admin" onClick={() => setMenuOpen(false)}>
          SIGN IN
        </Link>


        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="navbar-theme-btn"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
