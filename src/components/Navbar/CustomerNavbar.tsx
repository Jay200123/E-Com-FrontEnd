import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthenticationStore, useCartStore } from "../../state/store";

export default function () {
  const navigate = useNavigate();
  const { cart: CartItems } = useCartStore(); 
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

  const shop = () => {  
    navigate("/users/shop");
  }

  return (
    <nav className="w-full overflow-hidden h-[3.75rem] border border-gray-300 flex items-center justify-start md:justify-between p-1">
      <div className="items-center hidden md:block">
        <i className="m-2 text-xs md:text-sm fa-solid fa-bag-shopping"></i>
        <h3 className="text-xs font-bold md:text-sm"> IT Shop</h3>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex flex-row items-start justify-start">
          <li
            onClick={home}
            className="m-3 text-xs font-semibold cursor-pointer md:text-sm"
          >
            Home
          </li>
          <li onClick={shop}
           className="m-3 text-xs font-semibold cursor-pointer md:text-sm"
           >Shop</li>
          <li className="m-3 text-xs font-semibold cursor-pointer md:text-sm">About</li>
          <li className="m-3 text-xs font-semibold cursor-pointer md:text-sm">Contact Us</li>
        </ul>
      </div>
      <div className="flex items-center justify-between p-1">
        <i
          title="User Profile"
          onClick={profile}
          className="m-2 text-xs md:text-[1rem] cursor-pointer fa-regular fa-circle-user"
        ></i>
        <div className="relative p-1">
          <i
            title="Cart"
            onClick={cart}
            className="m-2 text-xs md:text-[1rem]  cursor-pointer fa-solid fa-cart-shopping"
          ></i>
          <p className="absolute top-0 right-0 w-5 h-5 p-[1px] text-sm text-center text-white bg-red-600 rounded-full">
            {CartItems?.length}
          </p>
        </div>
        <i
          title="Logout"
          onClick={handleLogout}
          className="m-2 text-xs md:text-[1rem] cursor-pointer fa-solid fa-right-to-bracket"
        ></i>
      </div>
    </nav>
  );
}
