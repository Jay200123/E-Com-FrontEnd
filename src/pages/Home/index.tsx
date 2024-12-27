import { Carousel } from "../../components";
import ImageOne from "../../assets/mobile-2.jpeg";
import ImageTwo from "../../assets/laptop-2.jpg";
import ImageThree from "../../assets/computer-two.jpg";
import ImageFour from "../../assets/mobile-3jpeg.jpg";
import ImageFive from "../../assets/laptop3.avif";

export default function () {
  return (
    <div className="flex flex-col justify-center h-full w-full p-2">
      <Carousel />
      <h3 className="text-left text-3xl font-bold">Categories</h3>
      <div className="w-full h-[31.25rem] flex items-center justify-start mt-1 p-2 rounded-md">
        <div className="w-1/2 h-full flex flex-col justify-start bg-slate-400 overflow-hidden rounded-sm ">
          <img className="relative object-cover h-full w-full" src={ImageOne} />
          <div className="text-left absolute p-2">
            <h3 className="text-2xl text-white font-bold">Mobile Phones</h3>
            <p className="underline text-white cursor-pointer text-lg">
              Shop Now<i className="fa-solid fa-arrow-right ml-1"></i>
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center h-full ml-2">
          <div className="flex flex-start relative h-[15rem] w-full  mb-2 overflow-hidden rounded-sm">
            <img className="object-cover h-auto w-full" src={ImageTwo} />
            <div className="absolute bottom-1 left-1">
              <h3 className="text-white text-2xl font-bold">Laptops</h3>
              <p className="underline cursor-pointer text-lg text-white">
                Shop Now<i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </div>
          </div>

          <div className="flex flex-start relative h-[15rem] w-full overflow-hidden rounded-sm">
            <img className="object-cover h-auto w-full" src={ImageThree} />
            <div className="absolute bottom-1 left-1">
              <h3 className="text-white text-2xl font-bold">Computers</h3>
              <p className="underline cursor-pointer text-lg text-white">
                Shop Now<i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center p-2">
        <h3 className="text-left text-3xl font-bold">New Arrivals</h3>
        <div className="w-full flex items-center overflow-x-auto">
          <div className="flex flex-nowrap">
            <div className="min-w-[18.75rem] max-w-[25rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md m-4">
              <img src={ImageFour} className="h-64 w-full object-cover" />
              <p className="font-semibold">Samsung A05s</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">₱6,490.00</p>
                <i className="fa-solid text-2xl transition-all duration-500 hover:text-red-500 fa-cart-shopping cursor-pointer"></i>
              </div>
            </div>

            <div className="min-w-[18.75rem] max-w-[25rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md m-4">
              <img src={ImageFour} className="h-64 w-full object-cover" />
              <p className="font-semibold">Samsung A05s</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">₱6,490.00</p>
                <i className="fa-solid text-2xl transition-all duration-500 hover:text-red-500 fa-cart-shopping cursor-pointer"></i>
              </div>
            </div>

            <div className="min-w-[18.75rem] max-w-[25rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md m-4">
              <img src={ImageFour} className="h-64 w-full object-cover" />
              <p className="font-semibold">Samsung A05s</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">₱6,490.00</p>
                <i className="fa-solid text-2xl transition-all duration-500 hover:text-red-500 fa-cart-shopping cursor-pointer"></i>
              </div>
            </div>

            <div className="min-w-[18.75rem] max-w-[25rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md m-4">
              <img src={ImageFour} className="h-64 w-full object-cover" />
              <p className="font-semibold">Samsung A05s</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">₱6,490.00</p>
                <i className="fa-solid text-2xl transition-all duration-500 hover:text-red-500 fa-cart-shopping cursor-pointer"></i>
              </div>
            </div>

            <div className="min-w-[18.75rem] max-w-[25rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md m-4">
              <img src={ImageFour} className="h-64 w-full object-cover" />
              <p className="font-semibold">Samsung A05s</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">₱6,490.00</p>
                <i className="fa-solid text-2xl transition-all duration-500 hover:text-red-500 fa-cart-shopping cursor-pointer"></i>
              </div>
            </div>

            <div className="min-w-[18.75rem] max-w-[25rem] cursor-pointer transition-all duration-500 h-auto p-2 flex-shrink-0 border border-gray-300 rounded-md m-4">
              <img src={ImageFour} className="h-64 w-full object-cover" />
              <p className="font-semibold">Samsung A05s</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">₱6,490.00</p>
                <i className="fa-solid text-2xl transition-all duration-500 hover:text-red-500 fa-cart-shopping cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center h-[18.75rem]">
        <div className="w-1/2 h-full">
          <img
            src={ImageFive}
            className="object-none overflow-hidden h-full w-full"
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
          <p className="underline cursor-pointer text-lg text-black">
            Shop Now<i className="fa-solid fa-arrow-right ml-1"></i>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4 mt-3">
          <div className="flex flex-col overflow-hidden text-center p-2 h-[11.7rem] rounded-md  w-[11.7rem] border border-black">
            <i className="fa-solid fa-truck-fast text-3xl"></i>
            <h3 className="text-lg">Free Shipping</h3>
            <p className="text-sm">
              Get your orders delivered at no extra cost! Enjoy free shipping on
              all purchases above ₱150.00.
            </p>
          </div>

          <div className="flex flex-col overflow-hidden text-center p-2 h-[11.7rem] w-[11.7rem] rounded-md   border border-black">
            <i className="fa-solid fa-award text-3xl"></i>
            <h3 className="text-lg">Money-Back Guarantee</h3>
            <p className="text-sm">
              Shop with confidence! Enjoy a hassle-free 30-day money-back
              guarantee on your purchases.
            </p>
          </div>

          <div className="flex flex-col overflow-hidden text-center p-2 h-[11.7rem] w-[11.7rem] rounded-md   border border-black">
            <i className="fa-solid fa-lock text-3xl"></i>
            <h3 className="text-lg">Secure Payments</h3>
            <p className="text-sm">
              Enjoy peace of mind with our trusted payment options, ensuring
              safe and reliable transactions for all orders above ₱150.00.
            </p>
          </div>

          <div className="flex flex-col text-center overflow-hidden p-2 h-[11.7rem] w-[11.7rem] rounded-md  border border-black">
            <i className="fa-solid fa-phone text-3xl"></i>
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
