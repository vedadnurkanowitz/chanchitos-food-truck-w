import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="image-decoration"></div>
          <img
            src="/images/hero-bg.jpg" // Reusing the high-quality image, or we could add another
            alt="PJ and Amanda, owners of Los Chanchitos"
            className="about-image"
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">Our Story</h2>

          <div className="about-text">
            <p>
              Los Chanchitos strives to show our customers what authenticity and
              true love for our craft can create. We start by producing
              something unique, yet simple, that the food industry of modern
              times has sadly forgotten.
            </p>
            <p>
              Fresh quality ingredients sought out with one intention in mind:
              shock the audience. The owner, manager, and full-time chef works
              to ensure nothing less than the utmost quality of ingredients
              despite the location or season of his operation.
            </p>
            <p>
              The Chanchitos family work tirelessly, and most importantly we
              emphatically care about the product we provide our customers.
            </p>

            <blockquote className="mission-quote">
              "To perpetuate greatness you must be willing to devote everything
              to your passion"
            </blockquote>

            <p>
              Which is a founding principle of Los Chanchitos.
              <br />
              Come see for yourself!
              <br />
              <strong>Enough talk, lets eat!</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
