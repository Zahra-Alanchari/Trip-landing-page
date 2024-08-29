import enamad from "../../../public/asset/footerLogo/Logo Enamad 1.png";
import arrow from "../../../public/asset/footerLogo/arrow-up.png";

const FooterEnamad = () => {
  return (
    <div className="flex justify-between my-4 items-end gap-10">
      <button className="hidden lg:flex justify-center items-center p-4 bg-[#ff4500] text-white rounded-lg lg:text-xs xl:text-lg lg:font-medium xl:font-bold text-[1.4rem] w-1/3 max-h-20">
        <p className="px-5 w-full">برو به بالا</p>
        <img src={arrow} alt="arrow" />
      </button>
      <div className="flex items-center justify-between gap-4 w-full">
        <span className=" lg:aspect-square bg-white lg:max-h-24 flex justify-center items-center rounded-lg w-full">
          <img src={enamad} alt="e-namad-logo" />
        </span>
        <span className=" lg:aspect-square bg-white lg:max-h-24 flex justify-center items-center rounded-lg w-full">
          <img src={enamad} alt="e-namad-logo" />
        </span>
        <span className=" lg:aspect-square bg-white lg:max-h-24 flex justify-center items-center rounded-lg w-full">
          <img src={enamad} alt="e-namad-logo" />
        </span>
        <span className=" lg:aspect-square bg-white lg:max-h-24 flex justify-center items-center rounded-lg w-full">
          <img src={enamad} alt="e-namad-logo" />
        </span>
      </div>
    </div>
  );
};

export default FooterEnamad;
