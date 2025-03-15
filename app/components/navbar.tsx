"use client"
import { Search, Moon, Sun, Sliders } from "lucide-react";

const Navbar = () => {

  return (
    <nav className="flex justify-between items-center bg-white p-4">
      

      {/* Right-side icons */}
      <div className="flex items-center space-x-4">
        {/* Dark mode toggle */}
        <button className="p-2 rounded-md bg-gray-100">
          <Moon size={22} className="text-gray-600" />
        </button>

        {/* Filter Button */}
        <button className="p-2 rounded-md bg-gray-100">
          <Sliders size={22} className="text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
