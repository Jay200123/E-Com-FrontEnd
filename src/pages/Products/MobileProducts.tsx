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
      <div className="flex flex-col flex-wrap items-center justify-between w-full h-screen overflow-x-auto md:grid md:grid-cols-4">
        {filteredProducts?.map((p) => (
          <div
            key={p?._id}
            className="max-w-[15rem] md:w-[16rem] m-3 h-auto cursor-pointer transition-all duration-500 p-2 border border-gray-300 rounded-md"
          >
            {p?.image?.length > 1 ? (
              <img
                className="object-cover w-full h-32 md:h-64"
                onClick={() => navigate(`/product/${p?._id}`)}
                src={p?.image[Math.floor(Math.random() * p?.image.length)]?.url}
                alt="test image"
              />
            ) : (
              <img
                className="object-cover w-full h-32 md:h-64"
                onClick={() => navigate(`/product/${p?._id}`)}
                src={p?.image[0]?.url || ""}
                alt="image"
              />
            )}
            <p className="font-semibold">
              {p.product_name}({p?.color})
            </p>
            <div className="flex items-center flex-start">
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold">₱{p?.price}</p>
              <i
                onClick={() => addProduct(p, 1)}
                className="text-2xl transition-all duration-500 cursor-pointer fa-solid hover:text-red-500 fa-cart-shopping"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
