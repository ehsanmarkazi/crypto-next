import Image from "next/image";
import { Control } from "../../svg";

const MyTopItems = () => {
  interface ItemsProps {
    id: number;
    image: string;
    title: string;
    price: string;
  }
  const items: ItemsProps[] = [
    {
      id: 1,
      image: "/nft1.jpg",
      title: " Golden Hope Planet v5",
      price: "  924,89 ETH",
    },
    {
      id: 2,
      image: "/ntf2.jpg",
      title: " Golden Hope Planet v5",
      price: "  924,89 ETH",
    },
    {
      id: 3,
      image: "/nft3.jpg",
      title: " Golden Hope Planet v5",
      price: "  924,89 ETH",
    },
  ];

  return (
    <>
      {items.map((item: ItemsProps) => (
        <div
          key={item.id}
          className="flex flex-row justify-between items-center w-[95%] bg-gray-700 rounded-xl py-2 px-2"
        >
          <Image
            src={item.image}
            width={500}
            height={500}
            alt="profile"
            className="rounded-xl w-11 h-11"
          />
          <div className="flex flex-col justify-start items-center">
            <p className="text-white font-medium text-[14px]">{item.title}</p>
            <div className="w-full flex flex-row justify-start items-center gap-2">
              <Image
                src="/ether.png"
                width={1000}
                height={1000}
                alt="alt"
                className="rounded-full w-4 h-4 bg-pink-300 p-[1px]"
              />
              <p className="text-gray-400 font-normal text-[12px]">
                {item.price}
              </p>
            </div>
          </div>
          <Control className="fill-white w-5 h-5" />
        </div>
      ))}
    </>
  );
};

export default MyTopItems;
