import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { MobilePaginationProvider, useMobilePagination } from './context/MobilePaginationContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CareerTimeline } from './components/CareerTimeline';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Dock } from './components/Dock';
import { MobilePager } from './components/MobilePager';
import { MobileNextSectionCTA } from './components/MobileNextSectionCTA';

const AppContent: React.FC = () => {
  const { isMobile, isPaginated, currentPage, direction, nextPage, prevPage } = useMobilePagination();

  // Smooth inertial scroll via Lenis on desktop viewports
  useEffect(() => {
    if (isMobile) return;

    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [isMobile]);

  // Touch swipe gesture handling for mobile pagination
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Trigger page turn if horizontal swipe > 60px and dominant over vertical scrolling
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-[#18648a]/30 selection:text-cyan-200">
      <Navbar />

      {/* Mobile Paginated Layout (Mobile Screen & Paginated Mode) */}
      {isMobile && isPaginated ? (
        <main
          className="pt-16 pb-20 overflow-x-hidden min-h-[90vh]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 35 : -35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -35 : 35 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {currentPage === 0 && (
                <div>
                  <Hero />
                  <Marquee />
                  <MobileNextSectionCTA nextPageIndex={1} />
                </div>
              )}
              {currentPage === 1 && (
                <div>
                  <About />
                  <MobileNextSectionCTA nextPageIndex={2} />
                </div>
              )}
              {currentPage === 2 && (
                <div>
                  <Services />
                  <MobileNextSectionCTA nextPageIndex={3} />
                </div>
              )}
              {currentPage === 3 && (
                <div>
                  <Skills />
                  <MobileNextSectionCTA nextPageIndex={4} />
                </div>
              )}
              {currentPage === 4 && (
                <div>
                  <Projects />
                  <MobileNextSectionCTA nextPageIndex={5} />
                </div>
              )}
              {currentPage === 5 && (
                <div>
                  <CareerTimeline />
                  <Education />
                  <MobileNextSectionCTA nextPageIndex={6} />
                </div>
              )}
              {currentPage === 6 && (
                <div>
                  <Contact />
                  <Footer />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      ) : (
        /* Desktop or Mobile Continuous Layout */
        <>
          <main>
            <Hero />
            <Marquee />
            <About />
            <Services />
            <Skills />
            <Projects />
            <CareerTimeline />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      {/* Floating Bottom Navigations */}
      <Dock />
      <MobilePager />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MobilePaginationProvider>
          <AppContent />
        </MobilePaginationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
