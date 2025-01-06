import {
  useProductStore,
  useCartStore,
  useFilterStore,
} from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function () {
  const navigate = useNavigate();
  const { products, getAllMobiles } = useProductStore();
  const { price, name } = useFilterStore();
  const { addProduct } = useCartStore();

  useQuery({
    queryKey: ["products"],
    queryFn: getAllMobiles,
  });

  const filteredProducts = products?.filter((p) => {
    const priceMatch = price
      ? p?.price.toString().includes(price.toString())
      : true;
    const nameMatch = name
      ? p?.product_name.toLowerCase().includes(name.toLowerCase())
      : true;
    return priceMatch && nameMatch;
  });

  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-full h-auto gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts?.map((p) => (
          <div
            key={p?._id}
            className="w-full max-w-[18rem] m-3 cursor-pointer transition-all duration-500 p-4 border border-gray-300 rounded-md hover:shadow-lg"
          >
            {p?.image?.length > 1 ? (
              <img
                className="object-cover w-full h-40 rounded-md md:h-56 lg:h-64"
                onClick={() => navigate(`/product/${p?._id}`)}
                src={p?.image[Math.floor(Math.random() * p?.image.length)]?.url}
                alt="Product Image"
              />
            ) : (
              <img
                className="object-cover w-full h-40 rounded-md md:h-56 lg:h-64"
                onClick={() => navigate(`/product/${p?._id}`)}
                src={p?.image[0]?.url || ""}
                alt="Product Image"
              />
            )}

            <p className="mt-2 text-sm font-semibold text-gray-700 truncate">
              {p.product_name}
            </p>

            <div className="flex items-center mt-1 space-x-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>

            <div className="flex items-center justify-between mt-3">
              <p className="text-sm font-semibold text-gray-800">₱{p?.price}</p>
              <i
                onClick={() => addProduct(p, 1)}
                className="text-lg transition-colors duration-300 cursor-pointer fa-solid fa-cart-shopping hover:text-red-500"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
