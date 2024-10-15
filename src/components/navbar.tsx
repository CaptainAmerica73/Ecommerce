import { useEffect, useState } from "react";
import { auth } from "../Config";

export default function Navbar(props) {
  const [navbar, setNavbar] = useState<JSX.Element[]>();
  const navbaritems = {
    Profile: "/profile",
    Dashboard: "/",
    Products: "/products",
    Settings: "/settings",
  };

  const Signout = () => {
    auth.signOut().then(() => alert("Signout Successful"));
  };

  useEffect(() => {
    const items: JSX.Element[] = [];
    for (const i in navbaritems) {
      items.push(
        <div
          key={i}
          onClick={() => location.assign(navbaritems[i])}
          className="bg-blue-300 p-[.8vw] min-w-[8vw] hover:bg-blue-200 cursor-pointer rounded-[10vw] flex justify-center items-center"
        >
          {i}
        </div>
      );
    }
    setNavbar(items);
  }, []);
  console.log(props);

  return (
    <>
      <div className="w-[100vw] min-h-[8vh] z-10 sticky top-0 bg-blue-500 flex items-center justify-between">
        <div className="ml-[10%] text-[max(2vw,1rem)]">
          {auth.currentUser?.displayName}
        </div>
        <div className="flex mr-[5%] text-[max(1.2vw,.5rem)] font-semibold justify-center items-center gap-[5%]">
          {navbar}
          <div
            onClick={() => {
              if (auth.currentUser?.displayName) {
                Signout();
              }
              props.setPageToggle(!props.pageToggle);
            }}
            className="bg-blue-300 p-[.8vw] min-w-[8vw] hover:bg-blue-200 cursor-pointer rounded-[10vw] flex justify-center items-center"
          >
            {auth.currentUser?.displayName ? "Logout" : "Login"}
          </div>
        </div>
      </div>
    </>
  );
}
