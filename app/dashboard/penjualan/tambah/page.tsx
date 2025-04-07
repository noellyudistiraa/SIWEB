import React from 'react';  
import { poppins } from '@/app/ui/fonts';  

export default function TambahPenjualanPage() {  
  return (  
    <div className={`${poppins.className} bg-black min-h-screen p-6 text-white`}>  
      <h1 className="text-2xl font-bold mb-6">Tambah Penjualan Baru</h1>  
      
      <form className="bg-[#0f3460] p-6 rounded-lg">  
        {/* Form input untuk tambah penjualan */}  
        <div className="mb-4">  
          <label className="block mb-2">Nama Pembeli</label>  
          <input   
            type="text"   
            className="w-full p-2 bg-black text-white rounded"  
            placeholder="Masukkan nama pembeli"  
          />  
        </div>  
        {/* Tambahkan input lainnya sesuai kebutuhan */}  
        <button   
          type="submit"   
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"  
        >  
          Simpan Penjualan  
        </button>  
      </form>  
    </div>  
  );  
}  
