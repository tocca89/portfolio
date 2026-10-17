import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface PageInfo {
  id: string;
  key: string;
}

export const PAGES: PageInfo[] = [
  { id: 'hero', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'career', key: 'career' },
  { id: 'contact', key: 'contact' },
];

export const SECTION_TO_PAGE_INDEX: Record<string, number> = {
  hero: 0,
  home: 0,
  about: 1,
  services: 2,
  skills: 3,
  projects: 4,
  career: 5,
  education: 5,
  contact: 6,
};

interface MobilePaginationContextType {
  isMobile: boolean;
  isPaginated: boolean;
  togglePaginated: () => void;
  currentPage: number;
  direction: number;
  goToPage: (index: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  goToSection: (sectionId: string) => void;
  totalPages: number;
}

const MobilePaginationContext = createContext<MobilePaginationContextType | undefined>(undefined);

export const MobilePaginationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  const [isPaginated, setIsPaginated] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPage = useCallback((index: number) => {
    if (index < 0 || index >= PAGES.length) return;
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const nextPage = useCallback(() => {
    if (currentPage < PAGES.length - 1) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  const goToSection = useCallback((sectionId: string) => {
    const cleanId = sectionId.replace('#', '').toLowerCase();
    const pageIndex = SECTION_TO_PAGE_INDEX[cleanId];

    if (pageIndex !== undefined && isMobile && isPaginated) {
      goToPage(pageIndex);
    } else {
      const element = document.getElementById(cleanId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isMobile, isPaginated, goToPage]);

  const togglePaginated = useCallback(() => {
    setIsPaginated((prev) => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <MobilePaginationContext.Provider
      value={{
        isMobile,
        isPaginated,
        togglePaginated,
        currentPage,
        direction,
        goToPage,
        nextPage,
        prevPage,
        goToSection,
        totalPages: PAGES.length,
      }}
    >
      {children}
    </MobilePaginationContext.Provider>
  );
};

export const useMobilePagination = (): MobilePaginationContextType => {
  const context = useContext(MobilePaginationContext);
  if (!context) {
    throw new Error('useMobilePagination must be used within a MobilePaginationProvider');
  }
  return context;
};
