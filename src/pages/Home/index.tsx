import { Carousel } from "../../components";
import ImageOne from "../../assets/mobile-2.jpeg";
import ImageTwo from "../../assets/laptop-2.jpg";
import ImageThree from "../../assets/computer-two.jpg";
import ImageFive from "../../assets/laptop3.avif";
import { useProductStore, useCartStore } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function () {
  const navigate = useNavigate();
  const { getAllProducts } = useProductStore();
  const { addProduct } = useCartStore(); 

  const mobiles = () => {
    navigate("/products/mobiles");
  };

  const laptops = () => {
    navigate("/products/laptops");
  };

  const computers = () => {
    navigate("/products/computers");
  };
  
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <div className="flex flex-col justify-center w-full h-full p-2">
      <Carousel />
      <h3 className="text-3xl font-bold text-left">Categories</h3>
      <div className="w-full h-[31.25rem] flex items-center justify-start mt-1 p-2 ">
        <div className="flex flex-col justify-start w-1/2 h-full overflow-hidden rounded-sm bg-slate-400 ">
          <img className="relative object-cover w-full h-full" src={ImageOne} />
          <div className="absolute p-2 text-left">
            <h3 className="text-2xl font-bold text-white">Mobile Phones</h3>
            <p
              onClick={mobiles}
              className="text-lg text-white underline cursor-pointer"
            >
              Shop Now<i className="ml-1 fa-solid fa-arrow-right"></i>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2 h-full ml-2">
          <div className="flex flex-start relative h-[15rem] w-full  mb-2 overflow-hidden rounded-sm">
            <img className="object-cover w-full h-auto" src={ImageTwo} />
            <div className="absolute bottom-1 left-1">
              <h3 className="text-2xl font-bold text-white">Laptops</h3>
              <p
                onClick={laptops}
                className="text-lg text-white underline cursor-pointer"
              >
                Shop Now<i className="ml-1 fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>

          <div className="flex flex-start relative h-[15rem] w-full overflow-hidden rounded-sm">
            <img className="object-cover w-full h-auto" src={ImageThree} />
            <div className="absolute bottom-1 left-1">
              <h3 className="text-2xl font-bold text-white">Computers</h3>
              <p
                onClick={computers}
                className="text-lg text-white underline cursor-pointer"
              >
                Shop Now<i className="ml-1 fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full p-2">
        <h3 className="text-3xl font-bold text-left">New Arrivals</h3>
        <div className="flex items-center w-full overflow-x-auto">
          <div className="flex flex-nowrap">
            {data?.map((p) => (
              <div
                key={p._id}
                // onClick={() => navigate(`/product/${p?._id}`)}
                className="min-w-[18.75rem] max-w-[25rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md m-4"
              >
                {p?.image?.length > 1 ? (
                  <img
                    className="object-cover w-full h-64"
                    src={
                      p?.image[Math.floor(Math.random() * p?.image.length)]?.url
                    }
                    alt="test image"
                  />
                ) : (
                  <img
                    className="object-cover w-full h-64"
                    src={p?.image[0]?.url || ""}
                    alt="image"
                  />
                )}
                <p className="font-semibold">{p.product_name}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">₱{p.price}</p>
                  <i onClick={()=>addProduct(p)} className="text-2xl transition-all duration-500 cursor-pointer fa-solid hover:text-red-500 fa-cart-shopping"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center h-[18.75rem]">
        <div className="hidden w-1/2 h-full md:block">
          <img
            src={ImageFive}
            className="object-none w-full h-full overflow-hidden"
          />
        </div>
        <div className="w-1/2 h-full">
          <h3 className="text-2xl font-bold">
            Save Up to 35% on Select Devices
          </h3>
          <h3 className="text-lg">Fresh Tech, Now More Affordable</h3>
          <p className="text-sm">
            Upgrade your tech effortlessly with our latest deals. Explore sleek
            and powerful mobile devices, laptops, and computers designed to
            elevate your digital lifestyle—all at unbeatable prices.
          </p>
          <p className="text-lg text-black underline cursor-pointer">
            Shop Now<i className="ml-1 fa-solid fa-arrow-right"></i>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center mt-3 md:grid md:grid-cols-4 md:gap-4">
          <div className="flex flex-col m-2 overflow-hidden text-center p-2 h-[11.7rem] rounded-md  w-[11.7rem] border border-black">
            <i className="text-3xl fa-solid fa-truck-fast"></i>
            <h3 className="text-lg">Free Shipping</h3>
            <p className="text-sm">
              Get your orders delivered at no extra cost! Enjoy free shipping on
              all purchases above ₱150.00.
            </p>
          </div>

          <div className="flex flex-col m-2 overflow-hidden text-center p-2 h-[11.7rem] w-[11.7rem] rounded-md   border border-black">
            <i className="text-3xl fa-solid fa-award"></i>
            <h3 className="text-lg">Money-Back Guarantee</h3>
            <p className="text-sm">
              Shop with confidence! Enjoy a hassle-free 30-day money-back
              guarantee on your purchases.
            </p>
          </div>

          <div className="flex flex-col m-2 overflow-hidden text-center p-2 h-[11.7rem] w-[11.7rem] rounded-md   border border-black">
            <i className="text-3xl fa-solid fa-lock"></i>
            <h3 className="text-lg">Secure Payments</h3>
            <p className="text-sm">
              Enjoy peace of mind with our trusted payment options, ensuring
              safe and reliable transactions for all orders above ₱150.00.
            </p>
          </div>

          <div className="flex flex-col m-2 text-center overflow-hidden p-2 h-[11.7rem] w-[11.7rem] rounded-md  border border-black">
            <i className="text-3xl fa-solid fa-phone"></i>
            <h3 className="text-lg">Customer Support</h3>
            <p className="text-sm">
              We're here to help! Reach out to our dedicated support team for
              assistance with any inquiries or concerns about your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
