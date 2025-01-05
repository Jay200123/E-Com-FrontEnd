import { useAuthenticationStore } from "../../state/store";

export default function () {
  const { user } = useAuthenticationStore();

  const randomImage =
    Array.isArray(user?.image) && user.image.length > 0
      ? user.image[Math.floor(Math.random() * user.image.length)]
      : null;

  return (
    <nav className="w-full h-[6rem] flex items-center justify-between px-4 shadow-md bg-white">
      <div className="flex flex-col overflow-hidden">
        <h3 className="text-sm font-semibold md:text-2xl">
          Welcome Back!{" "}
          <span className="ml-1 text-blue-600">{user?.fullname}</span>
        </h3>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300">
          <i className="text-lg fa-solid fa-bell md:text-xl"></i>
        </button>

        <div className="flex items-center gap-3">
          <img
            src={randomImage?.url || "https://via.placeholder.com/40"}
            alt={randomImage?.originalname || "Profile"}
            className="object-cover w-10 h-10 rounded-full"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold">{user?.fullname || "Guest"}</p>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
