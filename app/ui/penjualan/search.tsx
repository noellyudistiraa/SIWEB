'use client';  

import { useState } from 'react';  
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';  

interface SearchProps {  
  onSearch?: (query: string) => void;  
  placeholder: string;  
}  

export default function Search({ placeholder, onSearch }: SearchProps) {  
  const [searchTerm, setSearchTerm] = useState('');  

  const handleSearch = () => {  
    if (onSearch) {  
      onSearch(searchTerm);  
    }  
  };  

  const handleClear = () => {  
    setSearchTerm('');  
    if (onSearch) {  
      onSearch('');  
    }  
  };  

  return (  
    <div className="relative flex w-[300px]">  
      <input  
        className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-8 text-sm outline-none absolute-right"  
        placeholder={placeholder}  
        value={searchTerm}  
        onChange={(e) => setSearchTerm(e.target.value)}  
      />  
      <div className="absolute right-3 top-1/2 -translate-y-1/2">  
        {searchTerm ? (  
          <button onClick={handleClear}>  
            <XMarkIcon className="h-5 w-5 text-gray-500" />  
          </button>  
        ) : (  
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />  
        )}  
      </div>  
    </div>  
  );  
}
