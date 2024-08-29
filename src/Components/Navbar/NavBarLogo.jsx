import logo from "../../../public/asset/Logo Zarvantrip.png";

const NavBarLogo = () => {
  return (
    <div className="bg-[#262630] h-[145px] flex justify-center items-center text-white text-2xl">
      <>
        <img
          src={logo}
          alt="test"
          className="mr-[15px] w-[60px] h-[50px]"
        />
        <span>ZARVANTRIP</span>
      </>
    </div>
  );
};

export default NavBarLogo;