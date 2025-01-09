import {
    useUserStore,
    useProductStore,
    useOrderStore,
  } from "../../state/store";
  import { useQuery } from "@tanstack/react-query";
  import {
    FaUser,
    FaBoxOpen,
    FaClipboardList,
    FaDollarSign,
  } from "react-icons/fa";
  
  export default function () {
    const { getAllUsers } = useUserStore();
    const { getAllProducts } = useProductStore();
    const { getAllOrders } = useOrderStore();
  
    const { data: users } = useQuery({
      queryKey: ["users"],
      queryFn: () => getAllUsers(),
    });
  
    const { data: products } = useQuery({
      queryKey: ["products"],
      queryFn: () => getAllProducts(),
    });
  
    const { data: orders } = useQuery({
      queryKey: ["orders"],
      queryFn: () => getAllOrders(),
    });
  
    let totalRevenue = 0;
  
    const delieveredOrders = orders?.filter((o) => o.status.toLocaleLowerCase() === "delivered"); 
  
    delieveredOrders?.forEach((order) => {
      totalRevenue += order.price;
    });
  
  
    return (
      <div className="flex w-full p-2 mb-4shadow-md justify-evenly md:flex-row md:justify-between">
        <div className="flex flex-col overflow-hidden text-center border-r pl-1 border-gray-500  w-[25%] h-36">
          <h3 className="text-xs font-bold text-center md:font-medium md:text-lg">
            {" "}
            Number of Users
          </h3>
          <p className="text-xs text-center md:text-2xl">{users?.length}</p>
          <FaUser className="text-2xl text-green-500 md:text-4xl" />
        </div>
        <div className="flex flex-col overflow-hidden text-center border-r pl-1 border-gray-500    w-[25%]  h-36">
          <h3 className="text-xs font-bold text-center md:font-medium md:text-lg">
            {" "}
            Number of Products
          </h3>
          <p className="text-xs text-center md:text-2xl">{products?.length}</p>
          <FaBoxOpen className="text-2xl text-blue-500 md:text-4xl" />
        </div>
        <div className="flex flex-col w-[25%] overflow-hidden text-center border-r pl-1 border-gray-500    h-36">
          <h3 className="text-xs font-bold text-center md:font-medium md:text-lg">
            {" "}
            Number of Orders
          </h3>
          <p className="text-xs text-center md:text-2xl">{orders?.length}</p>
          <FaClipboardList className="text-2xl md:text-4xl text-[#FD7E14]" />
        </div>
        <div className="flex flex-col w-[25%] overflow-hidden text-center border-r pl-1 border-gray-500    h-36">
          <h3 className="text-xs font-bold text-center md:font-medium md:text-lg">
            {" "}
            Total Revenue
          </h3>
          <p className="text-sm text-center md:text-2xl">{totalRevenue}</p>
          <FaDollarSign className="text-2xl text-black md:text-4xl" />
        </div>
      </div>
    );
  }
