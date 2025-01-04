import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../state/store";

export default function () {
  const { cart:CartItems } = useCartStore();
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const signIn = () => {
    navigate("/signin");
  };

  const signUp = () => {
    navigate("/signup");
  };

  const cart = () => {
    navigate("/cart");
  };

  const shop = () => {
    navigate("/shop");  
  }

  return (
    <nav className="w-full h-[3.75rem] border border-gray-300 flex items-center justify-start md:justify-between p-1">
      <div className="items-center hidden md:block">
        <i className="m-2 text-lg fa-solid fa-bag-shopping"></i>
        <h3 className="text-lg font-bold"> IT Shop</h3>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex flex-row items-start justify-start">
          <li
            onClick={home}
             className="m-3 text-xs font-semibold cursor-pointer md:text-sm"
          >
            Home
          </li>
          <li onClick={shop} className="m-3 text-xs font-semibold cursor-pointer md:text-sm">Shop</li>
          <li className="m-3 text-xs font-semibold md:text-sm">About</li>
          <li className="m-3 text-xs font-semibold md:text-sm">Contact Us</li>
        </ul>
      </div>
      <div className="flex items-center justify-between p-1">
        <i
          title="Sign In"
          onClick={signIn}
          className="m-2 text-lg cursor-pointer fa-regular fa-circle-user"
        ></i>
        <i
          title="Sign Up"
          onClick={signUp}
          className="m-2 text-lg cursor-pointer fa-solid fa-right-to-bracket"
        ></i>
        <div className="relative p-2 m-1">
        <i
          title="Cart"
          onClick={cart}
          className="m-2 text-lg cursor-pointer fa-solid fa-cart-shopping"
        >
        </i>
        <p className="absolute w-5 h-5 text-sm text-center text-white bg-red-600 rounded-full top-1 right-1">
          {CartItems?.length}
          </p>
        </div>
      </div>
    </nav>
  );
}
