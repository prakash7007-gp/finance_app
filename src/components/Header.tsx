import { Bell, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 gap-4">
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md">
        <Search size={18} className="text-gray-500 shrink-0" />
        <input 
          type="text" 
          placeholder="Search transactions..." 
          className="bg-transparent border-none outline-none ml-2 w-full text-sm text-gray-700"
        />
      </div>
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-gray-200">
          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold shrink-0">
            <User size={18} />
          </div>
          <div className="text-sm hidden sm:block">
            <p className="font-medium text-gray-700">John Doe</p>
            <p className="text-gray-500 text-xs">Premium User</p>
          </div>
        </div>
      </div>
    </header>
  );
}
