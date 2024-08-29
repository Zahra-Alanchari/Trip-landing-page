
import DesktopNavBar from "./Desktop/DesktopNavBar";
import NavBarLogo from "./NavBarLogo";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:min-w-full lg:h-full lg:hidden">
        <NavBarLogo />
        <div className="flex justify-center relative -top-[25px]">
          <div className="bg-white rounded-lg w-[343px] h-[53px] flex flex-row-reverse items-center justify-between">
            <NavbarIcons />
          </div>
        </div>
      </div>
      <DesktopNavBar />
    </>
  );
};

export default Navbar;
