import { AdminSideBar, AdminNavbar } from "../components";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <>
      <main className="flex items-center w-full md:h-full">
        <div className="hidden md:block h-full w-[15%]">
          <AdminSideBar />
        </div>
        <div className="w-[85.5%] h-screen overflow-y-auto">
          <AdminNavbar />
          <Outlet />
        </div>
      </main>
    </>
  );
}
