import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import Team from "../Pages/Team";
import TeamDetails from "../Pages/TeamDetails";
import Testimonial from "../Pages/Testimonial";
import ProjectDetails from "../Pages/ProjectDetails";
import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import Blog from "../Pages/Blog";
import BlogSidebar from "../Pages/BlogSidebar";
import BlogDetails from "../Pages/BlogDetails";
import Project from "../Pages/Project";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/about",
            element: <About></About>,
        }, 
        {
          path: "/team",
          element: <Team></Team>,
        }, 
        {
          path: "/team/team-details",
          element: <TeamDetails></TeamDetails>,
        },
        {
          path: "/testimonial",
          element: <Testimonial></Testimonial>,
        },
        {
          path: "/project",
          element: <Project></Project>,
        },           
        {
          path: "/project/project-details",
          element: <ProjectDetails></ProjectDetails>
        }, 
        {
          path: "/service",
          element: <Services></Services>,
        }, 
        {
          path: "/service/service-details",
          element: <ServiceDetails></ServiceDetails>,
        },                   
        {
          path: "/pricing",
          element: <PricingPage></PricingPage>,
        },  
        {
          path: "/faq",
          element: <FaqPage></FaqPage>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        }, 
        {
          path: "/blog/blog-details",
          element: <BlogDetails></BlogDetails>,
        },           
        {
          path: "/blog-sidebar",
          element: <BlogSidebar></BlogSidebar>,
        },              
        {
          path: "/contact",
          element: <Contact></Contact>,
        },                                                              
      ],
    },
    {
      path: 'home2',
      element: <Layout2></Layout2>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        },                           
      ],
    },  
    {
      path: 'home3',
      element: <Layout3></Layout3>,
      children: [
        {
          index: true,
          element: <Home3></Home3>,
        },                           
      ],
    },       
  ]);