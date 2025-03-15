"use client";
import { useState } from "react";
import Feed from "./components/feed";
import Sidebar from "./components/sidebar";
import Users from "./components/users";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-white text-gray-900">
      {/* Sidebar for larger screens */}

      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar Toggle for Mobile */}
      {!isSidebarOpen && (
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="absolute top-3 left-24 md:hidden p-2 rounded-md z-50"
        >
          ☰
        </button>
      )}
      {/* Responsive Sidebar */}

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-white z-40 p-4 shadow-lg md:hidden">
          <Sidebar />
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-xl"
          >
            ✕
          </button>
        </div>
      )}

      <div className="flex flex-1 flex-col md:flex-row p-4 gap-6 w-full">
        {/* Feed (Takes full width on small screens) */}

        <div className="w-full md:w-3/4 lg:w-2/3">
          <Feed />
        </div>

        {/* Users section (Visible only on large screens) */}

        <div className="hidden lg:block w-1/4">
          <Users />
        </div>
      </div>
    </div>
  );
}
