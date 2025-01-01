import ImageTwo from "../../assets/mobile-3jpeg.jpg";
import { useAuthenticationStore, useUserStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../interface";

export default function () {
  const { user } = useAuthenticationStore();
  const { getUserById } = useUserStore();

  const { data } = useQuery<User>({
    queryKey: ["user", user?._id],
    queryFn: () => getUserById(user?._id!),
    enabled: !!user?._id,
  });

  const randomImage =
    Array.isArray(data?.image) && data.image.length > 0
      ? data.image[Math.floor(Math.random() * data.image.length)]
      : null;

  return (
    <>
      <div className="flex flex-col items-center w-full h-screen md:flex-row">
        <div className="w-full h-full p-2 md:w-1/2">
          <div className="flex items-center justify-start w-full rounded-sm shadow-md h-1/3">
            <div className="w-1/3 h-full p-2">
              <img
                src={randomImage?.url}
                alt={randomImage?.originalname}
                className="w-20 h-20 rounded-full md:w-40 md:h-40"
              />
            </div>
            <div className="w-2/3 h-full p-2 overflow-hidden border border-white">
              <h3 className="text-[1rem] font-medium md:text-[1.5rem] md:font-bold">
                Welcome, {data?.fullname}
              </h3>
              <p className="text-[1rem]">{data?.email}</p>
              <p className="text-[1rem]">{data?.contact_number}</p>
              <div className="flex justify-between w-full p-2">
                <button className="p-2 w-[6rem] rounded-md border text-center bg-yellow-300 text-white border-white">
                  Packed
                </button>
                <button className="p-2 w-[6rem] rounded-md border text-center bg-blue-400 text-white border-white">
                  Shipped
                </button>
                <button className="p-2 w-[6rem] rounded-md border text-center bg-green-400 text-white border-white">
                  Delivered
                </button>
                <button className="p-2 w-[6rem] rounded-md border text-center bg-red-500 text-white border-white">
                  Cancelled
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col w-full p-2 h-2/3">
            <button className="absolute p-2 text-white bg-blue-700 rounded-sm bottom-3 right-3 md:text-lg w-[6.25rem]">
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
            Pending Orders (1)
          </h3>
          <h3 className="font-bold text-[1rem] text-center md:text-[1.5rem] md:font-bold">
            _________________________________________________________
          </h3>
          <div className="flex flex-col w-full h-full p-2 overflow-y-auto">
            <div className="flex items-center w-full h-[12rem] border border-gray-800 rounded-md mb-4 shadow-md">
              <div className="flex items-center justify-center w-1/4 h-full ">
                <img
                  src={ImageTwo}
                  className="object-contain w-[7rem] h-[7rem] rounded-full"
                />
              </div>
              <div className="flex flex-col justify-between w-9/12 h-full p-1 cursor-pointer ">
                <div className="flex items-center justify-between">
                  <p className="text-[1rem] font-semibold">Samsung A05S </p>
                  <p className="text-[1rem]">Pending </p>
                </div>
                <div className="overflow-hidden text-left">
                  <p className="text-sm line-clamp-3">
                    The Samsung Galaxy A05s is a "budget-friendly" smartphone
                    that features a large 6.7-inch FHD+ display with a 90Hz
                    screen refresh rate, 50MP + 2MP + 2MP triple rear cameras
                    with LED flash, and a single 13MP selfie camera. It runs on
                    a Qualcomm Snapdragon 680 processor with 4GB of RAM, Android
                    13 OS, and the One UI interface. There's also a side-mounted
                    fingerprint scanner, 4G LTE connectivity, dual-band Wi-Fi,
                    Dolby ATMOS audio, and 128GB of expandable storage up to
                    1TB. A built-in 5,000mAh battery powers the device with
                    support for 25W fast charging technology. It comes in two
                    color choices - black and light green.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[1rem] font-semibold">
                    Date Placed: 12-29-2024
                  </p>
                  <p className="text-[1rem] font-bold">6,490.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
