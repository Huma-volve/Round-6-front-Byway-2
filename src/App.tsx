import { RouterProvider, createBrowserRouter } from "react-router";
import { Layout, NotFound } from "./layout";
import { routes } from "./routes/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: routes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
