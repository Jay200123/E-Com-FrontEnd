import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  useAuthenticationStore,
  useCartStore
} from "../../state/store";
import { useFormik } from "formik";
import { toast } from "react-toastify";

export default function () {
    const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "credit card">(
    "credit card"
  );

  const { cart: CartItems, clearCart } = useCartStore();
  const { user } = useAuthenticationStore();

  const togglePaymentMethod = (method: "cash" | "credit card") => {
    setPaymentMethod(method);
  };

  const totalAmount = CartItems.reduce((acc, product) => {
    return acc + product.price * product.orderQuantity;
  }, 0);

  const totalOrders = CartItems.reduce((acc, product) => {
    return acc + product.orderQuantity;
  }, 0);

  let shipping = 50.0;

  if (totalAmount > 5000) {
    shipping = 0;
  }

  const formik = useFormik({
    initialValues: {
      user: user?._id,
      products: CartItems?.map((p) => ({
        product: p?._id,
        quantity: p?.orderQuantity,
      })),
      payment: paymentMethod,   

    },
    onSubmit: (values) => {
      console.log(values)
      navigate("/users");
      clearCart();
      toast.success("Order Placed Successfully"); 
    }

  })

  const cart = ()=>{
    navigate("/user/cart")
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center w-full h-screen md:flex-row ">
        <div className="w-[70%] flex flex-col h-full border border-r-4 border-gray-500 ">
          <div className="w-full h-[30%] flex flex-col justify-center items-center">
            <h3 className="text-sm font-normal md:text-2xl md:font-bold">
              Order Checkout{" "}
            </h3>
            <h3 className="text-sm font-normal md:text-lg md:font-bold">
              <i className="mr-1 fa-solid fa-boxes-packing"></i>Shipping
              Information
            </h3>
            <div className="flex flex-col items-center justify-start w-full px-3 md:flex-row md:justify-between">
              <button
                onClick={() => togglePaymentMethod("credit card")}
                className={`w-[10rem] p-2 text-sm rounded-md border ${
                  paymentMethod === "credit card"
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-black"
                }`}
              >
                <i className="mr-1 fa-solid fa-truck-fast"></i>Cash On Delivery
              </button>

              <button
                onClick={() => togglePaymentMethod("cash")}
                className={`w-[10rem] p-2 text-sm rounded-md border ml-4 ${
                  paymentMethod === "cash"
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-black"
                }`}
              >
                <i className="mr-1 fa-solid fa-credit-card"></i>Credit Card
              </button>

              <button className="w-[10rem] p-2 text-sm overflow-hidden rounded-md border border-black">
                <i className="mr-1 fa-solid fa-wallet"></i> Online Payment
              </button>
            </div>
          </div>

          {paymentMethod === "cash" ? (
            <div className="flex flex-col w-full p-2 h-[70%]">
              <h3 className="text-lg font-medium">Credit Card Information</h3>
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                  Cardholder Name:
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={user?.fullname}
                  className="p-2 mb-4 text-[1rem] border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                  Card Number:
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9101 1121"
                  className="p-2 mb-4 text-[1rem] border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                  Expiry Date (MM/YY):
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="p-2 mb-4 text-[1rem] border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                  CVV:
                </label>
                <input
                  type="password"
                  placeholder="123"
                  className="p-2 mb-4 text-[1rem] border border-gray-300 rounded-md"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full p-2 h-[70%]">
              <h3 className="text-lg font-medium">
                Shipping Address Information
              </h3>
              <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/2 p-2">
                  <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    readOnly  
                    placeholder={user?.fullname}
                    className="placeholder:text-black p-1 mb-4 text-[1rem] border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col w-1/2 p-2">
                  <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder={user?.contact_number}
                    className="placeholder:text-black p-1 mb-4 text-[1rem] border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/2 p-2">
                  <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                    Address:
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder={user?.address}
                    className="placeholder:text-black p-1 mb-4 text-[1rem] border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col w-1/2 p-2">
                  <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                    City:
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={user?.city}
                    className="placeholder:text-black p-1 mb-4 text-[1rem] border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/2 p-2">
                  <label className="text-sm font-normal md:text-[1rem] md:font-medium mb-1">
                    Email Address:
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder={user?.email} 
                    className="placeholder:text-black p-1 mb-4 text-[1rem] border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-[30%] h-full  border border-white">
          <h3 onClick={cart} className="m-2 cursor-pointer text-[1.25rem] font-bold text-center">
            <i className="mr-2 fa fa-arrow-left"></i>Review Your Cart
          </h3>
          <div className="flex flex-col justify-between h-[30rem] ">
            <div className="flex flex-col w-full justify-start max-h-[300px] overflow-y-auto border p-1 border-white">
              {CartItems.map((p) => (
                 <div key={p?._id} className="flex flex-row items-center w-full mb-3 h-[120px] border border-gray-500 rounded-md">
                 <div className="w-[30%]">
                 {p?.image?.length > 1 ? (
                    <img
                      className="object-contain w-40 h-40"  
                      src={
                        p?.image[
                          Math.floor(Math.random() * p?.image.length)
                        ]?.url
                      }
                      alt="test image"
                    />
                  ) : (
                    <img
                    className="object-contain w-40 h-40"
                    src={p?.image[0]?.url || ""}
                      alt="image"
                    />
                  )}
                 </div>
                 <div className="w-[70%] flex flex-col justify-between h-full">
                   <h3 className="text-[1rem]">{p?.product_name}</h3>
                   <h3 className="text-[1rem]">
                     x <span className="mr-1">{p?.orderQuantity}</span>
                   </h3>
                   <h3 className="text-[1rem]">
                     Item Subtotal: <span className="mr-1">{p?.orderQuantity * p?.price}</span>
                   </h3>
                 </div>
               </div>
              ))}
             
            </div>

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
                  Item Quantity:
                </p>
                <p className="text-[1rem] text-gray-700 font-semibold">{totalOrders}</p>
              </div>
              <div className="flex items-center justify-between p-2">
                <p className="text-[1rem] text-gray-700 font-semibold">
                  Shipping:
                </p>
                <p className="text-[1rem] text-gray-700 font-semibold">{shipping}</p>
              </div>
              <div className="flex items-center justify-between p-2">
                <p className="text-[1rem] text-gray-700 font-semibold">
                  Total:
                </p>
                <p className="text-[1rem] text-gray-700 font-semibold">
                  {totalAmount + shipping}
                </p>
              </div>
              <div className="flex items-center justify-center p-2">
                <button className="p-2 w-[12rem] text-center text-white font-semibold bg-red-600 rounded-md">
                  Checkout Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
