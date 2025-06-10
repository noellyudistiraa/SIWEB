'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Get the role from cookies
    const cookieRole = document.cookie
  .split('; ')
  .find(row => row.startsWith('role='));
const role = cookieRole?.split('=')[1];


    // Set profile information based on role
    if (role === 'admin') {
      setName('Admin User');
      setEmail('admin123@example.com');
    } else if (role === 'user') {
      setName('Regular User');
      setEmail('user123@example.com');
    }
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    alert('Profil berhasil disimpan!');
  };

  const handleLogout = () => {
    // Simulate logout (in real app, this would clear user session)
    router.push('/login');
    alert('Anda telah logout!');
  };

  const handleCancel = () => {
    // Reset form to original values
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    setShowPasswordModal(true);
  };

  return (
    <div className="min-h-screen w-full relative bg-stone-950">
      <div className="w-10 h-12 left-[606.67px] top-[524px] absolute bg-neutral-700" />
      <div className="w-[1345px] h-[841px] left-[348px] top-[162px] absolute opacity-95 bg-zinc-950 rounded-[20px]" />
      <div className="left-[387px] top-[195px] absolute justify-start text-white text-5xl font-normal font-['Shadows_Into_Light_Two']">Informasi Profil</div>

      {/* Name Input */}
      <div className="w-[1219px] h-16 left-[409px] top-[331px] absolute bg-neutral-700 rounded-xl border-4 border-black">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-full bg-transparent text-white text-4xl font-normal font-['Shadows_Into_Light_Two'] px-6 outline-none"
          placeholder="Nama"
        />
      </div>

      {/* Email Input */}
      <div className="w-[1219px] h-16 left-[409px] top-[461px] absolute bg-neutral-700 rounded-xl border-4 border-black">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-full bg-transparent text-white text-4xl font-normal font-['Shadows_Into_Light_Two'] px-6 outline-none"
          placeholder="Email"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-[558px] h-16 left-[443px] top-[631px] absolute bg-lime-400 rounded-xl border-4 border-black hover:bg-lime-500 transition-colors"
      >
        <div className="text-white text-4xl font-normal font-['Shadows_Into_Light_Two']">Simpan</div>
      </button>

      {/* Cancel Button */}
      <button
        onClick={handleCancel}
        className="w-[558px] h-16 left-[1025px] top-[631px] absolute bg-orange-500 rounded-xl border-4 border-black hover:bg-orange-600 transition-colors"
      >
        <div className="text-white text-4xl font-normal font-['Shadows_Into_Light_Two']">Cancel</div>
      </button>

      {/* Change Password Button */}
      <button
        onClick={handleChangePassword}
        className="w-[558px] h-16 left-[440px] top-[728px] absolute bg-neutral-700 rounded-xl border-4 border-black hover:bg-neutral-600 transition-colors"
      >
        <div className="text-white text-4xl font-normal font-['Shadows_Into_Light_Two'] ">
          <Link href="/login/reset-password">Ubah Password</Link>
        </div>
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-[558px] h-16 left-[1025px] top-[731px] absolute bg-red-500 rounded-xl border-4 border-black hover:bg-red-600 transition-colors"
      >
        <div className="text-white text-4xl font-normal font-['Shadows_Into_Light_Two']">Logout</div>
      </button>
    </div>
  );
}
