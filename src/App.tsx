import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  UserHome,
  SignIn,
  SignUp,
  MobileProducts,
  ComputerProducts,
  LaptopProducts,
  Profile,
  ProductDetails,
  Checkout,
  Cart,
  Shop,
} from "./pages";

import { ProtectedRoute } from "./components";

import { MainLayout, ProductLayout, CustomerLayout } from "./layouts";

export default function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route element={<ProductLayout />}>
          <Route path="/products/mobiles" element={<MobileProducts />} />
          <Route path="/products/laptops" element={<LaptopProducts />} />
          <Route path="/products/computers" element={<ComputerProducts />} />
          <Route path="/shop" element={<Shop />} />
        </Route>

        {/* Customer Layout */}
        <Route element={<CustomerLayout />}>
          <Route path="/users" element={<UserHome />} />
          <Route path="/user/profile" element={<Profile />} />

          <Route element={<ProductLayout />}>
            <Route
              path="/user/products/mobiles"
              element={
                <ProtectedRoute userRole={["User"]}>
                  <MobileProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/products/laptops"
              element={
                <ProtectedRoute userRole={["User"]}>
                  <LaptopProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/products/computers"
              element={
                <ProtectedRoute userRole={["User"]}>
                  <ComputerProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/products/computers"
              element={
                <ProtectedRoute userRole={["User"]}>
                  <ComputerProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/shop"
              element={
                <ProtectedRoute userRole={["User"]}>
                  <Shop />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route
            path="/user/product/:id"
            element={
              <ProtectedRoute userRole={["User"]}>
                <ProductDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user/cart"
            element={
              <ProtectedRoute userRole={["User"]}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/checkout"
            element={
              <ProtectedRoute userRole={["User"]}>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/cart"
            element={
              <ProtectedRoute userRole={["User"]}>
                <Cart />
              </ProtectedRoute>
            }
          />
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
