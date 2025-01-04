import {
  useAuthenticationStore,
  useUserStore,
  useOrderStore,
} from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../interface";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function () {
  const navigate = useNavigate();

  const { user } = useAuthenticationStore();
  const { getUserById } = useUserStore();
  const { getAllOrders } = useOrderStore();

  const [filter, setFilter] = useState("Processing");

  const setFilterValue = (value: string) => {
    setFilter(value);
  };

  const { data } = useQuery<User>({
    queryKey: ["user", user?._id],
    queryFn: () => getUserById(user?._id!),
    enabled: !!user?._id,
  });

  const { data: orders } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });

  const userOrders = orders?.filter(
    (o) =>
      o?.user.includes(user?._id.toString() || "") && o?.status.includes(filter)
  );

  const editProfile = () => {
    navigate("/user/edit/profile");
  };


  const randomImage =
    Array.isArray(data?.image) && data.image.length > 0
      ? data.image[Math.floor(Math.random() * data.image.length)]
      : null;

  const productDetails = userOrders?.flatMap((o) =>
    o.products.map((p) => ({
      id: p?.product?._id,
      name: p?.product?.product_name,
      price: p?.product?.price,
      description: p?.product?.description,
      image: p?.product?.image,
      quantity: p?.quantity,
      date_placed: o.date_placed,
      status: o.status,
      order_id: o._id,  
    }))
  );

  return (
    <>
      <div className="flex flex-col items-center w-full h-screen md:flex-row">
        <div className="w-full h-full p-2 md:w-1/2">
          <div className="flex items-center justify-start w-full rounded-sm shadow-md h-1/3">
            <div className="w-1/3 h-full p-2">
              <img
                src={randomImage?.url}
                alt={randomImage?.originalname}
                className="object-cover w-20 h-20 rounded-full md:w-40 md:h-40"
              />
            </div>
            <div className="w-2/3 h-full p-2 overflow-hidden border border-white">
              <h3 className="text-[1rem] font-medium md:text-[1.5rem] md:font-bold">
                Welcome, {data?.fullname}
              </h3>
              <p className="text-[1rem]">{data?.email}</p>
              <p className="text-[1rem]">{data?.contact_number}</p>
              <div className="flex justify-between w-full">
                <button
                  onClick={() => setFilterValue("Processing")}
                  className={`p-1 text-sm m-1 w-[6rem] rounded-md border text-center flex flex-col items-center ${
                    filter === "Processing"
                      ? "bg-white text-orange-400 border-orange-400"
                      : "bg-orange-400 text-white border-white"
                  }`}
                >
                  <i className="block fa-solid fa-hourglass-half"></i>
                  Pending
                </button>
                <button
                  onClick={() => setFilterValue("Packed")}
                  className={`p-1 text-sm m-1 w-[6rem] border rounded-md text-center flex flex-col items-center ${
                    filter === "Packed"
                      ? "bg-white text-yellow-300 border-yellow-300"
                      : "bg-yellow-300 text-white border-yellow-300"
                  }`}
                >
                  <i className="block fa-solid fa-box"></i>
                  Packed
                </button>
                <button
                  onClick={() => setFilterValue("Shipped")}
                  className={`p-1 text-sm m-1 w-[6rem] rounded-md border text-center flex flex-col items-center ${
                    filter === "Shipped"
                      ? "bg-white text-blue-400 border-blue-400"
                      : "bg-blue-400 text-white border-white"
                  }`}
                >
                  <i className="block fa-solid fa-truck"></i>
                  Shipped
                </button>
                <button
                  onClick={() => setFilterValue("Delivered")}
                  className={`p-1 text-sm m-1 w-[6rem] rounded-md border text-center flex flex-col items-center ${
                    filter === "Delivered"
                      ? "bg-white text-green-400 border-green-400"
                      : "bg-green-400 text-white border-white"
                  }`}
                >
                  <i className="block fa-solid fa-truck-fast"></i>
                  Delivered
                </button>
                <button
                  onClick={() => setFilterValue("Cancelled")}
                  className={`p-1 text-sm m-1 w-[6rem] rounded-md border text-center flex flex-col items-center ${
                    filter === "Cancelled"
                      ? "bg-white text-red-500 border-red-500"
                      : "bg-red-500 text-white border-white"
                  }`}
                >
                  <i className="block fa-solid fa-xmark"></i>
                  Cancelled
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col w-full p-2 h-2/3">
            <button
              onClick={editProfile}
              className="absolute p-2 text-white bg-blue-700 rounded-sm bottom-3 right-3 md:text-lg w-[6.25rem]"
            >
              Edit
            </button>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-medium md:text-lg md:font-bold">
                  Full Name:
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder={data?.fullname}
                  className="overflow-hidden placeholder:text-black p-1 mb-4 text-[1rem] border-b border-gray-300 rounded-sm"
                />
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-medium md:text-lg md:font-bold">
                  Contact Number:
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder={data?.contact_number}
                  className="overflow-hidden placeholder:text-black p-1 mb-4 text-[1rem] border-b border-gray-300 rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-medium md:text-lg md:font-bold">
                  Address:
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder={data?.address}
                  className="overflow-hidden placeholder:text-black first-letter:p-1 mb-4 text-[1rem] border-b border-gray-300 rounded-sm"
                />
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-medium md:text-lg md:font-bold">
                  City:
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder={data?.city}
                  className="overflow-hidden placeholder:text-black p-1 mb-4 text-[1rem] border-b border-gray-300 rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-medium md:text-lg md:font-bold">
                  Email:
                </label>
                <input
                  type="text"
                  readOnly
                  placeholder={data?.email}
                  className="overflow-hidden placeholder:text-black p-1 mb-4 text-[1rem] border-b border-gray-300 rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full border md:w-1/2 ">
          <h3 className="text-[1rem] m-1 font-medium md:text-2xl p-2 md:font-bold">
           {" "}
            {filter == "Processing" ? "Pending" : filter} Orders (
            {productDetails?.length})
          </h3>
          <h3 className="font-bold text-[1rem] text-center md:text-[1.5rem] md:font-bold">
            _________________________________________________________
          </h3>
          <div className="flex flex-col w-full h-full p-1 overflow-y-auto max-h-[30rem]">
            {productDetails?.map((p, index) => (
              <div
              onClick={() => navigate(`/user/order/detail/${p.order_id}`)}  
                key={index}
                className="flex items-center w-full h-[12rem] border border-gray-800 rounded-md m-1 shadow-md"
              >
                <div className="flex items-center justify-center w-1/4 h-full ">
                  {p?.image?.length > 1 ? (
                    <img
                      className="object-contain w-[7rem] h-[7rem] rounded-full"
                      src={
                        p?.image[Math.floor(Math.random() * p?.image.length)]
                          ?.url
                      }
                      alt="test image"
                    />
                  ) : (
                    <img
                      className="object-contain w-[7rem] h-[7rem] rounded-full"
                      src={p?.image[0]?.url || ""}
                      alt="image"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between w-9/12 h-full p-1 cursor-pointer ">
                  <div className="flex items-center justify-between">
                    <p className="text-[1rem] font-semibold">{p.name} </p>
                    <p className="text-[1rem]">x{p.quantity} </p>
                  </div>
                  <div className="overflow-hidden text-left">
                    <p className="text-sm line-clamp-3">{p.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[1rem] font-semibold">
                      Date Placed:{" "}
                      {
                        new Date(p.date_placed.toLocaleString())
                          .toISOString()
                          .split("T")[0]
                      }
                    </p>
                    <p className="text-[1rem] font-bold">₱{p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
