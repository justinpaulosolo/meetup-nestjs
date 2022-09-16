//import { Outlet } from "react-router-dom";
import { NavbarV2 } from "./Landing/NavbarV2";
import { SideNav } from "./sidebar/SideNav";
interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <main className="App">
      <NavbarV2 />
      <div className="flex">
        <aside className="h-screen sticky top-1/2">
          <SideNav />
        </aside>
        <main className="overflow-clip">
          { children }
        </main>
      </div>
    </main>
  );
};
