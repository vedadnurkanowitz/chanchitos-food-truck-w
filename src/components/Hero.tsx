import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import "../styles/global.css"; // Just in case, though Astro handles this normally

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="badge">Seward, Alaska</span>
            <h1 className="hero-title">
              Authentic Mexican Food <br />
              <span className="highlight">in the Heart of Alaska</span>
            </h1>
            <p className="hero-subtitle">
              Los Chanchitos strives to show our customers what authenticity and
              true love for our craft can create. Open all summer long!
            </p>

            <div className="hero-actions">
              <a href="#menu" className="btn-primary">
                View Our Menu
                <ChevronRight size={20} />
              </a>
              <a href="#about" className="btn-secondary">
                Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
