import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAuthenticationStore,
  useCartStore,
  useOrderStore,
} from "../../state/store";
import { useFormik } from "formik";
import { toast } from "react-toastify";

export default function () {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "credit card">(
    "cash"
  );

  const togglePaymentMethod = (method: "cash" | "credit card") => {
    setPaymentMethod(method);
  };

  const { cart: CartItems, clearCart } = useCartStore();
  const { user } = useAuthenticationStore();

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

  const { addOrder } = useOrderStore();

  const formik = useFormik({
    initialValues: {
      user: user?._id.toString(),
      products: CartItems?.map((p) => ({
        product: p?._id,
        quantity: p?.orderQuantity,
      })),
      payment: paymentMethod,
    },
    onSubmit: async (values) => {
      try {
        await addOrder(values);
        clearCart();
        toast.success("Order placed successfully");
        navigate("/users");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const cart = () => {
    navigate("/user/cart");
  };

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center w-full h-auto gap-4 md:h-screen md:flex-row"
      >
        <div className="w-full md:w-[70%] flex flex-col h-full border border-r-4 border-gray-500">
          <div className="w-full h-auto md:h-[30%] flex flex-col justify-center items-center gap-2 p-4">
            <h3 className="text-lg font-medium md:text-2xl">Order Checkout</h3>
            <h3 className="flex items-center gap-1 text-sm font-semibold md:text-lg">
              <i className="fa-solid fa-boxes-packing"></i> Shipping Information
            </h3>
            <div className="flex flex-col items-center justify-between w-full gap-2 px-3 md:flex-row">
              <div
                onClick={() => togglePaymentMethod("cash")}
                className={`cursor-pointer w-full md:w-[10rem] p-2 text-sm rounded-md border ${
                  paymentMethod === "cash"
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-black"
                }`}
              >
                <i className="mr-1 fa-solid fa-truck-fast"></i> Cash On Delivery
              </div>

              <div
                onClick={() => togglePaymentMethod("credit card")}
                className={`cursor-pointer w-full md:w-[10rem] p-2 text-sm rounded-md border ${
                  paymentMethod === "credit card"
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-black"
                }`}
              >
                <i className="mr-1 fa-solid fa-credit-card"></i> Credit Card
              </div>

              <div className="w-full md:w-[10rem] p-2 text-sm overflow-hidden rounded-md border border-black cursor-pointer">
                <i className="mr-1 fa-solid fa-wallet"></i> Online Payment
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          {paymentMethod === "credit card" ? (
            <div className="flex flex-col w-full h-auto p-4">
              <h3 className="mb-4 text-lg font-medium">
                Credit Card Information
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    Cardholder Name:
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={user?.fullname}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    Card Number:
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9101 1121"
                    className="p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    Expiry Date (MM/YY):
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    CVV:
                  </label>
                  <input
                    type="password"
                    placeholder="123"
                    className="p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full h-auto p-4">
              <h3 className="mb-4 text-lg font-medium">
                Shipping Address Information
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder={user?.fullname}
                    className="p-2 border border-gray-300 rounded-md placeholder:text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder={user?.contact_number}
                    className="p-2 border border-gray-300 rounded-md placeholder:text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    Address:
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder={user?.address}
                    className="p-2 border border-gray-300 rounded-md placeholder:text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    City:
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={user?.city}
                    className="p-2 border border-gray-300 rounded-md placeholder:text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium md:text-base">
                    Email Address:
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder={user?.email}
                    className="p-2 border border-gray-300 rounded-md placeholder:text-black"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full md:w-[30%] h-full border p-4">
          <h3
            onClick={cart}
            className="mb-4 text-lg font-bold text-center cursor-pointer"
          >
            <i className="mr-2 fa fa-arrow-left"></i> Review Your Cart
          </h3>
          <div className="flex flex-col justify-between h-auto">
            <div className="flex flex-col max-h-[300px] overflow-y-auto border p-2 rounded-md">
              {CartItems.map((p) => (
                <div
                  key={p?._id}
                  className="flex items-center w-full mb-3 h-auto md:h-[120px] border border-gray-500 rounded-md"
                >
                  <div className="w-[30%]">
                    <img
                      className="object-contain w-full h-full"
                      src={
                        p?.image.length > 1
                          ? p?.image[
                              Math.floor(Math.random() * p?.image.length)
                            ]?.url
                          : p?.image[0]?.url
                      }
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-[70%] flex flex-col justify-between p-2">
                    <h3 className="text-sm md:text-base">{p?.product_name}</h3>
                    <h3 className="text-sm md:text-base">
                      x <span>{p?.orderQuantity}</span>
                    </h3>
                    <h3 className="text-sm md:text-base">
                      Item Subtotal: {p?.orderQuantity * p?.price}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-4">
              <div className="flex justify-between p-2">
                <p className="text-sm font-semibold md:text-base">
                  Order Subtotal:
                </p>
                <p className="text-sm font-semibold md:text-base">
                  {totalAmount}
                </p>
              </div>
              <div className="flex justify-between p-2">
                <p className="text-sm font-semibold md:text-base">
                  Item Quantity:
                </p>
                <p className="text-sm font-semibold md:text-base">
                  {totalOrders}
                </p>
              </div>
              <div className="flex justify-between p-2">
                <p className="text-sm font-semibold md:text-base">Shipping:</p>
                <p className="text-sm font-semibold md:text-base">{shipping}</p>
              </div>
              <div className="flex justify-between p-2">
                <p className="text-sm font-semibold md:text-base">Total:</p>
                <p className="text-sm font-semibold md:text-base">
                  {totalAmount + shipping}
                </p>
              </div>
              <div className="flex justify-center p-2">
                <button
                  type="submit"
                  className="p-2 w-full md:w-[12rem] text-center text-white font-semibold bg-red-600 rounded-md"
                >
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
