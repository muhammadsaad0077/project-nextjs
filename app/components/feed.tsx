"use client";
import {
  Image,
  Plus,
  MoreVertical,
  Moon,
  ListFilter,
  ChevronUp,
  ChevronDown,
  Annoyed,
} from "lucide-react";

const Feed = () => {
  return (
    <div className="flex flex-col w-full lg:w-[83%] mt-0 md:mt-4 ml-0 lg:ml-[56px]">
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

      <div className="bg-white border text-[4px] border-gray-100 rounded-lg mt-4 p-2">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="What is happening?!"
            className="w-full p-3 text-[12px] rounded-md placeholder:text-sm border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button>
            <Annoyed size={18} />
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-3">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 p-2 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <Image size={16} className="text-blue-400" />
              </div>
              <span className="text-[10px] font-semibold">Add Image</span>
            </button>
            <button className="flex items-center space-x-2 p-2 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-2xl">
                <Plus size={16} className="text-blue-500" />
              </div>
              <span className="text-[10px] font-semibold">Add Auction</span>
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-400 text-white text-[12px] rounded-2xl">
            Send
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-100 pb-5 p-3 rounded-lg mt-3">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pravatar.cc/40"
                alt="User"
                className="w-8 h-8 rounded-full"
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
            <h2 className="md:text-[16px] tracking-[1px] text-[11px]">
              The Pinnacle of Luxury: Magnificent Private Estate Nestled In
              <br />
              Picturesque Stowe
            </h2>
            <p className="text-gray-600  text-[15px] font-sans mt-2">
              Vacations are the golden threads that weave together the tapestry
              of our lives, and “Eden” (The Lemelson Estate) in Vermont is the
              canvas where unforgettable memories come to life. Nestled
              <br /> within 28 acres of breathtaking beauty, this maginficinet
              mountain estate invites you to
              <br /> ambrace adventure and connection.
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
                className="rounded-2xl w-[154px] object-cover h-[118px]"
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
                <span className={highlight ? "text-blue-500" : ""}>
                  {value}
                </span>
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
    </div>
  );
};

export default Feed;
