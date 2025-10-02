// CoverFlowCarousel.jsx
import React, { useState, useEffect } from 'react';
import './CoverFlowCarousel.css';

const CoverFlowCarousel = ({ 
  albums = [], 
  initialIndex = 0,
  onAlbumSelect,
  onPlayClick,
  className = "",
  height = "400px",
  payload,
  width
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);


  const albumsData = albums.length > 0 ? albums : payload?.images;


useEffect(() => {
    if (onAlbumSelect) {
      onAlbumSelect(albumsData[currentIndex]);
    }
  }, [currentIndex, onAlbumSelect, albumsData]);

  const navigate = (direction) => {
    if (direction === -1 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 1 && currentIndex < albumsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getItemClassName = (index) => {
    const diff = index - currentIndex;
    let className = 'carousel-item';
    
    if (diff === 0) className += ' center';
    else if (diff === -1) className += ' left-1';
    else if (diff === 1) className += ' right-1';
    else if (diff === -2) className += ' left-2';
    else if (diff === 2) className += ' right-2';
    else className += ' hidden';
    
    return className;
  };

  const handlePlayClick = (album, e) => {
    e.stopPropagation();
    if (onPlayClick) {
      onPlayClick(album);
    }
  };

  return (
    <div 
      className={`cover-flow-carousel ${className}`} 
      style={{ height }}
    >
      <div className="carousel-container">
        <button 
          className="nav-button prev" 
          onClick={() => navigate(-1)}
          disabled={currentIndex === 0}
          aria-label="Previous album"
        >
          &#8249;
        </button>
        
        <button 
          className="nav-button next" 
          onClick={() => navigate(1)}
          disabled={currentIndex === albumsData.length - 1}
          aria-label="Next album"
        >
          &#8250;
        </button>
        <div className="carousel-track">

{albumsData?.map((album, index) => (

  <div
    key={index}
    className={getItemClassName(index)}
    onClick={() => goToSlide(index)}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === 'Enter' || e.key === ' ') goToSlide(index);
    }}
  >
    <img 
      src={typeof album === 'string' ? album : album.image} 
      alt={`Slide ${index + 1}`} 
      loading="lazy"
       
    />

  </div>
))}

        </div>
      </div>
           
      <div className="carousel-dots">
        {albumsData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to album ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverFlowCarousel;

