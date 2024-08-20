import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Everything from "./components/HeaderComponents/Everything";
import Header from './components/HeaderComponents/Header';
import About from './components/HeaderComponents/About';
import Contact from './components/HeaderComponents/Contact';
import Body from './components/BodyComponents/Body';
import Footer from './components/FooterComponent/Footer';
import ProductDetails from './components/HeaderComponents/ProductDetails';
import CartPage from './components/CartComponents/CartPage';

const AppLayout = () => {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path: "/everything",
        element: <Everything />,
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/ProductDetails/:productId",
        element: <ProductDetails />
      },
      {
        path:"/cartPage",
        element:<CartPage/>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
