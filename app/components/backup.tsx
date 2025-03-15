/* 
Sidebar start
"use client";
import { Home, Search, Gavel, Bell, Mail, User, LogOut, Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen text-black bg-white p-3 pl-4 flex flex-col justify-between">
      {/* Logo */}
      <div className="flex">
        <h1 className="text-2xl font-bolder">FLEKT</h1>
        <button className="p-2 rounded-2xl text-gray-800 ml-24 -mt-1 bg-gray-100">
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="text-gray-800 pl-2 space-y-6 -mt-32">
        <a href="#" className="flex items-center space-x-3">
          <div className="rounded-2xl bg-blue-100 p-2">
          <Home className="text-blue-400" size={22} />
          </div>
          <span className="text-sm">Home</span>
        </a>
        <a href="#" className="flex items-center p-2 space-x-3 hover:text-black">
          <Search className="text-gray-500" size={22} />
          <span className="pl-1 text-sm">Explore</span>
        </a>
        <a href="#" className="flex items-center p-2 space-x-3 hover:text-black">
          <Gavel className="text-gray-500" size={22} />
          <span className="pl-1 text-sm">Auctions</span>
        </a>
        <a href="#" className="flex items-center p-2 space-x-3 hover:text-black">
          <Bell className="text-gray-500" size={22} />
          <span className="pl-1 text-sm">Notifications</span>
        </a>
        <a href="#" className="flex items-center p-2 space-x-3 hover:text-black">
          <Mail className="text-gray-500" size={22} />
          <span className="pl-1 text-sm">Messages</span>
        </a>
        <a href="#" className="flex items-center p-2 space-x-3 hover:text-black">
          <User className="text-gray-500" size={22} />
          <span className="pl-1 text-sm">Profile</span>
        </a>
      </nav>

      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="https://i.pravatar.cc/40" alt="User" className="w-7 h-7 rounded-full" />
          <div>
            <h3 className="text-[12px] font-semibold whitespace-nowrap">Emmanuel Lemelson</h3>
            <p className="text-[10px] text-gray-500">@Emmanuel</p>
          </div>
        </div>
        <button className="ml-11">
          <LogOut size={20} className="text-blue-400 hover:text-blue-600" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


*/ sidebar end



