import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Board from "./pages/Board";
import List from "./pages/List";
import UserPage from "./pages/User";
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
