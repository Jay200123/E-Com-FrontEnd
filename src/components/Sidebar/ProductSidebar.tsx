export default function () {
  return (
    <div className="w-[10rem] h-screen bg-gray-700 text-white flex flex-col justify-between items-center">
      <h3 className="text-3xl font-bold text-center">IT Shop</h3>

      <ul className="flex flex-col space-y-4 ">
        <li className="text-left">Price</li>
        <li className="text-left">Brand</li>
        <li className="text-left">Features</li>
        <li className="text-left">Rating</li>
        <li className="text-left">Availability</li>
      </ul>

      <div className="mb-4">
        <button className="px-4 py-2 text-sm font-semibold bg-gray-600 rounded-md hover:bg-gray-500">
          Back
        </button>
      </div>
    </div>
  );
}
