import tehran from "../../../public/asset/Rectangle 6009.jpg"

const MainInfo = () => {
    return (
        <div className="flex text-[0.85rem]  lg:mt-[100px]  lg:flex-row w-full  lg:h-[302px] lg:justify-between lg:text-[0.9rem] flex-col-reverse items-center  ">
        <div className=" gap-8 p-3   w-[343px] h-[357px] flex flex-col bg-white justify-around lg:justify-around rounded-[16px] lg:flex-wrap lg:flex-col-reverse lg:w-3/5 lg:h-full">
          <div className=" flex flex-row  justify-between lg:flex-col ">
            <div className="flex flex-col gap-y-0.5 lg:mb-[30px]">
              <div className="flex flex-row items-center">
                <div className="mx-[10px] h-[22px] rounded-[15px] border-2 border-[#ff4500]"></div>
                <span className="font-bold">شماره تماس 1 :</span>
              </div>
              <div className="flex flex-row items-center">
                <div className="mx-[10px] h-[26px] rounded-[15px] border-2 border-[#e7e7e7]"></div>
                <p style={{direction:"ltr"}}className="font-bold text-[#5f5f5f]">021 - 22347608</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-0.5 lg:mb-[10px]">
              <div className="flex flex-row items-center">
                <div className="mx-[10px] h-[22px] rounded-[15px] border-2 border-[#ff4500]"></div>
                <span className="font-bold">شماره تماس 2 :</span>
              </div>
              <div className="flex flex-row items-center">
                <div className="mx-[10px] h-[26px] rounded-[15px] border-2 border-[#e7e7e7]"></div>
                <p style={{direction:"ltr"}} className="font-bold text-[#5f5f5f]">021 - 22347613</p>
              </div>
            </div>
          </div>
          <div className="lg:order-[-1]">
            <div className="flex flex-col gap-y-0.5">
              <div className="flex flex-row items-center">
                <div className="mx-[10px] h-[22px] rounded-[15px] border-2 border-[#ff4500]"></div>
                <span className="font-bold">شماره همراه :</span>
              </div>
              <div className="flex flex-row items-center">
                <div className="mx-[10px] h-[26px] rounded-[15px] border-2 border-[#e7e7e7]"></div>
                <p style={{direction:"ltr"}} className="font-bold text-[#5f5f5f]">+98 - 9912346052</p>
              </div>
            </div>
          </div>

          <div>
            <div className=" flex flex-col gap-y-0.5 lg:mt-[30px]">
              <div className=" flex flex-row items-center">
                <div className="mx-[10px]  h-[22px] rounded-[15px] border-2 border-[#ff4500]"></div>
                <span className="font-bold">آدرس شرکت :</span>
              </div>
              <div className="flex flex-row items-center">
                <div className="mx-[10px] h-[48px] rounded-[15px] border-2 border-[#e7e7e7]"></div>
                <p className="font-bold text-[#5f5f5f]">
                  تهران، بلوار فردوس، خیابان تقدیری شرقی، پلاک 6، واحد 7
                </p>
              </div>
            </div>
          </div>

          <div className="text-[0.7rem] lg:text-[0.9rem] font-medium order-2 bg-[#262630] text-white h-[45px] w-4/5 self-center flex items-center justify-center rounded-[10px] lg:w-2/4 lg:h-[74px] relative ">
            (ساعات پاسخگوئی 24 ساعته, 7 روز هفته)
          </div>
        </div>
        <div className="w-[343px] h-[220px] bg-white rounded-[16px] flex items-center justify-center mb-[20px] lg:w-1/3 lg:h-[302px]">
          <img
            className=" p-[10px] lg:p-[15px] w-full h-full lg:w-full lg:h-full"
            src={tehran}
            alt="test"
          />
        </div>
      </div>
    );
};

export default MainInfo;