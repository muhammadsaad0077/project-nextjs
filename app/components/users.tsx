import { Search, Plus } from "lucide-react";

const users = [
  { name: "Sophia", image: "https://i.pravatar.cc/40?img=1", online: true },
  { name: "Isabella", image: "https://i.pravatar.cc/40?img=2", online: true },
  { name: "Amelia", image: "https://i.pravatar.cc/40?img=3", online: true },
  { name: "User", image: null, online: false },
  { name: "User", image: null, online: false },
  { name: "User", image: null, online: false },
];

const Users = () => {
  return (
    <div className="p-4 pb-8 pr-6 pl-6 relative width-adjust rounded-lg lg:w-[200%] md:w-[200%] -left-10 max-w-sm mx-auto">
      <div className="">
        <div className="absolute -top-5 left-0 h-[100vh] w-[1px] bg-gray-100"></div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search user..."
            className="w-[103%] px-3 py-2 border bg-gray-100 border-gray-300 rounded-2xl border-none outline-none focus:ring-2 focus:ring-gray-200"
          />
          <Search size={18} className="absolute right-2 top-3 text-gray-700" />
        </div>

        <h2 className="text-lg font-semibold mt-10 mb-3">Por Flekt User</h2>
        <div className="space-y-2">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-3 rounded-lg w-[103%] border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                {user.image ? (
                  <div className="relative">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {user.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
                    )}
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500">👤</span>
                  </div>
                )}
                <span className="font-medium text-sm">{user.name}</span>
              </div>
              <button className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-sm">
                <Plus size={20} className="text-blue-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
