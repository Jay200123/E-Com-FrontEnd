import { CustomerNavbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <>
      <main className="flex flex-col justify-between min-h-screen min-w-screen">
        <CustomerNavbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}
