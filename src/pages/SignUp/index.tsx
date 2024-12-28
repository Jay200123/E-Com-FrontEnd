import ImageOne from "../../assets/signUp.avif";

export default function () {
  return (
    <form className="flex items-center w-full h-[36rem] rounded-sm shadow-md">
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
          placeholder="Full Name"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="text"
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
          placeholder="Email"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
        />

        <input
          type="file"
          placeholder="Upload Profile Picture"
          className="p-1 mb-4 text-[1rem] border-b border-gray-700 rounded-sm"
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
