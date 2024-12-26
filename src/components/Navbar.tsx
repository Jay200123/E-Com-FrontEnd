export default function () {
  return (
    <nav className="w-full h-[3.75rem] shadow-lg flex items-center justify-between p-1">
      <div className="flex items-center">
        <i className="fa-solid fa-bag-shopping text-lg m-2"></i>
        <h3 className="text-lg font-bold"> IT Shop</h3>
      </div>
      <ul className="flex items-center p-1">
        <li className="text-sm m-2 font-semibold">Home</li>
        <li className="text-sm m-2 font-semibold">Shop</li>
        <li className="text-sm m-2 font-semibold">Product</li>
        <li className="text-sm m-2 font-semibold">Contact Us</li>
      </ul>
      <div className="p-1">
        <i className="fa-solid fa-magnifying-glass text-lg m-2"></i>
        <i className="fa-regular fa-circle-user text-lg m-2"></i>
        <i className="fa-solid fa-cart-shopping text-lg m-2"></i>
      </div>
    </nav>
  );
}
