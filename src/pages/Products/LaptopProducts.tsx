import { useProductStore, useCartStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const { getAllProducts } = useProductStore();
  const { addProduct } = useCartStore();


  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const filteredData = data?.filter((product) => product.category.includes("Laptop"));
  return (
    <>
      <div className="relative flex flex-col items-center w-full h-screen p-10 overflow-x-auto md:grid md:grid-cols-4 md:gap-4">
        <h3 className="absolute text-2xl font-bold left-1 top-1">
          Laptops
        </h3>
        {filteredData?.map((p) => (
          <div
            key={p?._id}
            onClick={() => navigate(`/product/${p?._id}`)}  
            className="min-w-[15rem] max-w-[18rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md"
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
                src={p?.image[0]?.url || ""}
                alt="image"
              />
            )}
            <p className="font-semibold">
              {p.product_name}({p?.color})
            </p>
            <div className="flex items-center justify-between">
              <p className="font-semibold">₱{p?.price}</p>
              <i onClick={()=>addProduct(p, 1)} className="text-2xl transition-all duration-500 cursor-pointer fa-solid hover:text-red-500 fa-cart-shopping">
              </i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
