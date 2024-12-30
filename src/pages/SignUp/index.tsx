import ImageOne from "../../assets/signUp.avif";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { SignUpValidationSchema } from "../../validations";
import { useUserStore } from "../../state/store";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const { message, addUser } = useUserStore();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      contact_number: "",
      address: "",
      city: "",
      email: "",
      password: "",
      image: [],
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("fullname", values.fullname);
      formData.append("contact_number", values.contact_number);
      formData.append("address", values.address);
      formData.append("city", values.city);
      formData.append("email", values.email);
      formData.append("password", values.password);
      values?.image?.forEach((image) => {
        formData.append("image", image);
      });

      try {
        await addUser(formData);
        toast.success(message);
        navigate("/signin");
      } catch (err) {
        toast.error("Error can't register user");
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex items-center w-full h-[36rem] rounded-sm shadow-md"
    >
      <div className="w-1/2 h-full">
        <img
          src={ImageOne}
          alt="Image"
          className="object-cover w-full h-full rounded-l-md"
        />
      </div>
      <div className="flex flex-col w-1/2 h-full p-4">
        <h3 className="mb-2 text-3xl font-semibold">Sign Up</h3>
        <p className="mb-4 text-[1rem] text-gray-600">
          Already have an account?
          <span className="ml-1 font-bold underline">Sign In</span>
        </p>
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
        <input
          type="text"
          name="contact_number"
          id="contact_number"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.contact_number}
          placeholder="Phone"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="text"
          placeholder="Address"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="password"
          name="password"
          id="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />

        <input
          type="file"
          name="image"
          multiple
          onChange={(e) => {
            const files = Array.from(e.currentTarget.files || []);
            formik.setFieldValue("image", files);
          }}
        />
        <div className="flex items-center mb-4 space-x-2">
          <input type="checkbox" className="p-2" />
          <span className="text-sm">
            I Agree with <span className="font-bold">Privacy Policy</span> and{" "}
            <span className="font-bold">Terms of Use</span>
          </span>
        </div>
        <button className="px-4 py-2 text-white bg-black rounded-sm hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </form>
  );
}
