import React from 'react';
import Image from 'next/image';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { poppins } from '@/app/ui/fonts';
import Search from '@/app/ui/katalog/search';  
import Pagination from '@/app/ui/katalog/pagination';  
import KatalogTable from '@/app/ui/katalog/katalog-table';  

export default function KatalogPage() {
  return (
    <div className={`${poppins.className} p-6 bg-black min-h-screen`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Katalog Produk</h1>
        <button className="bg-transparent text-white hover:bg-white/10 py-2 px-4 rounded border border-white">
          Profile
        </button>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <Search placeholder="Cari Produk..." />
        <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded">
          Tambah Kostum
        </button>
      </div>
      
      <KatalogTable />
    </div>
  );
}
