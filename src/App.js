
import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js';
import Body from './components/Body.js';
import RestaurantCard from './components/RestaurantCard.js';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu.js';
//import Grocery from './components/Grocery.js';


const About = lazy(() => import("./components/About.js"));
const Grocery = lazy (() => import("./components/Grocery.js"));

const AppLayout = () => {
       
    return ( 
     <div className="app">
        < Header />
        < Outlet />
      </div>

      
)

}

const appRouter = createBrowserRouter([


  { path:"/",
    element: <AppLayout />,
    children:[ 

      { path:"/",
        element: <Body />,
       },
      { path:"/about",
        element: <Suspense fallback="Loading..."><About /></Suspense>,
       },
  
      { path:"/contact",
        element: <Contact />,
       },
      { path:"/restaurants/:resId",
        element: <RestaurantMenu />,
       },
      { path:"/grocery",
        element: <Suspense fallback="Loading..."><Grocery /></Suspense>,
       }
      
      ],
    errorElement: <Error />,
  }

  
  



])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter} />);





