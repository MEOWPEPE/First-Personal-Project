import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { BottomNav } from "../components/BottomNav";

export function Layout() {
  return (
    <div>
      <Navbar />
      <section className="bg-amber-200 flex justify-center">
        <Outlet />
      </section>
      <BottomNav/>
    </div>
  );
}
