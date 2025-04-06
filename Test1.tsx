// app/dashboard/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function HaunterShop() {
  return (
    <div className="min-h-screen bg-black bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center py-4 px-6 md:px-12">
        <div className="flex items-center space-x-4">
          <button className="border border-white p-2 rounded">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-white"></div>
              <div className="w-2 h-2 bg-white"></div>
              <div className="w-2 h-2 bg-white"></div>
              <div className="w-2 h-2 bg-white"></div>
            </div>
          </button>
          <div className="relative h-8 w-8">
            <Image 
              src="/ghost-icon.png" 
              alt="Ghost Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 text-md">
          <Link href="/" className="hover:text-gray-300">Beranda</Link>
          <Link href="/produk" className="hover:text-gray-300">Produk</Link>
          <Link href="/new-arrivals" className="hover:text-gray-300">New Arrivals</Link>
          <Link href="/ulasan" className="hover:text-gray-300">Ulasan</Link>
          <Link href="/tentang-kami" className="hover:text-gray-300">Tentang Kami</Link>
        </div>
        
        <Link href="/login" className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors">
          Login
        </Link>
      </nav>
      
      {/* Main Content */}
      <main className="px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
              Selamat Datang<br />DI HaunterShop
            </h1>
            <p className="text-xl mb-8 font-light italic">
              Temukan Gaya Serammu...
            </p>
            
            <div className="flex space-x-4">
              <Link href="/login" className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors">
                Login
              </Link>
              <Link href="/produk" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors">
                Lihat produk
              </Link>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="md:w-1/2 relative h-[300px] md:h-[400px]">
            <div className="absolute right-0 top-0 w-full h-full flex items-center justify-end">
              {/* Add your Halloween characters here - using placeholder divs */}
              <div className="relative">
                {/* Bat at the top */}
                <div className="absolute top-[-80px] right-[100px]">
                  <div className="relative w-16 h-8">
                    <Image 
                      src="/bat.png" 
                      alt="Bat"
                      width={64}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Central Cat Character */}
                <div className="relative w-48 h-64">
                  <Image 
                    src="/cat.png" 
                    alt="Cat Character"
                    width={192}
                    height={256}
                    className="object-contain"
                  />
                </div>
                
                {/* Pumpkin */}
                <div className="absolute left-[-60px] bottom-[40px]">
                  <div className="relative w-16 h-16">
                    <Image 
                      src="/pumpkin.png" 
                      alt="Pumpkin"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Voodoo Doll */}
                <div className="absolute right-[-20px] bottom-[20px]">
                  <div className="relative w-20 h-20">
                    <Image 
                      src="/voodoo.png" 
                      alt="Voodoo Doll"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Spider Web */}
                <div className="absolute right-[-60px] top-[-40px]">
                  <div className="relative w-24 h-24">
                    <Image 
                      src="/web.png" 
                      alt="Spider Web"
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Icons */}
      <footer className="absolute bottom-4 left-6">
        <div className="relative w-8 h-8">
          <Image 
            src="/bat-icon.png" 
            alt="Bat Icon"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      </footer>
    </div>
  );
}
