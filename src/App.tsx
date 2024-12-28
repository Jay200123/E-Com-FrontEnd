import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  SignIn,
  SignUp,
  MobileProducts,
  ComputerProducts,
  LaptopProducts,
  Profile,
} from "./pages";

import { 
  MainLayout,
  ProductLayout
} from "./layouts";

export default function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sample/profile" element={<Profile />} />
        </Route>

        <Route element={<ProductLayout />}>
          <Route path="/products/mobiles" element={<MobileProducts />} />
          <Route path="/products/laptops" element={<LaptopProducts />} />
          <Route path="/products/computers" element={<ComputerProducts />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
