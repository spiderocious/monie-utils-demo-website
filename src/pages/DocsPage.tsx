import { useState, useMemo } from 'react';
import { sections } from '../data/sections';
import { useInputs } from '../hooks/useInputs';
import { useSearch } from '../hooks/useSearch';
import { useLiveDemo } from '../hooks/useLiveDemo';
import { SearchBar } from '../components/layout/SearchBar';
import { Navigation } from '../components/layout/Navigation';
import { Section } from '../components/docs/Section';
import { filterSections } from '../utils/filterSections';

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('currency-formatting');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const { inputs, debouncedInputs, updateInput } = useInputs();
  const { searchQuery, setSearchQuery, debouncedSearchQuery } = useSearch();
  const { getLiveDemoResult } = useLiveDemo(debouncedInputs);

  const filteredSections = useMemo(
    () => filterSections(sections, debouncedSearchQuery),
    [debouncedSearchQuery]
  );

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-80 flex-shrink-0">
          <Navigation
            sections={filteredSections}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            searchQuery={searchQuery}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-4xl mx-auto p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                Monie Utils Documentation
              </h1>
              <p className="text-gray-300 text-lg">
                A comprehensive utility library for money formatting, conversion, and calculations.
                All functions are tested with real implementations from the monie-utils library.
              </p>
            </div>

            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              placeholder="Search functions, descriptions, or signatures..."
            />

            {filteredSections.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg">
                  No functions found matching "{searchQuery}"
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredSections.map((section) => (
                  <Section
                    key={section.id}
                    section={section}
                    inputValues={inputs}
                    onInputChange={updateInput}
                    onCopyCode={handleCopyCode}
                    copiedCode={copiedCode}
                    getLiveResult={getLiveDemoResult}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
