import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../../src/styles/categoryshowcase.css";
import { showcaseCategories } from "@/constants/data";
import Image from "next/image";


const AUTO_CHANGE_INTERVAL = 3000; // ms

const CategoryShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (hoveredIndex !== null) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % showcaseCategories.length);
        setFade(true);
      }, 250);
    }, AUTO_CHANGE_INTERVAL);
    return () => clearInterval(timer);
  }, [hoveredIndex]);

  const handleHover = (idx: number) => {
    setFade(false);
    setTimeout(() => {
      setHoveredIndex(idx);
      setFade(true);
    }, 120);
  };

  const handleLeave = () => {
    setFade(false);
    setTimeout(() => {
      setHoveredIndex(null);
      setFade(true);
    }, 120);
  };

  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <div className="showcaseWrapper">
      <div className="showcaseCard">
        {/* Görseli sağa almak için önce liste, sonra görsel */}
        <ul className="categoryList">
          {showcaseCategories.map((cat, idx) => (
            <li
              key={cat.name}
              onMouseEnter={() => handleHover(idx)}
              onMouseLeave={handleLeave}
              className={`categoryItem ${currentIndex === idx ? "active" : ""}`}
            >
              <Link
                href={cat.url}
                style={{ color: "inherit", textDecoration: "none", display: "block", width: "100%" }}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="imageWrapper">
          <Image
            key={showcaseCategories[currentIndex].image}
            src={showcaseCategories[currentIndex].image}
            alt={showcaseCategories[currentIndex].name}
            className={`categoryImage ${fade ? "fadeIn" : "fadeOut"}`}
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;


