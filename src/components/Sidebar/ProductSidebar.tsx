export default function () {
  return (
    <div className="w-[10rem] h-screen bg-gray-700 text-white hidden md:flex flex-col justify-between items-center">
      <div className="flex flex-col justify-center p-1">
        <h3 className="text-3xl font-bold text-center">IT Shop</h3>
        <div className="relative flex justify-center">
          <i className="text-3xl text-center cursor-pointer fa-solid fa-cart-shopping"></i>
          <p className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-sm text-white bg-red-700 rounded-full">
            0
          </p>
        </div>
      </div>

      <ul className="flex flex-col w-full space-y-4">
        <li className="text-left">Price</li>
        <li className="text-left">Brand</li>
        <li className="text-left">Features</li>
        <li className="text-left">Rating</li>
        <li className="text-left">Availability</li>
      </ul>

      <div className="mb-4">
        <button className="px-4 py-2 text-sm font-semibold bg-gray-600 rounded-md hover:bg-gray-500">
          <i className="mr-1 fa fa-arrow-left"></i> Back
        </button>
      </div>
    </div>
  );
}
