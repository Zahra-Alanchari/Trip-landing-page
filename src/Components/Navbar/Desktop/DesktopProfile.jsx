import logo from "../../../../public/asset/footerLogo/logo-sample 4.png";

const DesktopProfile = () => {
  return (
    <div className="flex flex-row mr-[20px]">
      <div className="w-[72px] h-[71px] bg-[#424242] flex items-center justify-center rounded-lg">
        <img src={logo} alt="test" className="w-[42px] h-[38px]" />
      </div>
      <div className="flex flex-col rtl text-[1.5rem] font-bold mr-[10px]">
        <span> Zarvantrip </span>
        <span> هتلداری زروان تریپ</span>
      </div>
    </div>
  );
};

export default DesktopProfile;