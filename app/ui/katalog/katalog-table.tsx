import Image from 'next/image';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

// Simulasi data produk
const products = [
  {
    id: 1,
    name: 'Casper',
    price: 250000,
    image: '/costumes/casper.jpg'
  },
  {
    id: 2,
    name: 'Michael Myers',
    price: 400000,
    image: '/costumes/michael-myers.jpg'
  },
  {
    id: 3,
    name: 'Annabelle',
    price: 500000,
    image: '/costumes/annabelle.jpg'
  },
  {
    id: 4,
    name: 'Joker',
    price: 400000,
    image: '/costumes/joker.jpg'
  }
];

export default function KatalogTable() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg">
      <table className="min-w-full">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Produk</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Harga</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-16 w-16 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                Rp{product.price.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded flex items-center">
                    <PencilSquareIcon className="h-4 w-4 mr-1" />
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded flex items-center">
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-center p-4 bg-white">
        <nav className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((page) => (
            <a
              key={page}
              href="#"
              className={`px-3 py-1 ${
                page === 1 ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'
              } border border-gray-300`}
            >
              {page}
            </a>
          ))}
          <span className="px-3 py-1 border border-gray-300">...</span>
          {[10, 11].map((page) => (
            <a
              key={page}
              href="#"
              className="px-3 py-1 bg-white text-black hover:bg-gray-200 border border-gray-300"
            >
              {page}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
