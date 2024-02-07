import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="relative w-[98%] h-[250px]">
        <Image
          className="w-[98%] h-[250px] rounded-2xl mt-2"
          src="/header.jpg"
          width={1000}
          height={1000}
          alt="img"
        />
        <div className="absolute start-10 top-[15px] flex flex-col justify-start  gap-4 items-center h-fit w-full">
          <div className="absolute bg-white/30 end-24 w-[350px] h-[300px] p-4 backdrop-blur-md flex flex-col justify-start items-center gap-5 rounded-md">
            <Image
              className="w-full h-[175px] rounded-md"
              src="/object2.jpg"
              width={1000}
              height={1000}
              alt="img"
            />
            <button className="w-full rounded-md py-5 bg-gradient-to-r from-pink-300 to-pink-700 text-white ">
              Place a bid
            </button>
          </div>
          <h1 className=" font-extrabold text-white text-[24px] text-start w-full">
            Hottest bid of the day
          </h1>
          <h1 className=" font-extrabold text-white text-[32px]  text-start w-full">
            Sphere of Happiness
          </h1>
          <p className=" font-medium text-gray-100 text-[18px] text-start w-full mt-[-10px]">
            Apes v3 Trinidad Psyco f11
          </p>
          <div className="flex flex-row justify-start items-center relative w-full mt-10">
            <Image
              src="/profile2.jpg"
              className=" object-cover rounded-full start-32 w-12 h-12 absolute z-10 border-[2px] border-stone-700"
              width={1000}
              height={1000}
              alt="profile"
            />
            <Image
              src="/profile3.jpg"
              className=" object-cover rounded-full start-24 w-12 h-12 absolute z-20 border-[2px] border-stone-700"
              width={1000}
              height={1000}
              alt="profile"
            />
            <Image
              src="/profile4.jpg"
              className=" object-cover rounded-full start-16 w-12 h-12 absolute z-30 border-[2px] border-stone-700"
              width={1000}
              height={1000}
              alt="profile"
            />
            <Image
              src="/profile5.jpg"
              className=" object-cover rounded-full start-8 w-12 h-12 absolute z-40 border-[2px] border-stone-700"
              width={1000}
              height={1000}
              alt="profile"
            />
            <Image
              src="/profile6.jpg"
              className=" object-cover rounded-full w-12 h-12  start-0 z-50 absolute border-[2px] border-stone-700"
              width={1000}
              height={1000}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
