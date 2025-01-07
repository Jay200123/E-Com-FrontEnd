import { useProductStore } from "../../state/store";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function () {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProductStore();

  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id!),
    enabled: !!id, // only fetch when id is available
  });

  const back = () => {
    window.history.back();
  };

  const randomImage =
  Array.isArray(data?.image) && data.image.length > 0
    ? data.image[Math.floor(Math.random() * data.image.length)]
    : null;

  return (
    <div className="relative flex flex-col w-full h-screen md:flex-row">
      <h3
        onClick={back}
        className="absolute ml-1 text-sm font-bold cursor-pointer top-1 left-1 md:text-2xl"
      >
        <i className="mr-1 fa-solid fa-arrow-left"></i>Go Back
      </h3>

      <div className="hidden h-screen border md:block md:w-1/2">
        {randomImage && (
          <img
            src={randomImage.url}
            alt={randomImage.originalname}
            className="object-cover w-full  h-[56rem]"
          />
        )}
      </div>

      <div className="flex flex-col w-full h-screen p-4 md:w-1/2">
        <h3 className="mb-1 text-2xl font-semibold">Product Details</h3>
        <div className="flex flex-col mb-1">
          <label
            htmlFor="brand"
            className="text-sm font-medium text-black md:text-base"
          >
            Brand
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            readOnly
            placeholder={data?.brand?.brand_name}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="product_name"
            className="text-sm font-medium text-black md:text-base"
          >
            Product Name
          </label>
          <input
            type="text"
            name="product_name"
            id="product_name"
            readOnly
            placeholder={data?.product_name}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="price"
            className="text-sm font-medium text-black md:text-base"
          >
            Product Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            readOnly
            placeholder={data?.price.toString()}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="quantity"
            className="text-sm font-medium text-black md:text-base"
          >
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            readOnly
            placeholder={data?.quantity.toString()}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="category"
            className="text-sm font-medium text-black md:text-base"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            readOnly
            placeholder={data?.category}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-black"
          />
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="category"
            className="text-sm font-medium text-black md:text-base"
          >
            Color
          </label>
          <div
            className="w-8 h-8 border border-black rounded-full"
            style={{ backgroundColor: data?.color }}
          ></div>
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="description"
            className="mb-2 text-sm font-medium text-black md:text-base"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            readOnly
            placeholder={data?.description}
            className="p-2 text-sm border border-gray-300 rounded-md placeholder:text-black md:text-base placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={6}
          />
        </div>
      </div>
    </div>
  );
}
