import ImageOne from "../../assets/editInfo.jpg";
import { useProductStore, useBrandStore } from "../../state/store";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import createProductValidationSchema from "../../validations/createProductValidationSchema";
import { useQuery } from "@tanstack/react-query";
import { HexColorPicker } from "react-colorful";

export default function () {
  const navigate = useNavigate();
  const { addProduct } = useProductStore();
  const { getAllBrands } = useBrandStore();

  const { data } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
  });

  const category = ["Mobile", "Laptop", "Computer", "Tablet"];

  const formik = useFormik({
    initialValues: {
      brand: "",
      product_name: "",
      description: "",
      price: "",
      color: "",
      category: "",
      quantity: "",
      image: [],
    },
    validationSchema: createProductValidationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("brand", values.brand);
      formData.append("product_name", values.product_name);
      formData.append("description", values.description);
      formData.append("color", values.color);
      formData.append("price", values.price);
      formData.append("category", values.category);
      formData.append("quantity", values.quantity);
      values.image.forEach((file) => {
        formData.append("image", file);
      });
      await addProduct(formData);
      toast.success("User Added Successfully");
      navigate("/products/table");
    },
  });

  const back = () => {
    window.history.back();
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative flex flex-col md:flex-row w-full h-screen"
    >
      <h3
        onClick={back}
        className="absolute top-1 left-1 ml-1 text-sm font-bold cursor-pointer md:text-2xl"
      >
        <i className="mr-1 fa-solid fa-arrow-left"></i>Go Back
      </h3>

      <div className="hidden md:block md:w-1/2 h-screen border">
        <img
          src={ImageOne}
          alt="Image"
          className="object-cover w-full  h-[56rem]"
        />
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
          <select
            name="brand"
            id="brand"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.brand}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          >
            <option value="" disabled>
              Select a Brand
            </option>
            {data?.map((b, index) => (
              <option key={index} value={b?._id}>
                {b?.brand_name}
              </option>
            ))}
          </select>
          {formik.touched.brand && formik.errors.brand && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.brand}</p>
          )}
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="brand"
            className="text-sm font-medium text-black md:text-base"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.category}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          >
            <option value="" disabled>
              Product Category
            </option>
            {category?.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
          {formik.touched.category && formik.errors.category && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.category}</p>
          )}
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.product_name}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
          {formik.touched.product_name && formik.errors.product_name && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.product_name}
            </p>
          )}
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.price}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
          {formik.touched.price && formik.errors.price && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.price}</p>
          )}
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.quantity}
            className="p-2 text-sm border-b border-gray-700 rounded-sm md:text-base placeholder:text-gray-700"
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.quantity}
            </p>
          )}
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder="Enter product description..."
            className="p-2 text-sm border border-gray-300 rounded-md md:text-base placeholder:text-gray-500 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.description}
            </p>
          )}
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="color"
            className="mb-2 text-sm font-medium text-black md:text-base"
          >
            Color
          </label>
          <div className="p-2 border rounded-md">
            <HexColorPicker
              color={formik.values.color}
              onChange={(color) => formik.setFieldValue("color", color)}
              className="w-full h-full"
            />
          </div>
          {formik.touched.color && formik.errors.color && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.color}</p>
          )}
        </div>

        <div className="flex flex-col mb-1">
          <label
            htmlFor="image"
            className="mb-2 text-sm font-medium text-black md:text-base"
          >
            Upload Images
          </label>
          <input
            type="file"
            name="image"
            id="image"
            multiple
            onChange={(e) => {
              const files = Array.from(e.currentTarget.files || []);
              formik.setFieldValue("image", files);
            }}
            className="text-sm md:text-base"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-blue-600"
        >
          Create Product
        </button>
      </div>
    </form>
  );
}
