import bg from "../../../public/asset/navLogo/Rectangle 926.png"
import icon1 from "../../../public/asset/boxIcon/Group 1165.png"
import icon2 from "../../../public/asset/boxIcon/Vector 107.png"
import icon3 from "../../../public/asset/boxIcon/Ellipse 650.png"
import icon4 from "../../../public/asset/boxIcon/Ellipse 648.png"
import icon5 from "../../../public/asset/boxIcon/Ellipse 646.png"

const MainVector = () => {
  return (
    <div className="hidden w-full lg:block lg:relative  overflow-hidden">
      <img className="w-full" src={bg} alt="test" />
      <h3 className="text-white text-[40px] absolute top-[40%] left-[45%]">
        تماس با زروان تریپ
      </h3>
      <img className=" absolute top-[20%] left-[43%]" src={icon1} alt="test" />
      <img className=" absolute top-[70%] right-[32%]" src={icon2} alt="test" />
      <img className=" absolute top-[-16%] left-[58%]" src={icon3} alt="test" />
      <img
        className="rotate-180 absolute top-[65%] left-[28%]"
        src={icon3}
        alt="test"
      />
      <img
        className="rotate-180 absolute top-[45%] left-[89%]"
        src={icon4}
        alt="test"
      />
      <img className=" absolute top-[-20%] left-[-1%]" src={icon4} alt="test" />
      <img className=" absolute top-[35%] left-[27%]" src={icon5} alt="test" />
      <img className=" absolute top-[60%] left-[77%]" src={icon5} alt="test" />
    </div>
  );
};

export default MainVector;
