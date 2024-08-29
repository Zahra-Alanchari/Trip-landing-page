
import people from "../../../../public/asset/navLogo/profile-2userwhite.png";
import calling from "../../../../public/asset/navLogo/call-callingwhite.png";
import star from "../../../../public/asset/navLogo/star.png";

const DesktopIcon = () => {
  return (
    <div className="flex flex-row ml-[20px]">
      <span className="w-[55px] h-[55px] bg-[#262630] flex justify-center items-center ml-[10px] rounded-lg">
        <img src={calling} alt="test" className="w-[25px] h-[25px]" />
      </span>
      <span className="w-[55px] h-[55px] bg-[#262630] flex justify-center items-center ml-[10px] rounded-lg">
        <img src={star} alt="test" className="w-[25px] h-[25px]" />
      </span>
      <span className="w-[169px] h-[54px] bg-[#262630] flex flex-row justify-center items-center rounded-lg text-white text-[1rem] font-bold">
        <img src={people} alt="test" className="ml-[5px]" />
        <p>ورود به حساب</p>
      </span>
    </div>
  );
};

export default DesktopIcon;
