import CardInfo  from "../Dasboard/CardInfo";
import OrderInfo from "./OrderInfo";
import ProductInfo from "./ProductInfo";
import BrandInfo from "./BrandInfo";

export default function () {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <CardInfo />
      <OrderInfo />
      <div className="flex flex-col w-full mt-2 md:flex-row">
        <ProductInfo />
        <BrandInfo />
      </div>
    </div>
  );
}
