import { useState, useRef } from 'react';
import { ArrowsLeftRight } from '@phosphor-icons/react';
import './BeforeAfter.css';

export default function BeforeAfter({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <img src={afterImage} alt="Depois" className="image-after" draggable="false" />
      
      <div 
        className="image-before-wrapper" 
        style={{ clipPath: `inset(0 calc(100% - ${sliderPosition}%) 0 0)` }}
      >
        <img src={beforeImage} alt="Antes" className="image-before" draggable="false" />
      </div>

      <div 
        className="slider-handle" 
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="slider-icon">
          <ArrowsLeftRight size={20} weight="bold" color="#1a1a1a" />
        </div>
      </div>
      
      <div className="before-after-labels">
        <span className="label-before" style={{ opacity: sliderPosition > 10 ? 1 : 0 }}>Antes</span>
        <span className="label-after" style={{ opacity: sliderPosition < 90 ? 1 : 0 }}>Depois</span>
      </div>
    </div>
  );
}
