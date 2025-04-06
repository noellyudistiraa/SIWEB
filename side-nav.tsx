// sidenav.tsx
import Link from 'next/link';
import Image from 'next/image';  
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { shadowsIntoLightTwo, poppins } from '@/app/ui/fonts'; // Import fonts

export default function SideNav() {
  return (
    <div className={`flex h-full flex-col px-3 py-4 md:px-2 bg-[#1a1a2e] ${poppins.variable}`}>
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-[#16213e] p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          {/* Menggunakan font Shadows Into Light Two */}
          <h1 className={`${shadowsIntoLightTwo.className} text-2xl md:text-3xl`}>Haunter Shop</h1>
          
          {/* Gambar logo */}
          <Image
            src="/logo-haunter.png"
            alt="Haunter Shop Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-[#0f3460] md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-[#0f3460] p-3 text-sm font-medium text-white hover:bg-red-700 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-white" />
            <div className="hidden md:block">Keluar</div>
          </button>
        </form>
      </div>
    </div>
  );
}