/*   feed start

"use client"
import { Image, Plus, MoreVertical, Moon, Sliders, ChevronUp, ChevronDown, ListFilter } from "lucide-react";

const Feed = () => {
  return (
    <div className="flex flex-col w-[75%] ml-12">
      {/* Heading */}
      <div className="flex justify-evenly gap-[530px]">
        <div>
            <h1 className="text-2xl font-semibold">Home</h1>
        </div>
        <div className="flex gap-8 relative -left-8">
            <div>
               <button className="p-2 rounded-2xl bg-gray-100">
                <Moon size={18} className="text-blue-400" />
              </button>
            </div>
            <div>
              <button className="p-2 rounded-2xl bg-gray-100">
                <ListFilter size={18} className="text-gray-600" />
              </button>
            </div>
        </div>
      </div>
      

      {/* Post Input Box */}
      <div className="bg-white border border-t border-t-gray-200 border-gray-100 rounded-lg mt-4">
        <input
          type="text"
          placeholder="What is happening?!"
          className="w-full p-3 placeholder:text-sm border-b border-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 p-2 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-2xl">
              <Image size={18} className="text-blue-400" />
              </div>
              
              <span className="text-sm">Add Image</span>
            </button>
            <button className="flex items-center space-x-2 p-2 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-2xl">
              <Plus size={18} className="text-blue-500" />
              </div>
              <span className="text-sm">Add Auction</span>
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-400 text-white text-sm rounded-2xl">Send</button>
        </div>
      </div>

      {/* Post */}
      <div className="bg-white border border-gray-100 border-b border-b-gray-200 pb-5 p-2 rounded-lg mt-2">
        {/* Post Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="https://i.pravatar.cc/40" alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="text-sm font-semibold">Emmanuel Lemelson</h3>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
          <button className="bg-gray-100 p-1 rounded-lg">
            <MoreVertical size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Post Content */}
        <div className="mt-3">
          <h2 className="text-[15px] font-semibold">
            The Pinnacle of Luxury: Magnificent Private Estate Nestled In <br />Picturesque Stowe
          </h2>
          <p className="text-gray-600 text-[14px] mt-2">
            Vacations are the golden threads that weave together the tapestry of our lives, and “Eden” (The<br />Lemelson Estate) in Vermont is the canvas where unforgettable memories come to life. Nestled<br />within 28 acres of breathtaking beauty, this maginficinet mountain estate invites you to<br />ambrace adventure and connection.
          </p>
        </div>

    <div className="p-4 rounded-lg max-w-3xl mx-auto">
      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-3 relative -left-3 w-full">
          <img src="https://media.istockphoto.com/id/1368330586/photo/front-porch-and-entrance-to-new-home.jpg?s=612x612&w=0&k=20&c=h13209WqKTjXDnqNbcnQMMJo6evzmvzNeQlClRdL-jk=" alt="House" className="rounded-2xl w-[120px] object-cover h-28" />
          <img src="https://www.brisbanemakeover.com/wp-content/uploads/M3A2544-2-2-1024x683.webp" alt="Villa" className="rounded-2xl w-[120px] object-cover h-28" />
          <img src="https://www.cottagesandbungalowsmag.com/wp-content/uploads/2019/12/Acr11121912107008-962691.jpg" alt="Mansion" className="rounded-2xl w-[120px] object-cover h-28" />
          <img src="https://static.asianpaints.com/content/dam/asian_paints/idea-gallery/regional/Aesthetic-Exterior-Home-Design-Idea.jpg" alt="Modern House" className="rounded-2xl w-[120px] object-cover h-28" />
      </div>
      
      {/* Auction Details */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative font-light mt-4 text-[12px] text-gray-700">
        <p className="relative -left-3">
          <span className="font-semibold">Time left:</span> <br />
          14d 00:13:13
        </p>
        <p className="relative -left-3">
          <span className="font-semibold">Current Bid:</span> <br />
          <span className="text-blue-500">$0</span>
        </p>
        <p className="relative -left-2">
          <span className="font-semibold">Reserve Price:</span> <br />
          <span className="text-blue-500">No Reserve</span>
        </p>
        <p className="relative -left-2">
          <span className="font-semibold">Total Bids:</span> <br />
          0
        </p>
        <p className="relative -left-3">
          <span className="font-semibold">Quantity:</span> <br />
          14
        </p>
        <p className="relative -left-3">
          <span className="font-semibold">Auction Type:</span> <br />
          Standard
        </p>
        <p className="relative -left-2">
          <span className="font-semibold">Check-in:</span> <br />
          <span className="whitespace-nowrap">March 04, 2025, 17:39:00</span>
        </p>
        <p className="relative -left-2">
          <span className="font-semibold">Check-out:</span> <br />
          <span className="whitespace-nowrap">March 18, 2025, 17:39:00</span>
        </p>
      </div>
    </div>
     

        {/* Bid Input */}
    <div className="flex items-center space-x-4">
      
      <div className="flex items-center border border-transparent rounded-full bg-gray-100">
        
        <input
          type="text"
          placeholder="Enter your bid"
          className="w-32 text-center placeholder:text-gray-400 placeholder:text-[13px] py-[6px] bg-transparent outline-none"
        />
        <div className="flex flex-col relative -left-2">
        <button
          className="text-gray-600 hover:text-gray-900"
        >
          <ChevronUp size={13} />
        </button>
        <button
          className="text-gray-600 hover:text-gray-900"
        >
        
          <ChevronDown size={13} />
        </button>
        </div>
      </div>

      {/* Place Bid Button */}
      <button
        className="bg-gray-100 text-gray-800 py-[6px] text-[13px] px-4 rounded-full border border-transparent shadow-sm transition"
      >
        Place Bid
      </button>
    </div>
      </div>
    </div>
  );
};

