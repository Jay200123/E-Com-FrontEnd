import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useProductStore, useCartStore } from "../../state/store";
import { Product } from "../../interface";
import { useState } from "react";

export default function () {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  const { getAllProducts, getProductById } = useProductStore();
  const { addProduct } = useCartStore();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const { data } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });

  const filteredProducts = products?.filter((p) =>
    p?.product_name?.toLowerCase() === (data?.product_name || "").toLowerCase()
  );


  const productColors = filteredProducts?.map((p) => p?.color?.toLowerCase());

  const back = () => {
    window.history.back();
  };

  return (
    <>
      <div className="flex flex-col items-center overflow-x-auto w-full h-full md:flex-row">
        <div className="relative w-1/2 h-full ">
          <i
            onClick={back}
            className="absolute m-2 text-2xl cursor-pointer fa fa-arrow-left"
          ></i>

          {data?.image && data?.image?.length > 1 ? (
            <img
              className="object-contain w-full h-full"
              src={
                data?.image[Math.floor(Math.random() * data?.image.length)]?.url
              }
              alt="test image"
            />
          ) : (
            <img
              className="object-contain w-full h-full"
              src={data?.image[0]?.url || ""}
              alt="image"
            />
          )}
        </div>
        <div className="flex flex-col w-1/2 h-full p-2 justify-evenly">
          <h3 className="text-2xl text-center">{data?.product_name}</h3>
          <h3 className="text-lg">Product Description:</h3>
          <p className="text-sm">{data?.description}</p>
          <h3 className="text-lg">Unit Price:</h3>
          <p className="text-sm">₱{data?.price}</p>
          <h3 className="text-lg">Colors Available:</h3>
          <div className="flex space-x-4">
            {productColors?.map((color, index) => (
              <div
                key={`${color}-${index}`}
                className="w-8 h-8 border border-black rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>

          <h3 className="text-lg">Available Stocks:</h3>
          <p className="text-sm">{data?.quantity} pcs</p>

          <div className="flex flex-col items-center w-full p-4">
            <div className="flex items-center space-x-2">
              <label className="text-lg font-bold">Qty:</label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  className="px-3 py-1 text-lg text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-l-md"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  readOnly
                  className="w-12 text-center border-l border-r border-gray-300 outline-none"
                  value={quantity}
                />
                <button
                  className="px-3 py-1 text-lg text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-r-md"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
            </div>
            {data && (
              <button
                onClick={() => addProduct(data, quantity)}
                className="w-full p-2 mt-4 text-white transition-all duration-500 bg-black rounded-md hover:opacity-85"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
