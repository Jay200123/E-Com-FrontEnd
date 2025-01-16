import ImageOne from "../../assets/signUp.avif";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { SignUpValidationSchema } from "../../validations";
import { useUserStore } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function () {
  const navigate = useNavigate();
  const { addUser } = useUserStore();
  const [term, setTerm] = useState(false);

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
        toast.success("User registered successfully");
        navigate("/signin");
      } catch (err) {
        toast.error("Error can't register user");
      }
    },
  });

  const signIn = () => {  
    navigate("/signin");
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!term) {
          toast.error("Please agree to the  Terms and conditions.");
          return;
        }
        formik.handleSubmit(e);
      }}
      className="flex items-center w-full h-full overflow-hidden rounded-sm shadow-md"
    >
      <div className="hidden w-1/2 h-full md:block">
        <img src={ImageOne} alt="Image" className="object-cover h-[38rem]" />
      </div>
      <div className="flex flex-col w-full h-full p-4 md:w-1/2">
        <h3 className="mb-2 text-lg font-semibold md:text-3xl">Sign Up</h3>
        <p className="mb-4 text-sm md:text-[1rem] text-gray-600">
          Already have an account?
          <span onClick={signIn} className="ml-1 font-bold underline cursor-pointer">Sign In</span>
        </p>
        <input
          type="text"
          name="fullname"
          id="fullname"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fullname}
          placeholder="Full Name"
          className="p-1 mb-4 text-sm md:text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="text"
          name="contact_number"
          id="contact_number"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.contact_number}
          placeholder="Contact Number"
          className="p-1 mb-4 text-sm md:text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="text"
          name="address"
          id="address"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.address}
          placeholder="Address"
          className="p-1 mb-4 text-sm md:text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="text"
          name="city"
          id="city"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.city}
          placeholder="City"
          className="p-1 mb-4 text-sm md:text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="email"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
          className="p-1 mb-4 text-sm md:text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="password"
          name="password"
          id="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          className="p-1 mb-4 text-sm md:text-[1rem] border-b border-gray-700 rounded-sm"
        />

        <input
          type="file"
          name="image"
          multiple
          className="text-xs md:text-sm"
          onChange={(e) => {
            const files = Array.from(e.currentTarget.files || []);
            formik.setFieldValue("image", files);
          }}
        />
        <div className="flex items-center mb-4 space-x-2">
          <input
            type="checkbox"
            onChange={() => setTerm(!term)}
            className="p-2"
          />
          <span className="text-xs md:text-sm">
            I Agree with <span className="font-bold">Privacy Policy</span> and{" "}
            <span className="font-bold">Terms of Use</span>
          </span>
        </div>
        <button
          className="px-4 py-2 text-white bg-black rounded-sm hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
