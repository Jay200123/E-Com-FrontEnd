import ImageOne from "../../assets/signUp.jpeg";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { EditUserValidationSchema } from "../../validations";
import { useUserStore, useAuthenticationStore } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function () {
  const navigate = useNavigate();
  const { getUserById, updateUserById } = useUserStore();
  const { user: auth } = useAuthenticationStore();

  const { data } = useQuery({
    queryKey: ["user", auth?._id],
    queryFn: () => getUserById(auth?._id!),
    enabled: !!auth?._id,
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullname: data?.fullname || "",
      contact_number: data?.contact_number || "",
      address: data?.address || "",
      city: data?.city || "",
      image: [],
    },
    validationSchema: EditUserValidationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("fullname", values.fullname);
      formData.append("contact_number", values.contact_number);
      formData.append("address", values.address);
      formData.append("city", values.city);
      values?.image?.forEach((image) => {
        formData.append("image", image);
      });

      try {
        await updateUserById(data?._id!, formData);
        toast.success("Information updated successfully");
        navigate("/user/profile");
      } catch (err) {
        toast.error("Error updating information");
      }
    },
  });

const back = ()=>{
  window.history.back();
}

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative flex items-center w-full h-[36rem] rounded-sm shadow-md"
    >
       <h3 onClick={back} className="absolute ml-1 text-sm text-left text-white cursor-pointer top-1 left-1 md:text-lg">
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
        <h3 className="mb-2 text-3xl font-semibold">
          Edit Profile Information
        </h3>
        <input
          type="text"
          name="fullname"
          id="fullname"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fullname}
          placeholder="Full Name"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        {formik.touched.fullname && formik.errors.fullname ? (
          <div className="text-sm text-red-500">{formik.errors.fullname}</div>
        ) : null}

        <input
          type="text"
          name="contact_number"
          id="contact_number"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.contact_number}
          placeholder="Contact Number"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        {formik.touched.contact_number && formik.errors.contact_number ? (
          <div className="text-sm text-red-500">
            {formik.errors.contact_number}
          </div>
        ) : null}
        <input
          type="text"
          name="address"
          id="address"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.address}
          placeholder="Address"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="text-sm text-red-500">{formik.errors.address}</div>
        ) : null}
        <input
          type="text"
          name="city"
          id="city"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.city}
          placeholder="City"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-sm text-red-500">{formik.errors.city}</div>
        ) : null}

        <input
          type="file"
          name="image"
          multiple
          className="p-1 mb-4 text-[1rem] rounded-sm"
          onChange={(e) => {
            const files = Array.from(e.currentTarget.files || []);
            formik.setFieldValue("image", files);
          }}
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-black rounded-sm hover:bg-blue-600"
        >
          Update Information
        </button>
      </div>
    </form>
  );
}
