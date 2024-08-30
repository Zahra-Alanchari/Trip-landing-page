import Telegram from "../Icons/MainSocial/Telegram";
import Insta from "../Icons/MainSocial/Insta";
import WhatsApp from "../Icons/MainSocial/WhatsApp";
import Linkdin from "../Icons/MainSocial/Linkdin";
import Arrow from "../Icons/MainFooter/Arrow";

export const FooterIcon = () => {
  return (
    <div className="grid grid-cols-5 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-5 lg:gap-7 mb-4 lg:mb-0 lg:w-1/3">
      <span className="flex lg:hidden justify-center  items-center p-3 bg-[#ff4500] text-white rounded-lg font-bold text-[1.4rem]">
        <Arrow/>
      </span>
      <span className="aspect-auto bg-[#343445] rounded-lg flex justify-center items-center p-3 lg:p-3">
        <Linkdin/>
      </span>
      <span className="aspect-auto bg-[#343445] rounded-lg flex justify-center items-center p-3 lg:p-3">
        <WhatsApp/>
      </span>
      <span className="aspect-auto bg-[#343445] rounded-lg flex justify-center items-center p-3 lg:p-3">
        <Insta/>

      </span>
      <span className="aspect-auto bg-[#343445] rounded-lg flex justify-center items-center p-3 lg:p-3">
      <Telegram/>
      </span>
    </div>
  );
};
