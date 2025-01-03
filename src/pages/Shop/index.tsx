import { useProductStore, useCartStore, useFilterStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function () {
  const navigate = useNavigate();
  const { price } = useFilterStore();
  const { getAllProducts } = useProductStore();
  const { addProduct } = useCartStore();

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const filteredProducts = data?.filter((p) => p?.price.toString().includes(price.toString()));  

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
