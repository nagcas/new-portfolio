import './BackToTop.css';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function BackToTopButton({ threshold = 280 }) {
  const { t } = useTranslation('global');

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          onClick={scrollToTop}
          className="position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center z-3 icons__back"
          style={{ width: '50px', height: '50px' }}
          aria-label={t('navbar.torna-in-alto')}
        >
          {/* Icona Freccia Bootstrap Icons */}
          <i className="bi bi-arrow-up fs-5"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
