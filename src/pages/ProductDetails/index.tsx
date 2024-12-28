import ImageOne from "../../assets/mobile-3jpeg.jpg";

export default function () {
    const back = ()=>{
        window.history.back();
    }
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen md:flex-row">
        <div className="relative w-1/2 h-full ">
            <i onClick={back} className="absolute m-2 text-2xl cursor-pointer fa fa-arrow-left"></i>

          <img src={ImageOne} className="object-contain w-full h-full" />
        </div>
        <div className="flex flex-col w-1/2 h-full p-2 justify-evenly">
          <h3 className="text-2xl text-center">Samsung A05s</h3>
          <h3 className="text-lg">Product Description:</h3>
          <p className="text-sm">
            The Samsung Galaxy A05s is a "budget-friendly" smartphone that
            features a large 6.7-inch FHD+ display with a 90Hz screen refresh
            rate, 50MP + 2MP + 2MP triple rear cameras with LED flash, and a
            single 13MP selfie camera. It runs on a Qualcomm Snapdragon 680
            processor with 4GB of RAM, Android 13 OS, and the One UI interface.
            There's also a side-mounted fingerprint scanner, 4G LTE
            connectivity, dual-band Wi-Fi, Dolby ATMOS audio, and 128GB of
            expandable storage up to 1TB. A built-in 5,000mAh battery powers the
            device with support for 25W fast charging technology. It comes in
            two color choices - black and light green.
          </p>
          <h3 className="text-lg">Unit Price:</h3>
          <p className="text-sm">₱6,490.00</p>
          <h3 className="text-lg">Colors Available:</h3>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          </div>

          <h3 className="text-lg">Available Stocks:</h3>
          <p className="text-sm">20 pcs.</p>

          <div className="flex flex-col items-center w-full p-4">
            <div className="flex items-center space-x-2">
              <label className="text-lg font-bold">Qty:</label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  className="px-3 py-1 text-lg text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-l-md"
                  onClick={() => {
                    // Logic to decrement quantity
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-12 text-center border-l border-r border-gray-300 outline-none"
                  value={1} // Replace with your state value
                  onChange={(e) => {
                    // Logic to update quantity
                  }}
                />
                <button
                  className="px-3 py-1 text-lg text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-r-md"
                  onClick={() => {
                    // Logic to increment quantity
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button className="w-full p-2 mt-4 text-white transition-all duration-500 bg-black rounded-md hover:opacity-85">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
