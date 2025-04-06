import React from 'react';  
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';  

export default function PenjualanPage() {  
  return (  
    <div className="bg-[#000000] min-h-screen p-6 text-white">  
      <h1 className="text-3xl font-poppins font-bold mb-6">Penjualan</h1>  
      
      {/* Header */}  
      <div className="flex justify-between mb-6">  
        {/* Search Bar */}  
        <div className="relative flex-grow mr-4">  
          <input   
            type="text"   
            placeholder="Cari User Disini...."   
            className="w-full p-2 pl-10 bg-[#0f3460] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  
          />  
          <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />  
        </div>  
        
        {/* Tambah Penjualan Button */}  
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">  
          <PlusIcon className="h-5 w-5 mr-2" />  
          Tambah Penjualan  
        </button>  
      </div>  
      
      {/* ... sisanya sama seperti sebelumnya */}  
    </div>  
  );  
}  
