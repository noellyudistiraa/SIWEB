// app/dashboard/penjualan/penjualan-content.tsx  
'use client';  

import { useState } from 'react';  
import PenjualanTable from '@/app/ui/penjualan/penjualan-table';  

// Mock data penjualan  
const mockPenjualan = [  
  { id: 1, tanggal: '2024-03-23', harga: 250000, nama_pembeli: 'Jajang', produk_dibeli: 'Casper' }, 
  { id: 2, tanggal: '2024-03-22', harga: 400000, nama_pembeli: 'Udin', produk_dibeli: 'Michael Myers  ' },
  { id: 3, tanggal: '2024-03-21', harga: 500000, nama_pembeli: 'Berren', produk_dibeli: 'Annabelle  ' },
  { id: 4, tanggal: '2024-03-20', harga: 400000, nama_pembeli: 'Dadang', produk_dibeli: 'Joker  ' },
  { id: 5, tanggal: '2024-03-19', harga: 400000, nama_pembeli: 'Rina', produk_dibeli: 'Harley Quinn  ' }, 
];  

export default function PenjualanPageContent() {  
  const [currentPage, setCurrentPage] = useState(1);  
  const [searchQuery, setSearchQuery] = useState('');  
  const [penjualanList, setPenjualanList] = useState(mockPenjualan);  

  const itemsPerPage = 5;  

  // Filter penjualan berdasarkan query  
  const filteredPenjualan = searchQuery   
    ? penjualanList.filter((item) =>   
        item.nama_pembeli.toLowerCase().includes(searchQuery.toLowerCase())  
      )  
    : penjualanList;  

  // Pagination  
  const totalPages = Math.ceil(filteredPenjualan.length / itemsPerPage);  
  const startIndex = (currentPage - 1) * itemsPerPage;  
  const endIndex = startIndex + itemsPerPage;  
  const penjualan = filteredPenjualan.slice(startIndex, endIndex);  
 

  const handleDelete = (id: number) => {  
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data penjualan ini?');  
    if (confirmDelete) {  
      const updatedPenjualan = penjualanList.filter(item => item.id !== id);  
      setPenjualanList(updatedPenjualan);  
      
      // Adjust current page if needed  
      if (updatedPenjualan.length <= (currentPage - 1) * itemsPerPage) {  
        setCurrentPage(Math.max(1, currentPage - 1));  
      }  
    }  
  };  

  return (  
    <div>  
      <PenjualanTable   
        penjualan={penjualan}  
        totalPages={totalPages}  
        currentPage={currentPage}  
        onDelete={handleDelete}  
      />  
    
    </div>  
  );  
}  
