import ImageOne from "../../assets/SignIn.avif";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthenticationStore } from "../../state/store";
import { SignInValidationSchema } from "../../validations";

export default function () {
  const navigate = useNavigate();
  const { login } = useAuthenticationStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInValidationSchema,
    onSubmit: async (values) => {
      try {
        const res = await login(values?.email, values?.password);
        if (res?.role === "User") {
          toast.success("Sign In Successfully");
          navigate("/user/profile");
        } else {
          toast.success("Welcome Admin");
          navigate("/admin/dashboard");
        }
      } catch (err) {
        toast.error("Invalid email or password", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    },
  });

  const signup = () => {
    navigate("/signup");
  }

  return (
    <form
      onSubmit={formik?.handleSubmit}
      className="flex items-center w-full h-[32rem] rounded-md shadow-md"
    >
      <div className="hidden h-full max-w-none md:block md:w-1/2">
        <img
          src={ImageOne}
          alt="Image"
          className="object-cover w-full h-full rounded-l-md"
        />
      </div>
      <div className="flex flex-col justify-center w-full h-full p-4 md:w-1/2">
        <h3 className="mb-2 text-lg font-semibold md:text-3xl">Sign In</h3>
        <p className="mb-4 text-xs md:text-[1rem] text-gray-600">
          Don't have an account yet?
          <span onClick={signup} className="ml-1 font-bold underline cursor-pointer">Sign Up</span>
        </p>

        <input
          type="email"
          name="email"
          id="email"
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          value={formik?.values?.email}
          placeholder="Email"
          className="p-1 mb-4 text-sm md:text-[1rem] border-b border-gray-700 rounded-sm"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-sm text-red-500">{formik.errors.email}</div>
        ) : null}

        <input
          type="password"
          name="password"
          id="password"
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          value={formik?.values?.password}
          placeholder="Password"
          className="p-1 mb-4 text-sm md:text-[1rem] border-b border-gray-700 rounded-sm"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-sm text-red-500">{formik.errors.password}</div>
        ) : null}
        <button
          type="submit"
          className="px-4 py-2 text-white bg-black rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
