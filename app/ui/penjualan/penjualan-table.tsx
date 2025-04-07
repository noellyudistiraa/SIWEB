import React from 'react';  
import Pagination from './pagination';  

// Data penjualan statis  
const salesData = [  
  {  
    id: 1,  
    date: '2024-03-23',  
    price: 250000,  
    buyerName: 'Jajang',  
    productBought: 'Casper Costume'  
  },  
  {  
    id: 2,  
    date: '2024-03-22',  
    price: 400000,  
    buyerName: 'Udin',  
    productBought: 'Michael Myers Costume'  
  },  
  {  
    id: 3,  
    date: '2024-03-21',  
    price: 500000,  
    buyerName: 'Berren',  
    productBought: 'Annabelle Costume'  
  },  
  {  
    id: 4,  
    date: '2024-03-20',  
    price: 400000,  
    buyerName: 'Dadang',  
    productBought: 'Joker Costume'  
  },  
  {  
    id: 5,  
    date: '2024-03-19',  
    price: 300000,  
    buyerName: 'Rina',  
    productBought: 'Ghostface Costume'  
  }  
];  

export default function PenjualanTable() {  
  return (  
    <div className="bg-white rounded-lg overflow-hidden">  
      <table className="min-w-full">  
        <thead className="bg-black text-white">  
          <tr>  
            <th className="px-4 py-3 text-left">ID</th>  
            <th className="px-4 py-3 text-left">Tanggal</th>  
            <th className="px-4 py-3 text-left">Harga</th>  
            <th className="px-4 py-3 text-left">Nama Pembeli</th>  
            <th className="px-4 py-3 text-left">Produk dibeli</th>  
          </tr>  
        </thead>  
        <tbody>  
          {salesData.map((sale) => (  
            <tr key={sale.id} className="border-b">  
              <td className="px-4 py-3">{sale.id}</td>  
              <td className="px-4 py-3">{sale.date}</td>  
              <td className="px-4 py-3">Rp {sale.price.toLocaleString()}</td>  
              <td className="px-4 py-3">{sale.buyerName}</td>  
              <td className="px-4 py-3">{sale.productBought}</td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
      
      <div className="p-4 flex justify-center">  
        <Pagination totalPages={2} />  
      </div>  
    </div>  
  );  
}  
