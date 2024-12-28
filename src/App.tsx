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
