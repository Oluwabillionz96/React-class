import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import RootLayout from "./Layout/RootLayout";
import ServicesLayout from "./Layout/ServicesLayout";
import Details from "../src/Components/Services/Details/Details"
import ProjectLayout from "./Layout/ProjectLayout";

const App = () => {
  const routes = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="About" element ={<About />}></Route>
      <Route path="Contact" element={<Contact />}></Route>
      <Route path="Services" element={<ServicesLayout />}>
        <Route path=":services" element={<Details />}>
        <Route path=":Project" element={<ProjectLayout />}></Route>
        </Route>
      </Route>
    </Route>
  )
  
   const router = createBrowserRouter(routes);

  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
