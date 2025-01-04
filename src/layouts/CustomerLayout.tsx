import { CustomerNavbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <>
      <main className="flex flex-col justify-between md:min-h-screen md:min-w-screen">
        <CustomerNavbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}
