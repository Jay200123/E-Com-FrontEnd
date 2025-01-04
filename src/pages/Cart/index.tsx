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

  const handleRemove = async (id: string) => {
    removeProduct(id);
    toast.success("Product removed from cart");
  };

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
      <div className="flex flex-col items-center w-full min-h-screen p-2 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        {/* Cart Section */}
        <div className="w-full h-full p-2 bg-white rounded-md shadow-lg md:w-2/3">
          <h3 className="p-2 text-lg font-bold text-left border-b-2 border-black md:text-2xl">
            My Cart
          </h3>
          <div className="relative w-full h-full mt-4 overflow-y-auto">
            {cart?.length > 0 ? (
              cart.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm md:flex-row"
                >
                  {/* Product Image */}
                  <div className="flex items-center justify-center w-full mb-4 md:w-1/4 md:mb-0">
                    <img
                      className="object-cover w-24 h-24 rounded-md"
                      src={
                        product?.image?.length > 1
                          ? product?.image[
                              Math.floor(Math.random() * product?.image.length)
                            ]?.url
                          : product?.image[0]?.url || ""
                      }
                      alt={product?.product_name || "Product Image"}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col justify-between w-full space-y-2 md:w-3/4">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">
                        {product?.product_name}
                      </p>
                      <FaTrash
                        className="text-xl text-red-500 cursor-pointer"
                        title="Remove Product"
                        onClick={() => handleRemove(product?._id)}
                      />
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {product?.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium">
                        Unit Price:{" "}
                        <span className="font-bold">{product?.price}</span>
                      </p>
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => incrementQuantity(product?._id)}
                          className="px-3 py-1 text-sm text-white bg-red-600 rounded-md"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <p className="font-semibold">
                          {product?.orderQuantity}
                        </p>
                        <button
                          onClick={() =>
                            product.orderQuantity > 1
                              ? decrementQuantity(product?._id)
                              : toast.error("Minimum quantity reached")
                          }
                          className={`px-3 py-1 text-white rounded-md text-sm ${
                            product.orderQuantity > 1
                              ? "bg-green-600"
                              : "bg-gray-400 opacity-70"
                          }`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </div>
                    </div>
                    <p className="font-medium text-right">
                      Subtotal:{" "}
                      <span className="font-bold underline">
                        {product.orderQuantity * product.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-lg font-medium text-center text-gray-600">
                No items in the cart
              </p>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full p-4 bg-white border border-gray-200 rounded-md shadow-lg md:w-1/3">
          <h3 className="pb-2 text-xl font-semibold text-center border-b-2 border-black">
            Order Details
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-700">Order Subtotal:</p>
              <p className="font-medium">{totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Unit Quantity:</p>
              <p className="font-medium">{totalOrders}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">
                {shipping > 0 ? "Shipping:" : "Free Shipping:"}
              </p>
              <p className="font-medium">{shipping}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Total:</p>
              <p className="font-medium">{totalAmount + shipping}</p>
            </div>
            <div className="text-center">
              {cart?.length > 0 ? (
                <button
                  onClick={checkout}
                  className="w-full px-4 py-2 text-white bg-red-600 rounded-md"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <button
                  onClick={() => toast.error("No items in the cart")}
                  className="w-full px-4 py-2 text-white bg-gray-400 rounded-md"
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
