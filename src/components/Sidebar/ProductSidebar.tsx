import { useState, useEffect } from "react";
import { useFilterStore } from "../../state/filter";

export default function () {
  const { setFilter } = useFilterStore();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const brands = ["Samsung", "Apple", "Nokia", "Sony", "LG", "Motorola"];

  useEffect(() => {
    setFilter(name, Number(price), selectedBrand);
  }, [price, selectedBrand, setFilter]);


  const back = () => {
    window.history.back();
  };
  return (
    <div className="flex-col items-center justify-between hidden text-black border w-fullh-screen bg-slate-50 border-l-gray-500 md:flex">
      <div className="flex flex-col justify-center p-1">
        <h3 className="text-3xl font-bold text-center">IT Shop</h3>
        <div className="flex items-center justify-center">
          <i className="fa fa-search"></i>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-1 border border-gray-500 rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col w-full space-y-4 p-[2px]">
        <h3 className="text-[1rem] text-center">Price Range</h3>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-600 rounded-md"
        />

        <h3 className="text-[1rem] text-center">Select Brand</h3>

        <select
          name="brand"
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
          className="w-full text-base border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[2.5rem]"
        >
          <option value="" disabled>
            Select a Brand
          </option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <button
          onClick={back}
          className="px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-500"
        >
          <i className="mr-1 fa fa-arrow-left"></i> Back
        </button>
      </div>
    </div>
  );
}
