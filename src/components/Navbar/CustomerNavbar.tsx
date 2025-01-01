import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthenticationStore } from "../../state/store";

export default function () {
  const navigate = useNavigate();
  const { logout } = useAuthenticationStore();

  const home = () => {
    navigate("/users");
  };

  const profile = () => {
    navigate("/user/profile");
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
      toast.success("Successfully Log Out");
    } catch (error) {
      toast.error("Error Logging Out");
    }
  };

  const cart = () => {
    navigate("/user/cart");
  };

  return (
    <nav className="w-full h-[3.75rem] border border-gray-300 flex items-center justify-between p-1">
      <div className="flex items-center">
        <i className="m-2 text-lg fa-solid fa-bag-shopping"></i>
        <h3 className="text-lg font-bold"> IT Shop</h3>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex flex-row items-start justify-start">
          <li
            onClick={home}
            className="m-3 text-sm font-semibold cursor-pointer"
          >
            Home
          </li>
          <li className="m-3 text-sm font-semibold">Shop</li>
          <li className="m-3 text-sm font-semibold">About</li>
          <li className="m-3 text-sm font-semibold">Contact Us</li>
        </ul>
      </div>
      <div className="p-1">
        <i className="m-2 text-lg fa-solid fa-magnifying-glass"></i>
        <i
          title="User Profile"
          onClick={profile}
          className="m-2 text-lg cursor-pointer fa-regular fa-circle-user"
        ></i>
        <i
          title="Cart"
          onClick={cart}
          className="m-2 text-lg cursor-pointer fa-solid fa-cart-shopping"
        ></i>
        <i
          title="Logout"
          onClick={handleLogout}
          className="m-2 text-lg cursor-pointer fa-solid fa-right-to-bracket"
        ></i>
      </div>
    </nav>
  );
}
