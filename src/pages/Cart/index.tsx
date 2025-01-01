import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../state/store";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function () {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/user/checkout");
  };

  const { cart, incrementQuantity, decrementQuantity, removeProduct } =
    useCartStore();

    const handleRemove = async(id: string)=>{
        removeProduct(id)
        toast.success("Product removed from cart")
    }

  const totalAmount = cart.reduce((acc, product) => {
    return acc + product.price * product.orderQuantity;
  }, 0);

  const totalOrders = cart.reduce((acc, product) => {
    return acc + product.orderQuantity;
  }, 0);

  let shipping = cart && cart.length > 0 ? 50 : 0; 

  if (totalAmount > 5000) {
    shipping = 0;
  }

  return (
    <>
      <div className="flex flex-col items-center w-full h-screen p-2 md:flex-row">
        <div className="w-9/12 h-full p-2 rounded-md">
          <h3 className="w-4/5 p-2 m-1 text-3xl text-left border-b-4 border-black">
            My Cart
          </h3>
          <div className="relative w-full h-full overflow-y-auto flex flex-col justify-start mt-2.5">
            <h3 className="absolute text-sm font-medium md:font-bold md:text-lg">{cart && cart.length > 0 ? "" : "No items in the cart"}</h3>
            {cart?.map((product, index) => (
              <div
                key={index}
                className="flex items-center w-full h-[15rem] border border-gray-800 rounded-md mb-4 shadow-md"
              >
                <div className="flex items-center justify-center w-1/4 h-full">
                  {product?.image?.length > 1 ? (
                    <img
                      className="object-contain w-[8rem] h-[8rem] rounded-full"
                      src={
                        product?.image[
                          Math.floor(Math.random() * product?.image.length)
                        ]?.url
                      }
                      alt="test image"
                    />
                  ) : (
                    <img
                      className="object-contain w-[8rem] h-[8rem] rounded-full"
                      src={product?.image[0]?.url || ""}
                      alt="image"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between w-9/12 h-full p-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <p className="text-[1rem] font-semibold">
                      {product?.product_name}
                    </p>
                    <FaTrash
                      className="text-lg text-red-500"
                      title="Remove Product"
                      onClick={() => handleRemove(product?._id)}
                    />
                  </div>
                  <div className="mb-1 overflow-hidden text-left">
                    <p className="text-sm line-clamp-3">
                      {product?.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[1rem] font-medium">
                      Unit Price:<span className="ml-1">{product?.price}</span>
                    </p>

                    <div className="flex flex-col items-center md:flex-row">
                      <p className="mr-2 text-lg font-semibold">Qty:</p>
                      <button
                        onClick={() => incrementQuantity(product?._id)}
                        className="p-1 text-xs md:text-sm  w-[4rem]  text-center font-bold text-white bg-red-600 rounded-md"
                      >
                        <i className="fa-solid text-[1rem] text-white fa-plus"></i>
                      </button>
                      <p className="mx-4 mt-2 text-xs text-[1rem] font-semibold">
                        {product?.orderQuantity}
                      </p>
                      <button
                        onClick={() => decrementQuantity(product?._id)}
                        className="p-1 md:text-sm w-[4rem]  text-center font-bold text-white bg-green-600 rounded-md"
                      >
                        <i className="fa-solid text-[1rem] text-white fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-end m-2">
                    <p className="text-[1rem] font-medium">
                      Item Subtotal:
                      <span className="ml-1 underline">
                        {product.orderQuantity * product.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full p-3 border border-gray-400 rounded-md shadow-sm md:w-1/4 h-3/4">
          <h3 className="text-[1.5rem] w-11/12 p-2 border-b-4 border-black text-center m-2 text-black font-semibold">
            Order Details
          </h3>
          <div className="w-full">
            <div className="flex items-center justify-between p-2">
              <p className="text-[1rem] text-gray-700 font-semibold">
                Order Subtotal:
              </p>
              <p className="text-[1rem] text-gray-700 font-semibold">
                {totalAmount}
              </p>
            </div>
            <div className="flex items-center justify-between p-2">
              <p className="text-[1rem] text-gray-700 font-semibold">
                Unit Quantity:
              </p>
              <p className="text-[1rem] text-gray-700 font-semibold">
                {totalOrders}
              </p>
            </div>
            <div className="flex items-center justify-between p-2">
              <p className="text-[1rem] text-gray-700 font-semibold">
                {shipping > 0 ? "Shipping:" : "Free Shipping:"}
              </p>
              <p className="text-[1rem] text-gray-700 font-semibold">
                {shipping}
              </p>
            </div>
            <div className="flex items-center justify-between p-2">
              <p className="text-[1rem] text-gray-700 font-semibold">Total:</p>
              <p className="text-[1rem] text-gray-700 font-semibold">
                {totalAmount + shipping}
              </p>
            </div>
            <div className="flex items-center justify-center p-2">
              {cart && cart.length > 0 ? (
                <button
                onClick={(checkout)}
                className="p-2 w-[12rem] text-center text-white font-semibold bg-red-600 rounded-md"
              >
                Proceed to Checkout
              </button>
              ): (
                <button
                onClick={()=>toast.error("No items in the cart")} 
                className="p-2 w-[12rem] text-center text-white font-semibold bg-gray-500 rounded-md"
                >
                  Proceed to checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