export default Feed;

          


 
 */    feed end




 /* layout start


 import Feed from "./components/feed";
import Sidebar  from "./components/sidebar";
import Users from "./components/users";

export default function Home() {
  return (
    <div className="flex h-screen bg-white text-gray-900">
    
    <Sidebar />
    
    
    
     
      
      <div className="flex flex-1 p-6 gap-6">
        
        <div className="flex-1">
         <Feed />
        </div>
        
        
        <div className="w-1/4 hidden lg:block">
          <Users />
        </div>
      </div>
   
  </div>
  );
}


 */ layout end



 "use client";
 import {
   Image,
   Plus,
   MoreVertical,
   Moon,
   ListFilter,
   ChevronUp,
   ChevronDown,
 } from "lucide-react";
 
 const Feed = () => {
   return (
     <div className="flex flex-col w-full lg:w-[75%] mt-0 md:mt-6 ml-0 lg:ml-20">
       <div className="flex justify-between items-center flex-wrap">
         <h1 className="text-2xl font-semibold">Home</h1>
         <div className="flex gap-4">
           <button className="p-2 rounded-2xl bg-gray-100">
             <Moon size={18} className="text-blue-400" />
           </button>
           <button className="p-2 rounded-2xl bg-gray-100">
             <ListFilter size={18} className="text-gray-600" />
           </button>
         </div>
       </div>
 
 
       <div className="bg-white border text-[5px] border-gray-100 rounded-lg mt-4 p-4">
         <input
           type="text"
           placeholder="What is happening?!"
           className="w-full p-3 placeholder:text-sm border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
         />
         <div className="flex flex-wrap justify-between items-center mt-3">
           <div className="flex space-x-4">
             <button className="flex items-center space-x-2 p-2 rounded-lg">
               <div className="bg-blue-100 p-2 rounded-2xl">
                 <Image size={16} className="text-blue-400" />
               </div>
               <span className="text-[10px]">Add Image</span>
             </button>
             <button className="flex items-center space-x-2 p-2 rounded-lg">
               <div className="bg-blue-100 p-2 rounded-2xl">
                 <Plus size={16} className="text-blue-500" />
               </div>
               <span className="text-[10px]">Add Auction</span>
             </button>
           </div>
           <button className="px-4 py-2 bg-blue-400 text-white text-[12px] rounded-2xl">
             Send
           </button>
         </div>
       </div>
 
 
       <div className="bg-white border border-gray-100 pb-5 p-4 rounded-lg mt-4">
         <div className="flex justify-between items-center">
           <div className="flex items-center space-x-3">
             <img
               src="https://i.pravatar.cc/40"
               alt="User"
               className="w-10 h-10 rounded-full"
             />
             <div>
               <h3 className="text-[10px] font-semibold">Emmanuel Lemelson</h3>
               <p className="text-xs text-gray-500">1 day ago</p>
             </div>
           </div>
           <button className="bg-gray-100 p-1 rounded-lg">
             <MoreVertical size={20} className="text-gray-600" />
           </button>
         </div>
 
         <div className="mt-3">
           <h2 className="md:text-[15px] text=[11px] font-semibold">
             The Pinnacle of Luxury: Magnificent Private Estate Nestled In
             <br />
             Picturesque Stowe
           </h2>
           <p className="text-gray-600  text-[12px] font-sans mt-2">
             Vacations are the golden threads that weave together the tapestry of
             our lives, and “Eden” (The Lemelson Estate) in Vermont is the canvas
             where unforgettable memories come to
             life. Nestled within 28 acres of breathtaking beauty, this
             maginficinet mountain estate
              invites you to ambrace adventure and connection.
           </p>
         </div>
 
 
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
           {[
             "https://media.istockphoto.com/id/1368330586/photo/front-porch-and-entrance-to-new-home.jpg?s=612x612&w=0&k=20&c=h13209WqKTjXDnqNbcnQMMJo6evzmvzNeQlClRdL-jk=",
             "https://www.brisbanemakeover.com/wp-content/uploads/M3A2544-2-2-1024x683.webp",
             "https://www.cottagesandbungalowsmag.com/wp-content/uploads/2019/12/Acr11121912107008-962691.jpg",
             "https://static.asianpaints.com/content/dam/asian_paints/idea-gallery/regional/Aesthetic-Exterior-Home-Design-Idea.jpg",
           ].map((src, index) => (
             <img
               key={index}
               src={src}
               alt="House"
               className="rounded-2xl w-[110px] object-cover h-[110px]"
             />
           ))}
         </div>
 
 
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-[10px] text-gray-700">
           {[
             { label: "Time left", value: "14d 00:13:13" },
             { label: "Current Bid", value: "$0", highlight: true },
             { label: "Reserve Price", value: "No Reserve", highlight: true },
             { label: "Total Bids", value: "0" },
             { label: "Quantity", value: "14" },
             { label: "Auction Type", value: "Standard" },
             { label: "Check-in", value: "March 04, 2025, 17:39:00" },
             { label: "Check-out", value: "March 18, 2025, 17:39:00" },
           ].map(({ label, value, highlight }, index) => (
             <p key={index} className="whitespace-nowrap">
               <span className="font-semibold">{label}:</span> <br />
               <span className={highlight ? "text-blue-500" : ""}>{value}</span>
             </p>
           ))}
         </div>
 
 
         <div className="flex items-center space-x-4 mt-5">
           <div className="flex items-center border border-transparent rounded-full bg-gray-100">
             <input
               type="text"
               placeholder="Enter your bid"
               className="w-32 text-center placeholder:text-gray-400 placeholder:text-[12px] px-[10px] py-[4px] bg-transparent outline-none"
             />
             <div className="flex flex-col relative -left-2">
               <button className="text-gray-600 hover:text-gray-900">
                 <ChevronUp size={13} />
               </button>
               <button className="text-gray-600 hover:text-gray-900">
                 <ChevronDown size={13} />
               </button>
             </div>
           </div>
 
 
           <button className="bg-gray-100 text-gray-800 py-[3px] text-[12px] px-4 rounded-full border border-transparent shadow-sm transition">
             Place Bid
           </button>
         </div>
       </div>
     </div>
   );
 };
 
 export default Feed;
 