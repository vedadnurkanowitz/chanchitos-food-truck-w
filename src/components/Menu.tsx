import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Info } from "lucide-react";
import "../styles/global.css";

const menuPlates = [
  {
    id: "tacos2",
    name: "Two Tacos",
    price: "$15.00",
    desc: "Two authentic street tacos.",
  },
  {
    id: "tacos3",
    name: "Three Tacos",
    price: "$17.00",
    desc: "Three authentic street tacos.",
  },
  {
    id: "quesadilla",
    name: "Quesadilla Plate",
    price: "$17.00",
    desc: "Large flour tortilla filled with cheese and your choice of protein.",
  },
  {
    id: "burrito",
    name: "Burrito",
    price: "$17.00",
    desc: "Stuffed with rice, beans, cheese, and protein.",
  },
  {
    id: "bowl",
    name: "Bowl",
    price: "$17.00",
    desc: "A healthy alternative: rice, beans, fresh veggies, and protein.",
  },
  {
    id: "quesabirria",
    name: "Quesabirria Plate",
    price: "$18.00",
    desc: "Two 8” flour tortillas, house-made Birria, melted cheese, consommé dipping sauce.",
    highlight: true,
  },
  {
    id: "nacho",
    name: "Nacho Plate",
    price: "$18.00",
    desc: "Corn chips layered with homemade Queso, pico de gallo, salsa verde, and protein.",
  },
];

const kidsMenu = [
  { id: "kid-quesa", name: "Cheese Quesadilla", price: "$11.00" },
  { id: "kid-burrito", name: "Bean & Cheese Burrito", price: "$9.00" },
];

const proteins = [
  {
    id: "carnitas",
    name: "Carnitas",
    price: "Included",
    desc: "8-hour slow-roasted pork",
  },
  {
    id: "birria",
    name: "Birria",
    price: "Included",
    desc: "Shredded beef brisket",
  },
  {
    id: "veggies",
    name: "Grilled Veggies",
    price: "Included",
    desc: "Bell peppers, white onion, homestyle potatoes",
  },
  { id: "asada", name: "Carne Asada", price: "+$2.50", desc: "Grilled steak" },
  {
    id: "rockfish",
    name: "Rockfish",
    price: "+$4.00",
    desc: "Locally sourced Alaskan Fish",
  },
  {
    id: "salmon",
    name: "Sockeye Salmon",
    price: "+$6.50",
    desc: "Locally sourced Alaskan Fish",
  },
  {
    id: "halibut",
    name: "Halibut",
    price: "+$9.00",
    desc: "Locally sourced Alaskan Fish",
  },
];

export default function Menu() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">
            Experience the flavors of traditional Mexico in Alaska.
          </p>
        </div>

        <div className="menu-steps">
          <button
            className={`step-btn ${activeStep === 1 ? "active" : ""}`}
            onClick={() => setActiveStep(1)}
          >
            <span className="step-num">Step 1</span>
            <span className="step-text">Choose Your Item</span>
          </button>
          <button
            className={`step-btn ${activeStep === 2 ? "active" : ""}`}
            onClick={() => setActiveStep(2)}
          >
            <span className="step-num">Step 2</span>
            <span className="step-text">Pick Your Protein</span>
          </button>
        </div>

        <div className="menu-content-wrapper">
          <AnimatePresence mode="wait">
            {activeStep === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="menu-grid"
              >
                <div className="menu-category">
                  <h3 className="category-title">Plates</h3>
                  <div className="items-list">
                    {menuPlates.map((item) => (
                      <div
                        key={item.id}
                        className={`menu-item ${item.highlight ? "highlight-item" : ""}`}
                      >
                        <div className="item-header">
                          <h4 className="item-name">{item.name}</h4>
                          <span className="item-price">{item.price}</span>
                        </div>
                        <p className="item-desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="menu-category">
                  <h3 className="category-title">Kids Menu</h3>
                  <div className="items-list">
                    {kidsMenu.map((item) => (
                      <div key={item.id} className="menu-item">
                        <div className="item-header">
                          <h4 className="item-name">{item.name}</h4>
                          <span className="item-price">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="menu-images">
                    <img
                      src="/images/tacos_plate.jpg"
                      alt="Tacos"
                      className="menu-img"
                    />
                    <img
                      src="/images/quesabirria_plate.jpg"
                      alt="Quesabirria"
                      className="menu-img"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="menu-grid"
              >
                <div className="menu-category full-width">
                  <h3 className="category-title">
                    Protein Choices{" "}
                    <span className="category-sub">
                      Choose ONE protein per item
                    </span>
                  </h3>
                  <div className="proteins-list">
                    {proteins.map((protein) => (
                      <div key={protein.id} className="protein-card">
                        <div className="protein-header">
                          <h4 className="protein-name">{protein.name}</h4>
                          <span className="protein-price">{protein.price}</span>
                        </div>
                        <p className="protein-desc">{protein.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="extras-info">
                  <Info className="info-icon" />
                  <p>
                    All items will be topped with fresh cilantro & cotija
                    cheese!
                  </p>
                  <p>
                    We also offer Homemade Salsas ($1.50): Verde (Mild), Rojo
                    (Medium), Habanero (Hot), Serrano (Hot!)
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
