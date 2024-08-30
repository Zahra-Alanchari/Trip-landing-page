import linkdin from "../../../public/asset/footerLogo/LinkedIn.png";
import Arrow from "../Icons/Arrow";
import SocialTitle from "../Icons/SocialTitle";
import Insta from "../Icons/MainSocial/Insta";
import Telegram from "../Icons/MainSocial/Telegram";
import WhatsApp from "../Icons/MainSocial/WhatsApp";

const MainSocial = () => {
  return (
    <div className="text-[0.85rem] font-bold w-[343px] h-[391px] mt-[18px] lg:w-full lg:h-full lg:mt-[50px]">
      <>
        <div className="flex flex-row items-center mb-[30px]">
        <div className="w-[30px] h-[30px] bg-[#6e6e87] shadow-[-5px_-5px_0_0_#262630] rounded-[6px] border border-[#777796] flex justify-center items-center ml-[15px] lg:w-[63px] lg:h-[63px] lg:shadow-[-13px_-13px_0_0_#262630] lg:rounded-[10px]">
            
            <SocialTitle/>
          </div>
          <p className="lg:text-base lg:text-[1.5rem] lg:mr-[10px]">
            سوشیال مدیا زروان تریپ
          </p>
        </div>

        <div className="flex flex-col w-[343px] lg:w-full items-center lg:flex-row lg:flex-wrap">
          <div className="bg-white w-full h-[73px] flex flex-row items-center rounded-[10px] mb-[15px] lg:w-[450px] lg:h-[100px] lg:ml-[50px] lg:text-[1.2rem] lg:rounded-[20px] lg:py-[4px]">
            <div className="h-[31px] border-2 border-[#ff4500] bg-black rounded-[15px] lg:h-[51px]"></div>
            <div className="w-[34px] h-[34px] bg-[#b7b7b7] shadow-[-5px_5px_0_0_#262630] rounded-[6px] flex justify-center items-center mx-[15px] border border-white lg:w-[55px] lg:h-[55px] lg:rounded-[12px] lg:shadow-[-13px_13px_0_0_#262630] lg:mx-[25px]">
              {/* <img
                src={insta}
                alt="test"
                className="w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]"
              /> */}
              <Insta/>
            </div>
            <div >
              <h3 className="flex" >Zarvantrip : اینستاگرام</h3>
            </div>
            <div className=" flex justify-end w-1/3 items-end">
              <Arrow/>
            </div>
          </div>

          <div className="bg-white w-full h-[73px] flex flex-row items-center rounded-[10px] mb-[15px] lg:w-[450px] lg:h-[100px] lg:ml-[50px] lg:text-[1.2rem] lg:rounded-[20px] lg:py-[4px]">
            <div className="h-[31px] border-2 border-[#ff4500] bg-black rounded-[15px] lg:h-[51px]"></div>
            <div className="w-[34px] h-[34px] bg-[#b7b7b7] shadow-[-5px_5px_0_0_#262630] rounded-[6px] flex justify-center items-center mx-[15px] border border-white lg:w-[55px] lg:h-[55px] lg:rounded-[12px] lg:shadow-[-13px_13px_0_0_#262630] lg:mx-[25px]">
              {/* <img
                src={telegram}
                alt="test"
                className="w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]"
              /> */}
              <Telegram/>
            </div>
            <div className="w-[124px] lg:w-[180px]">
              <h3>Zarvantrip : تلگرام</h3>
            </div>
            <div className="flex justify-end w-1/3 items-end">
              <Arrow/>
            </div>
          </div>
          <div className="bg-white w-full h-[73px] flex flex-row items-center rounded-[10px] mb-[15px] lg:w-[450px] lg:h-[100px] lg:ml-[50px] lg:text-[1.2rem] lg:rounded-[20px] lg:py-[4px]">
            <div className="h-[31px] border-2 border-[#ff4500] bg-black rounded-[15px] lg:h-[51px]"></div>
            <div className="w-[34px] h-[34px] bg-[#b7b7b7] shadow-[-5px_5px_0_0_#262630] rounded-[6px] flex justify-center items-center mx-[15px] border border-white lg:w-[55px] lg:h-[55px] lg:rounded-[12px] lg:shadow-[-13px_13px_0_0_#262630] lg:mx-[25px]">
              {/* <img
                src={whatsapp}
                alt="test"
                className="w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]"
              /> */}
              <WhatsApp/>
            </div>
            <div className="w-[124px] lg:w-[180px]">
              <h3>Zarvantrip : واتساپ</h3>
            </div>
            <div className="flex justify-end w-1/3 items-end">
              <Arrow/>
            </div>
          </div>

          <div className="bg-white w-full h-[73px] flex flex-row items-center rounded-[10px] mb-[15px] lg:w-[450px] lg:h-[100px] lg:ml-[50px] lg:text-[1.2rem] lg:rounded-[20px] lg:py-[4px]">
            <div className="h-[31px] border-2 border-[#ff4500] bg-black rounded-[15px] lg:h-[51px]"></div>
            <div className="w-[34px] h-[34px] bg-[#b7b7b7] shadow-[-5px_5px_0_0_#262630] rounded-[6px] flex justify-center items-center mx-[15px] border border-white lg:w-[55px] lg:h-[55px] lg:rounded-[12px] lg:shadow-[-13px_13px_0_0_#262630] lg:mx-[25px]">
              <img
                src={linkdin}
                alt="test"
                className="w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]"
              />
            </div>
            <div className="w-[124px] lg:w-[180px]">
              <h3>Zarvantrip : لینکدین</h3>
            </div>
            <div className="flex justify-end w-1/3 items-end">
              <Arrow/>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MainSocial;
