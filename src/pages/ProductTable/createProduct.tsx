import ImageOne from "../../assets/editInfo.jpg";
import { useUserStore } from "../../state/store";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const { addUser } = useUserStore();

  const formik = useFormik({
    initialValues: {
      product_name: "",
      description: "",
      price: "",
      category: "",
      quantity: "",
      image: [],
    },
    // validationSchema: any,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("product_name", values.product_name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("category", values.category);
      formData.append("quantity", values.quantity);
      values.image.forEach((file) => {
        formData.append("image", file);
      });
      await addUser(formData);
      toast.success("User Added Successfully");
      navigate("/users");
    },
  });

  const back = () => {
    window.history.back();
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative flex items-center w-full h-[36rem] rounded-sm shadow-md"
    >
      <h3
        onClick={back}
        className="absolute ml-1 text-sm font-bold text-left cursor-pointer top-1 left-1 md:text-2xl"
      >
        <i className="mr-1 fa-solid fa-arrow-left"></i>Go Back
      </h3>
      <div className="hidden w-1/2 h-full md:block">
        <img
          src={ImageOne}
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full h-full p-4 md:w-1/2">
        <h3 className="mb-2 text-3xl font-semibold">User Information</h3>
        <label className="text-black text-[1rem] font-medium">
          Product Name
        </label>
        <input
          type="text"
          name="product_name"
          id="product_name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.product_name}
          className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <label className="text-black text-[1rem] font-medium">
          Description
        </label>
        <textarea
          name="contact_number"
          id="contact_number"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.description}
          className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <label className="text-black text-[1rem] font-medium">
          Product Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.price}
          className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <label className="text-black text-[1rem] font-medium">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.quantity}
          className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <label className="text-black text-[1rem] font-medium">Category</label>
        <input
          type="category"
          name="category"
          id="category"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.category}
          className="placeholder:text-gray-700 p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
      </div>
    </form>
  );
}
