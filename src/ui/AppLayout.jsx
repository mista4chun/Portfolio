import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Side from "../components/Side";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <section className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="grid grid-cols-[auto_auto_1fr]">
        <Sidebar />
        <Side />
        <div className="scrollbar-thin scrollbar-thumb-scroll-thumb scrollbar-track-transparent grid max-h-[100vh] overflow-y-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default AppLayout;
