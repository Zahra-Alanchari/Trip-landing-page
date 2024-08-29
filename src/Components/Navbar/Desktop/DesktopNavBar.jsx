import DesktopProfile from "./DesktopProfile";
import DesktopList from "./DesktopList";
import DesktopIcon from "./DesktopIcon";

const DesktopNavBar = () => {
  return (
    <div className="hidden lg:flex h-[103px] bg-white mb-[100px] justify-center items-center">
      <div className="flex flex-row-reverse items-center justify-between w-full">
        <DesktopIcon />
        <DesktopList />
        <DesktopProfile />
      </div>
    </div>
  );
};

export default DesktopNavBar;