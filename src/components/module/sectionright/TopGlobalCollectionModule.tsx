import Image from "next/image";

const TopGlobalCollectionModule = () => {
  interface ItemsProps {
    id: number;
    creator_image: string;
    score: number;
    title: string;
    category: string;
    price: string;
    percent: string;
  }
  const items: ItemsProps[] = [
    {
      id: 1,
      creator_image: "/profile8.jpg",
      score: 6,
      title: " Golden Hope Planet v5",
      category: " Art,Collections",
      price: " 924,89 ETH",
      percent: "+88.24%",
    },
    {
      id: 2,
      creator_image: "/profile9.jpg",
      score: 6,
      title: " Golden Hope Planet v5",
      category: " Art,Collections",
      price: " 924,89 ETH",
      percent: "+88.24%",
    },
    {
      id: 3,
      creator_image: "/profile4.jpg",
      score: 6,
      title: " Golden Hope Planet v5",
      category: " Art,Collections",
      price: " 924,89 ETH",
      percent: "+88.24%",
    },
  ];

  return (
    <>
      {items.map((item: ItemsProps) => (
        <div
          key={item.id}
          className="flex flex-row justify-between items-center w-[95%] rounded-xl py-2 px-2"
        >
          <div className="w-fit h-fit relative ">
            <Image
              src={item.creator_image}
              width={500}
              height={500}
              alt="profile"
              className="rounded-full w-10 h-10"
            />
            <div className=" absolute bottom-[-7px] end-2 border-2 border-gray-700 bg-pink-500 rounded-full w-5 h-5 flex justify-center items-center ">
              <p className="text-[10px] text-white font-normal h-full w-full text-center">
                {item.score}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
            <p className="text-white font-medium text-[12px] whitespace-nowrap">
              {item.title}
            </p>

            <p className="text-gray-400 font-normal text-[10px]">
              {item.category}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <Image
              src="/ether.png"
              width={1000}
              height={1000}
              alt="alt"
              className="rounded-full w-4 h-4"
            />
            <div className="flex flex-col">
              <p className="text-gray-100 font-normal text-[10px]">
                {item.price}
              </p>
              <p className="text-green-400 text-[10px]">{item.percent}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopGlobalCollectionModule;
