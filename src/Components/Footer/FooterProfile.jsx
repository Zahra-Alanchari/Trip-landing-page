import logo from "../../../public/asset/footerLogo/logo-sample 4.png";

const FooterProfile = () => {
  return (
    <div className="flex flex-row gap-4 lg:text-[1.8rem]">
      <div className="h-[58px] bg-[#343445] rounded-lg flex justify-center items-center border-2 border-[#444457] aspect-square lg:h-[85px]">
        <img src={logo} alt="" className="lg:w-[51px] lg:h-[48px]" />
      </div>
      <div className="flex flex-col items-start text-white ">
        <span>زروان تریپ</span>
        <span>Agency Zarvantrip Hotel</span>
      </div>
    </div>
  );
};

export default FooterProfile;
