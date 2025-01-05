import { AdminSideBar, AdminNavbar } from "../components";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <>
      <main className="flex items-center w-full">
        <div className="hidden md:block w-[15%] border ">
          <AdminSideBar />
        </div>
        <div className="w-full md:w-[85.5%] h-screen overflow-y-auto border">
          <AdminNavbar />
          <Outlet />
        </div>
      </main>
    </>
  );
}
