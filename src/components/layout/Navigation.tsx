import { useRef, useEffect } from 'react';
import type { Section } from '../../types';

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  searchQuery: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  onSectionChange,
  searchQuery,
}) => {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (searchQuery) return; // Don't update active section when searching

      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = sectionsRef.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            onSectionChange(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, onSectionChange, searchQuery]);

  useEffect(() => {
    // Update refs for sections
    sections.forEach(section => {
      sectionsRef.current[section.id] = document.getElementById(section.id);
    });
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
    }
  };

  return (
    <div className="sticky top-0 bg-gray-900 border-r border-gray-700 h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Sections</h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="font-medium">{section.title}</div>
              <div className="text-sm text-gray-400 mt-1">
                {section.functions.length} function{section.functions.length !== 1 ? 's' : ''}
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
