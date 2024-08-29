import people from "../../../public/asset/navLogo/profile-2user.png";
import calling from "../../../public/asset/navLogo/call-calling.png";
import search from "../../../public/asset/navLogo/search-status.png";
import category from "../../../public/asset/navLogo/category.png";

const NavbarIcons = () => {
  return (
    <>
      <div className="flex flex-row-reverse ml-[15px]">
        <div className="w-[35px] h-[35px] bg-[#94949434] rounded-md mr-[15px] flex items-center justify-center">
          <img src={people} alt="test" />
        </div>

        <div className="w-[35px] h-[35px] bg-[#94949434] rounded-md mr-[15px] flex items-center justify-center">
          <img src={search} alt="test" />
        </div>

        <div className="w-[35px] h-[35px] bg-[#94949434] rounded-md mr-[15px] flex items-center justify-center">
          <img src={calling} alt="test" />
        </div>
      </div>
      <div className="w-[35px] h-[35px] bg-[#94949434] rounded-md mr-[15px] flex items-center justify-center">
        <img src={category} alt="test" />
      </div>
    </>
  );
};

export default NavbarIcons;