import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import Board from "./pages/board";
import List from "./pages/list";
import UserPage from "./pages/user";
import { Layout } from "./Layout";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Board },
      {
        path: "list",
        Component: List,
      },
      {
        path: "user/:id",
        Component: UserPage,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
