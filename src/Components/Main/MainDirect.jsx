
import { useState } from "react";
import direct from "../../../public/asset/mainLogo/direct.png";
import successIcon from "../../../public/asset/Group 691.png";
import Modal from "../Modal";

const MainDirect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-row items-center mb-[30px]">
        <div className="w-[30px] h-[30px] bg-[#6e6e87] shadow-[-5px_-5px_0_0_#262630] rounded-[6px] border border-[#777796] flex justify-center items-center ml-[15px] lg:w-[63px] lg:h-[63px] lg:shadow-[-13px_-13px_0_0_#262630] lg:rounded-[10px]">
          <img src={direct} alt="test" className="lg:w-[29px] lg:h-[29px]" />
        </div>
        <p className="font-bold lg:text-[1.5rem] lg:mr-[10px]">
          تماس با شبکه زروان تریپ
        </p>
      </div>
      <div className="lg:text-[1.5rem] lg:mb-[15px] mb-[20px]">
        <span className="text-[#ff4500]">*</span> دوست داریم نظرات و پیشنهادات
        شما رو بشنویم پیامهایتان را با ما در میان بذارید.
      </div>
      <form>
        <div className="flex flex-col lg:items-start lg:h-[554px] lg:flex-wrap lg:content-between">
          {/* Inputs */}
          <input
            type="text"
            placeholder="* موضوع مورد نظر خود را وارد نمایید"
            className="h-[50px] rounded-[10px] border-0 mb-[10px] placeholder:text-[#bababa] placeholder:pr-[15px] lg:h-[80px] lg:w-1/3 lg:rounded-[18px] lg:mb-[17px]"
          />
          <input
            type="text"
            placeholder="پرهام رحیمی"
            disabled
            className="h-[50px] rounded-[10px] border-0 mb-[10px] placeholder:text-[#ff4500] bg-[#ff440024] border border-[#ff4500] lg:h-[90px] lg:w-1/3 lg:rounded-[18px] lg:mb-[17px]"
          />
          <input
            type="text"
            placeholder="* شماره موبایل خود را وارد نمایید"
            className="h-[50px] rounded-[10px] border-0 mb-[10px] placeholder:text-[#bababa] placeholder:pr-[15px] lg:h-[80px] lg:w-1/3 lg:rounded-[18px] lg:mb-[17px]"
          />
          <input
            type="text"
            placeholder="* ایمیل خود را وارد نمایید"
            className="h-[50px] rounded-[10px] border-0 mb-[10px] placeholder:text-[#bababa] placeholder:pr-[15px] lg:h-[80px] lg:w-1/3 lg:rounded-[18px] lg:mb-[17px]"
          />
          <input
            type="textarea"
            placeholder="توضیحات خود را وارد نمایید..."
            className="lg:order-1 h-[165px] rounded-[10px] border-0 mb-[10px] placeholder:text-[#bababa] lg:h-[385px] lg:w-3/5 lg:rounded-[20px]"
          />
          <button
            type="button"
            onClick={openModal}
            className="self-baseline w-[95px] h-[40px] bg-[#ff4500] rounded-[8px] border-0 text-white lg:w-[209px] lg:h-[65px] lg:rounded-[20px]"
          >
            ارسال پیام
          </button>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col items-center">
          <img src={successIcon} alt="Success" width={150} />
          <h2 className="text-lg font-bold -m-4 mb-2">
            پیام شما با موفقیت ارسال شد
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            مشتری گرامی علیرضا آذرخش عزیز
            <br />
            به زودی با شما تماس گرفته خواهد شد. با تشکر.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default MainDirect;
