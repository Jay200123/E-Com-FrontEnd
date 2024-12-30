import { useProductStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";

export default function () {
  const { getAllProducts } = useProductStore();

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  // const filteredData = data?.filter((product) => product.category === "mobile");
  return (
    <>
      <div className="relative flex flex-col items-center w-full h-screen p-10 space-x-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-4">
        <h3 className="absolute text-2xl font-bold left-1 top-1">
          Mobile Phones
        </h3>
        {data?.map((p) => (
          <div
            key={p?._id}
            className="min-w-[15rem] max-w-[18rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md"
          >
            {p?.image?.length > 1 ? (
              <img
                className="object-cover w-full h-64"
                src={p?.image[Math.floor(Math.random() * p?.image.length)]?.url}
                alt="test image"
              />
            ) : (
              <img
                className="object-cover w-full h-64"
                src={p?.image[0]?.url || ""}
                alt="image"
              />
            )}
            <p className="font-semibold">
              {p.product_name}({p?.color})
            </p>
            <div className="flex items-center justify-between">
              <p className="font-semibold">₱{p?.price}</p>
              <i className="text-2xl transition-all duration-500 cursor-pointer fa-solid hover:text-red-500 fa-cart-shopping"></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
