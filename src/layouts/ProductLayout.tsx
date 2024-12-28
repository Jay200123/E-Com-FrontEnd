import { ProductSidebar } from "../components";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <>
      <main className="flex items-center w-screen">
        <div className="w-[12.5%] ">
          <ProductSidebar />
        </div>
        <div className="w-[87.5%]">
          <Outlet />
        </div>
      </main>
    </>
  );
}
