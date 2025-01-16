import { useNavigate } from "react-router-dom";
import { useAuthenticationStore } from "../../state/store";
import { toast } from "react-toastify";

export default function () {
  const navigate = useNavigate();
  const { logout } = useAuthenticationStore();

  const users = () => {
    navigate("/users/table");
  };

  const products = () => {
    navigate("/products/table");
  }

  const dashboard = () => {
    navigate("/admin/dashboard");
  }

  const orders = ()=>{
    navigate("/orders/table");
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signin");
      toast.success("Successfully Log Out");
    } catch (error) {
      toast.error("Error Logging Out");
    }
  };

  return (
    <div className="flex-col items-center justify-between hidden w-full h-screen text-black border bg-slate-50 border-l-gray-500 md:flex">
      <div className="flex flex-col justify-center p-1">
        <h3 className="text-2xl font-bold text-gray-700">IT Shop</h3>
      </div>
      <div className="flex flex-col w-full space-y-4 p-[2px]">
        <ul>
          <li onClick={dashboard} className="text-gray-700 cursor-pointer text-[1rem] font-medium mb-4">
            <i className="mr-3 fa-solid fa-chart-simple"></i>Overview
          </li>
          <li
            onClick={users}
            className="text-gray-700 cursor-pointer text-[1rem] font-medium mb-4"
          >
            <i className="mr-3 fa-solid fa-user"></i>Users
          </li>

          <li onClick={products} className="text-gray-700 cursor-pointer text-[1rem] font-medium mb-4">
            <i className="mr-3 fa-solid fa-mobile"></i>Products
          </li>
          <li onClick={orders} className="text-gray-700 cursor-pointer text-[1rem] font-medium mb-4">
            <i className="mr-3 fa-solid fa-cart-shopping"></i>Orders
          </li>
        </ul>
      </div>

      <div className="w-full mb-1">
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-[1rem font-semibold text-gray-700"
        >
          <i className="fa-solid fa-right-from-bracket"></i> Log Out
        </button>
      </div>
    </div>
  );
}
