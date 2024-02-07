import Image from "next/image";
import { Email, Search } from "../../svg";

const Header = () => {
  return (
    <div className=" flex flex-row justify-start items-center gap-3 w-full px-1 h-[75px] ">
      <div className="relative  h-[40px] w-fit mx-1">
        <input
          className=" w-full h-[35px] rounded-xl px-1 bg-gray-700 text-sm"
          placeholder="Search"
        />
        <Search className="absolute fill-white end-1 top-[8px] w-5 h-5" />
      </div>
      <Email className="w-6 h-6 fill-white" />
      <Image
        src="/profile1.jpg"
        className=" object-cover rounded-full w-10 h-10"
        width={1000}
        height={1000}
        alt="profile"
      />
    </div>
  );
};

export default Header;
