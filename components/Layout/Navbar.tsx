import { HiMenuAlt4 } from 'react-icons/hi';
import Image from 'next/image';
import Logo from '../../public/logo.png';

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-between">
      <Image
        className="bg-slate-700 cursor-pointer"
        src={Logo}
        alt="logo"
        width={240}
        height={56}
      />
      <HiMenuAlt4 size={40} color="green" className="cursor-pointer" />
    </nav>
  );
}
