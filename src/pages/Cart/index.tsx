import ImageTwo from "../../assets/mobile-3jpeg.jpg";

export default function () {
  return (
    <>
      <div className="w-full flex items-center h-screen p-2">
        <div className="w-9/12 p-2 h-full rounded-md">
          <h3 className="text-3xl text-left m-1 w-4/5 border-b-4 border-black p-2">
            My Cart
          </h3>
          <div className="w-full h-full overflow-y-auto flex flex-col justify-between p-3">
            <div className="flex items-center w-full h-[15rem] border border-gray-800 rounded-md mb-6 shadow-md">
              <div className="flex items-center justify-center w-1/4 h-full">
                <img
                  src={ImageTwo}
                  className="object-contain w-[8rem] h-[8rem] rounded-full"
                />
              </div>
              <div className="flex flex-col justify-between w-9/12 h-full p-1 cursor-pointer">
                <div className="flex items-center justify-start">
                  <p className="text-[1rem] font-semibold">Samsung A05S</p>
                </div>
                <div className="overflow-hidden  text-left mb-1">
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
                  <p className="text-[1rem] font-medium">
                    Unit Price:<span className="ml-1">6,490.00</span>
                  </p>

                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold">Qty:</p>
                    <button className="p-1 text-sm  w-[4rem]  text-center font-bold text-white bg-red-600 rounded-md">
                      <i className="fa-solid text-[1rem] text-white fa-plus"></i>
                    </button>
                    <p className="mx-4 mt-2 text-[1rem] font-semibold">1</p>
                    <button className="p-1 text-sm w-[4rem]  text-center font-bold text-white bg-green-600 rounded-md">
                      <i className="fa-solid text-[1rem] text-white fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end m-2">
                  <p className="text-[1rem] font-medium">
                    Item Subtotal:<span className="ml-1">6,490.00</span>
                  </p>
                </div>
              </div>
            </div>
         
          </div>
        </div>
        <div className=" w-1/4 rounded-md h-3/4 overflow-hidden p-3 border border-gray-400 shadow-sm">
        <h3 className="text-[1.5rem] w-11/12 p-2 border-b-4 border-black text-center m-2 text-black font-semibold">Order Details</h3>
        <div className="w-full">
            <div className="flex items-center justify-between p-2">
                <p className="text-[1rem] text-black font-semibold">Subtotal:</p>
                <p className="text-[1rem] text-black font-semibold">6,490.00</p>
            </div>
            <div className="flex items-center justify-between p-2">
                <p className="text-[1rem] text-black font-semibold">Unit Quantity:</p>
                <p className="text-[1rem] text-black font-semibold">1</p>
            </div>
            <div className="flex items-center justify-between p-2">
                <p className="text-[1rem] text-black font-semibold">Shipping:</p>
                <p className="text-[1rem] text-black font-semibold">0.00</p>
            </div>
            <div className="flex items-center justify-between p-2">
                <p className="text-[1rem] text-black font-semibold">Total:</p>
                <p className="text-[1rem] text-black font-semibold">6,490.00</p>
            </div>
            <div className="flex items-center justify-center p-2">
                <button className="p-2 w-[12rem] text-center text-white font-semibold bg-red-600 rounded-md">
                Proceed to Checkout
                </button>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}
