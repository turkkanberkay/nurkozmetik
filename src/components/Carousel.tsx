'use client';

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { slides } from '@/constants/data';
import Image from "next/image";

import '../styles/carousel.css';

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5 saniyede bir

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <FaChevronLeft
        className="carouselArrow leftArrow"
        onClick={prevSlide}
      />
      <FaChevronRight
        className="carouselArrow rightArrow"
        onClick={nextSlide}
      />

      {slides.map((slide, index) => (
        <a
          href={slide.href}
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.src}
            width={1920}  
            height={400}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
          />
        </a>
      ))}

      {/* Noktalar */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carouselDot ${current === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
