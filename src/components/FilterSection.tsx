import { useState } from "react";

interface FilterSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  availableYears: number[];
}

export default function FilterSection({
  searchTerm,
  setSearchTerm,
  selectedYear,
  setSelectedYear,
  sortBy,
  setSortBy,
  availableYears,
}: FilterSectionProps) {
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const yearOptions = [
    { value: "all", label: "Filter by year" },
    ...availableYears.map(year => ({ value: year.toString(), label: year.toString() }))
  ];

  const sortOptions = [
    { value: "date-desc", label: "Sort by date" },
    { value: "date-asc", label: "Sort by date (oldest)" },
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-desc", label: "Sort by name (Z-A)" },
  ];

  const Dropdown = ({ 
    options, 
    value, 
    onChange, 
    isOpen, 
    setIsOpen, 
    placeholder 
  }: {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    placeholder: string;
  }) => (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-cyan-400 text-white font-semibold px-4 py-2 rounded-md text-sm hover:shadow-lg transition-colors flex items-center gap-2 min-w-32"
      >
        <span className="truncate">
          {options.find(opt => opt.value === value)?.label || placeholder}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-40">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Left side - Filters */}
        <div className="flex flex-wrap gap-3">
          <Dropdown
            options={yearOptions}
            value={selectedYear}
            onChange={setSelectedYear}
            isOpen={isYearDropdownOpen}
            setIsOpen={setIsYearDropdownOpen}
            placeholder="Filter by year"
          />
          <Dropdown
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            isOpen={isSortDropdownOpen}
            setIsOpen={setIsSortDropdownOpen}
            placeholder="Sort by"
          />
        </div>

        {/* Right side - Search */}
        <div className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 sm:w-64 px-3 py-2 border text-gray-800 border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
          />
          <button className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-3 py-2 hover:bg-gray-200 transition-colors">
            <svg className="w-4 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}