import People from "../Icons/People";
import Vector from "../Icons/Vector";
import Text from "../Icons/Text";
import Call from "../Icons/Call";
import Category from "../Icons/Category";

const NavbarIcons = () => {
  return (
    <div className="flex flex-row-reverse justify-between w-full m-[10px]">
      <div className="flex flex-row-reverse gap-2 items-center">
        <People />
        <Vector />
        <Text />
        <Call />
      </div>
      <Category />
    </div>
  );
};

export default NavbarIcons;
