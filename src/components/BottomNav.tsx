import Link from 'next/link';
import { LayoutDashboard, Receipt, PlusCircle, Settings } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 px-2 z-50">
      <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 active:text-blue-600">
        <LayoutDashboard size={20} />
        <span className="text-[10px] mt-1 font-medium">Dashboard</span>
      </Link>
      <Link href="/transactions" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 active:text-blue-600">
        <Receipt size={20} />
        <span className="text-[10px] mt-1 font-medium">Transactions</span>
      </Link>
      <Link href="/add" className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 active:text-blue-600">
        <PlusCircle size={20} />
        <span className="text-[10px] mt-1 font-medium">Add</span>
      </Link>
      <button className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-blue-600 active:text-blue-600">
        <Settings size={20} />
        <span className="text-[10px] mt-1 font-medium">Settings</span>
      </button>
    </nav>
  );
}
