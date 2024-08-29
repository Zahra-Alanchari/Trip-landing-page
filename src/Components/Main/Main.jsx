import MainInfo from "./MainInfo";
import MainSocial from "./MainSocial";
import MainDirect from "./MainDirect";
import MainVector from "./MainVector";

const Main = () => {
  return (
    <div className="flex   flex-col items-center lg:mx-[40px] ">
      <MainVector />
      <MainInfo />

      <MainSocial />
      <div className=" w-[343px] h-[588px] my-[18px] lg:w-full lg:h-[689px] lg:my-[68px] lg:mb-[100px]">
        <MainDirect />
      </div>
    </div>
  );
};

export default Main;
