import type { Section } from '../types';

export const filterSections = (sections: Section[], searchQuery: string): Section[] => {
  if (!searchQuery.trim()) return sections;

  const query = searchQuery.toLowerCase();
  
  return sections
    .map((section) => ({
      ...section,
      functions: section.functions.filter(
        (func) =>
          func.name.toLowerCase().includes(query) ||
          func.description.toLowerCase().includes(query) ||
          func.signature.toLowerCase().includes(query) ||
          section.title.toLowerCase().includes(query)
      ),
    }))
    .filter((section) => section.functions.length > 0);
};
