'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/landing.css';

export default function Landing({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Landing'in sadece bir kez gösterilmesini sağlamak için animasyon bitiminde gösterimi kapatıyoruz
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 4000); // 3s gösterim + 1s fadeout

    // Landing kaybolduktan sonra ana içeriği gösteriyoruz
    const contentTimer = setTimeout(() => {
      setShowLanding(false);
    }, 5000); // 4s animasyon bitimi sonrası

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Landing Layer */}
      {showLanding && (
        <div className={`landingContainer ${!isAnimating ? 'fadeOut' : ''}`}>
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={200}
            height={200}
            className="landingLogo"
          />
        </div>
      )}

      {/* Content Layer */}
      <div className={`mainContent ${isAnimating ? 'blurContent' : 'clearContent'}`}>
        {children}
      </div>
    </div>
  );
}
