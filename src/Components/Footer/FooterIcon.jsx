import linkdin from "../../../public/asset/footerLogo/LinkedIn.png";
import whatsapp from "../../../public/asset/footerLogo/Whatsapp.png";
import insta from "../../../public/asset/footerLogo/insta.png";
import telegram from "../../../public/asset/footerLogo/Vector.png";
import arrow from "../../../public/asset/footerLogo/arrow-up.png";

export const FooterIcon = () => {
  return (
    <div className="grid grid-cols-5 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-5 lg:gap-7 mb-4 lg:mb-0 lg:w-1/3">
      <span className="flex lg:hidden justify-center items-center p-3 bg-[#ff4500] text-white rounded-lg font-bold text-[1.4rem]">
        <img src={arrow} alt="arrow" width={40} />
      </span>
      <span className="aspect-auto bg-[#343445] rounded-lg flex justify-center items-center p-3 lg:p-7">
        <img src={telegram} alt="telegram" width={40} />
      </span>
      <span className="aspect-auto bg-[#343445] rounded-lg flex justify-center items-center p-3 lg:p-7">
        <img width={40} src={whatsapp} alt="whatsapp" />
      </span>
      <span className="aspect-auto bg-[#343445] rounded-lg flex justify-center items-center p-3 lg:p-7">
        <img width={40} src={linkdin} alt="linkdin" />
      </span>
      <span className="aspect-auto bg-[#343445] rounded-lg flex justify-center items-center p-3 lg:p-7">
        <img width={40} src={insta} alt="insta" />
      </span>
    </div>
  );
};
