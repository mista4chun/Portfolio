import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Side from "../components/Side";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <section >
      <Header />
      <div className="grid h-screen grid-cols-[auto_auto_1fr]">
        <Sidebar />
        <Side />
        <main className="overflow-y-auto  scrollbar-thin scrollbar-thumb-scroll-thumb scrollbar-track-transparent  grid grid-rows-[1fr_auto]">
          <Outlet />
        

          <Footer />
        
        </main>
      </div>
    </section>
  );
}

export default AppLayout;
