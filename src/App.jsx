import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";

import { ErrorPage } from "./components/Error/ErrorPage";
import { Classic } from "./components/Classic/Classic";
import { Casual } from "./components/Casual/Casual";

function App() {
  const Routing = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/Classic",
          element: <Classic />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/Casual",
          element: <Casual />,
        },
      ],
    },
  ]);
  return <RouterProvider router={Routing} />;
}

export default App;
