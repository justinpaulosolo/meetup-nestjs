import { Outlet } from "react-router-dom";
import { NavbarV2 } from "./Landing/NavbarV2";
import { SideNav } from "./sidebar/SideNav";

export const Layout = () => {
  return (
    <main className="App">
      <NavbarV2 />
      <div className="flex">
        <aside className="h-screen fixed top-1/2">
          <SideNav />
        </aside>
        <main className="overflow-clip">
          <Outlet />
        </main>
      </div>
    </main>
  );
};
