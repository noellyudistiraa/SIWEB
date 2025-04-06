// sidenav.tsx
import Link from 'next/link';
import Image from 'next/image';  
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { shadowsIntoLightTwo, poppins } from '@/app/ui/fonts'; // Pastikan import fonts sudah benar

export default function SideNav() {
  return (
    <div className={`flex h-full flex-col px-3 py-4 md:px-2 bg-[#000000] ${poppins.variable}`}>
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-[#000000] p-4 md:h-40"
        href="/"
      >
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo hantu */}
          <div className="w-16 h-16 mb-2">
            <Image
              src="/Ghost01.png"
              alt="Ghost Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>
          
          {/* Teks Haunter Shop */}
          <h1 className={`${shadowsIntoLightTwo.className} text-2xl text-white`}>
            Haunter Shop
          </h1>
        </div>
      </Link>
      
      {/* Bagian navigasi yang sudah ada */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-[#000000] md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-[#FFFFFF] p-3 text-sm font-medium text-black hover:bg-[#FFF5D7] md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-black" />
            <div className="hidden md:block">Keluar</div>
          </button>
        </form>
      </div>
    </div>
  );
}
