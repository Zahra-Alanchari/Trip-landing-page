import { useState, useEffect } from "react";
import FooterProfile from "./FooterProfile";
import FooterDescription from "./FooterDescription";
import FooterEnamad from "./FooterEnamad";
import FooterAddress from "./FooterAddress";
import FooterList from "./FooterList";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const largeScreenWidth = 1024;

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= largeScreenWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-[#262630] border-t-[8px] border-[#ff4500] p-[25px] flex flex-col lg:flex-row overflow-hidden">
        <div className="flex flex-col justify-between lg:w-full">
          <FooterProfile />
          <FooterDescription />
          {isLargeScreen && <FooterList />}
        </div>
        <div className="flex flex-col lg:w-full justify-between">
          <FooterAddress />
          <FooterEnamad />
          {!isLargeScreen && <FooterList />}
        </div>
      </div>
      <FooterCopyRight />
    </>
  );
};

export default Footer;
