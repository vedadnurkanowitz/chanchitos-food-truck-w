import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/global.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "About Us", href: "#about" },
    { name: "Location", href: "#location" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a href="/" className="logo">
            <img
              src="/images/chanchitos-logo.png"
              alt="Los Chanchitos Logo"
              className="logo-img"
            />
          </a>

          <nav className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#menu" className="nav-cta btn-primary desktop-cta">
            Order Now
          </a>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ zIndex: 2000, position: "relative" }} // ensure it stays over the full screen menu
          >
            {isOpen ? <X size={28} color="transparent" /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants as any}
          >
            <button
              className="mobile-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} color="white" />
            </button>
            <div className="mobile-menu-content">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  custom={i}
                  variants={linkVariants as any}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#menu"
                className="btn-primary mobile-cta"
                custom={navLinks.length}
                variants={linkVariants as any}
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
