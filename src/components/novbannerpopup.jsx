
import { useState, useEffect } from 'react';
import './novbannerpopup.css';
import pastorBanner from '../assets/novbanner.jpeg';

function NovBannerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="pastor-popup-overlay"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="pastor-popup-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="pastor-popup-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close banner"
        >
          &times;
        </button>

        <img
          src={pastorBanner}
          alt="Jesus Family Church Australia banner"
          className="pastor-popup-image"
        />
      </div>
    </div>
  );
}

export default NovBannerPopup;
