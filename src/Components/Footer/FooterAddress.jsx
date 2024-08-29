import location from "../../../public/asset/footerLogo/location.png";
import call from "../../../public/asset/footerLogo/call-calling.png";
import msg from "../../../public/asset/footerLogo/sms.png";
import { FooterIcon } from "./FooterIcon";

const FooterAddress = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-7">
      <div className="flex flex-col gap-4 lg:w-full">
        <div className="flex gap-4 w-full">
          <span className="w-1/5  bg-[#ff4500] rounded-lg flex justify-center items-center lg:w-[65px] lg:h-[65px]">
            <img
              src={location}
              alt="test"
              className="lg:w-[35px] lg:h-[35px]"
            />
          </span>
          <div className="text-white w-full flex text-xs lg:text-sm rounded-lg h-[52px] bg-[#343445] items-center justify-start lg:h-[65px] px-4">
            بلوار فردوس خیابان ولیعصر کوچه تقدیری شرقی پلاک 6 واحد 7
          </div>
        </div>
        <div className="flex gap-4">
          <span className="w-1/5  bg-[#ff4500] rounded-lg flex justify-center items-center lg:w-[65px] lg:h-[65px]">
            <img src={call} alt="test" className="lg:w-[35px] lg:h-[35px]" />
          </span>
          <div className="text-white w-full flex text-xs lg:text-sm rounded-lg h-[52px] bg-[#343445] items-center justify-start lg:h-[65px] px-4">
            021 - 7756938
          </div>
        </div>
        <div className="flex gap-4">
          <span className="w-1/5  bg-[#ff4500] rounded-lg flex justify-center items-center lg:w-[65px] lg:h-[65px]">
            <img src={msg} alt="test" className="lg:w-[35px] lg:h-[35px]" />
          </span>
          <div className="text-white w-full flex text-xs lg:text-sm rounded-lg h-[52px] bg-[#343445] items-center justify-start lg:h-[65px] px-4">
            Zarvantrip@gmail.com
          </div>
        </div>
      </div>
      <FooterIcon />
    </div>
  );
};

export default FooterAddress;
