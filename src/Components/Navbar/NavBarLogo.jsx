import logo from "../../../public/asset/Logo Zarvantrip.png";

const NavBarLogo = () => {
  return (
    <div className="bg-[#262630] h-[145px] flex flex-row-reverse justify-center items-center text-white text-[20px]">
      <>
        <img
          src={logo}
          alt="test"
          className="mr-[15px] w-[60px] h-[50px]"
        />
        <span className="tracking-widest">ZARVANTRIP</span>
      </>
    </div>
  );
};

export default NavBarLogo;