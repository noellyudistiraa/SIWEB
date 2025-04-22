// app/ui/penjualan/pagination.tsx  
'use client';  

import React from 'react';  
import { newRocker } from '../fonts';  
import clsx from 'clsx';  

export default function Pagination({  
  totalPages,  
  currentPage,  
  onPageChange,  
}: {  
  totalPages: number;  
  currentPage: number;  
  onPageChange: (page: number) => void;  
}) {  
  const pageNumbers: React.ReactNode[] = [];  

  for (let i = 1; i <= totalPages; i++) {  
    pageNumbers.push(  
      <PaginationNumber  
        key={i}  
        page={i}  
        isActive={i === currentPage}  
        onClick={() => onPageChange(i)}  
      />  
    );  
  }  

  return pageNumbers;  
}  

function PaginationNumber({  
  page,  
  isActive,  
  onClick,  
}: {  
  page: number;  
  isActive: boolean;  
  onClick: () => void;  
}) {  
  return (  
    <button  
      onClick={onClick}  
      className={clsx(  
        `${newRocker.className}`,  
        'w-8 h-8 flex items-center justify-center text-sm',  
        {  
          'bg-black text-white rounded-full': isActive,  
          'bg-white text-black border border-gray-300 rounded-full': !isActive,  
        }  
      )}  
    >  
      {page}  
    </button>  
  );  
}  
