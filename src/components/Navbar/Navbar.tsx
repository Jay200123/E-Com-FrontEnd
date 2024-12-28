import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const home = ()=>{
    navigate("/");
  }

  const signIn = () => {
    navigate("/signin");
  };

  const signUp = () => {
    navigate("/signup");
  };

  
  return (
    <nav className="w-full h-[3.75rem] border border-gray-300 flex items-center justify-between p-1">
      <div className="flex items-center">
        <i className="m-2 text-lg fa-solid fa-bag-shopping"></i>
        <h3 className="text-lg font-bold"> IT Shop</h3>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex flex-row items-start justify-start">
          <li onClick={home} className="m-3 text-sm font-semibold cursor-pointer">Home</li>
          <li className="m-3 text-sm font-semibold">Shop</li>
          <li className="m-3 text-sm font-semibold">About</li>
          <li className="m-3 text-sm font-semibold">Contact Us</li>
        </ul>
      </div>
      <div className="p-1">
        <i className="m-2 text-lg fa-solid fa-magnifying-glass"></i>
        <i
          title="Sign In"
          onClick={signIn}
          className="m-2 text-lg cursor-pointer fa-regular fa-circle-user"
        ></i>
        <i
          title="Sign Up"
          onClick={signUp}
          className="m-2 text-lg cursor-pointer fa-solid fa-right-to-bracket"
        ></i>
        <i className="m-2 text-lg fa-solid fa-cart-shopping"></i>
      </div>
    </nav>
  );
}
