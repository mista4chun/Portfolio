import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function PageTitle() {
    const location = useLocation();

    useEffect(() => {
      // Determine the title based on the current pathname
      const pathTitleMap = {
        "/": "Home",
        "/about": "About",
        "/resume": "Resume",
        "/projects": "Projects",
        "/settings": "Settings",
        "/github": "Github",
        // Add more routes and titles as needed
      };
  
      const pageTitle = pathTitleMap[location.pathname] || "Mista4chun";
      document.title = `Mista4chun | ${pageTitle}`;
  
      // Clean up title when component unmounts
      return () => {
        document.title = "Mista4chun";
      };
    }, [location.pathname]);
  
    return null;
   
}

export default PageTitle
