import { BottomUserWidget } from "./sidebar/BottomUserWidget";
import { NavBar } from "./landing/NavBar";
import { NavBarV3 } from "./sidebar/SideNav";

interface Props {
  children: JSX.Element[] | JSX.Element;
};

export const LayoutV2 = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className="overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          {/*
            Left side
          */}
          <div className="block fixed">
           <NavBarV3 />
            {/*
              Bottom User
            */}
            <BottomUserWidget />
          </div>
          {/*
            Right side
          */}
          <div className="pl-[19.5rem] mt-5">
            <main className="max-w-3xl mx-auto">
              {/*
                Main content
              */}
              { children }
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
