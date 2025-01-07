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
  EditProfile,
  OrderDetails,
  Dashboard,
  UserTable,
  GetUserById,
  ProductTable,
  CreateProduct,
  EditProduct,
  OrderTable,
} from "./pages";

import { ProtectedRoute } from "./components";

import {
  MainLayout,
  ProductLayout,
  CustomerLayout,
  AdminLayout,
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
          <Route
            path="/users"
            element={
              <ProtectedRoute userRole={["User"]}>
                <UserHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/profile"
            element={
              <ProtectedRoute userRole={["User"]}>
                <Profile />
              </ProtectedRoute>
            }
          />

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
          <Route
            path="/user/edit/profile"
            element={
              <ProtectedRoute userRole={["User"]}>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/order/detail/:id"
            element={
              <ProtectedRoute userRole={["User"]}>
                <OrderDetails />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Admin Layout */}
        <Route element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute userRole={["Admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/table"
            element={
              <ProtectedRoute userRole={["Admin"]}>
                <UserTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/:id"
            element={
              <ProtectedRoute userRole={["Admin"]}>
                <GetUserById />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/table"
            element={
              <ProtectedRoute userRole={["Admin"]}>
                <ProductTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/create"
            element={
              <ProtectedRoute userRole={["Admin"]}>
                <CreateProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/edit/:id"
            element={
              <ProtectedRoute userRole={["Admin"]}>
                <EditProduct />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders/table"
            element={
              <ProtectedRoute userRole={["Admin"]}>
                <OrderTable />
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
