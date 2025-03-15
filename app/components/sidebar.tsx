"use client";
import {
  Home,
  Search,
  Gavel,
  Bell,
  Mail,
  User,
  LogOut,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 border-r border-gray-100 h-screen bg-white text-black p-4 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">FLEKT</h1>
        <button className="p-2 relative -left-2 rounded-2xl bg-gray-100 text-gray-800 md:inline-block hidden">
          <Menu size={20} />
        </button>
      </div>

      <nav className="md:-mt-16 side-adjust -mt-72 pl-2 space-y-6">
        {[
          { icon: Home, text: "Home" },
          { icon: Search, text: "Explore" },
          { icon: Gavel, text: "Auctions" },
          { icon: Bell, text: "Notifications" },
          { icon: Mail, text: "Messages" },
          { icon: User, text: "Profile" },
        ].map(({ icon: Icon, text }, index) => (
          <div key={index}>
            {Icon === Home ? (
              <a
                href="#"
                className="flex items-center space-x-3 p-2 relative -left-2 hover:text-black"
              >
                <span className="absolute -left-4 h-8 w-1 bg-blue-500 rounded"></span>

                <div className="rounded-2xl bg-blue-100 p-2 flex">
                  <Home className="text-blue-400" size={22} />
                </div>
                <span className="text-sm -ml-1">Home</span>
              </a>
            ) : (
              <a
                href="#"
                className={`flex items-center space-x-3 p-2  hover:text-black ${
                  (index + 1) % 3 === 0 ? "border-b border-b-gray-100 pb-4" : ""
                }`}
              >
                <Icon className="text-gray-500" size={22} />
                <span className="text-sm">{text}</span>
              </a>
            )}
          </div>
        ))}
      </nav>

      <div className="flex border-t border-gray-100 pt-2 items-center justify-between mt-8">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-7 h-7 rounded-full"
          />
          <div>
            <h3 className="text-[12px] font-semibold">Emmanuel Lemelson</h3>
            <p className="text-[10px] text-gray-500">@Emmanuel</p>
          </div>
        </div>
        <button>
          <LogOut size={20} className="text-blue-400 hover:text-blue-600" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
