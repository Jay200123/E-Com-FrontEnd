import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages";

import { MainLayout } from "./layouts";

export default function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
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
