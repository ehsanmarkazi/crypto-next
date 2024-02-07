import Image from "next/image";

const DetailsCategory = () => {
  interface DetailsCategoryProps {
    id: number;
    image: string;
    title: string;
    desc: string;
    creator_image: string;
    current_bids: number;
    ending_time: string;
  }
  const categories: DetailsCategoryProps[] = [
    {
      id: 1,
      image: "/bids1.jpg",
      title: " Xu Gaming Mind 003X",
      desc: "Truga Self 03X",
      creator_image: "/profile7.jpg",
      current_bids: 0.256,
      ending_time: "10H 43m 27s",
    },
    {
      id: 2,
      image: "/bids2.jpg",
      title: " Xu Gaming Mind 003X",
      desc: "Truga Self 03X",
      creator_image: "/profile9.jpg",
      current_bids: 0.256,
      ending_time: "10H 43m 27s",
    },
    {
      id: 3,
      image: "/bids3.jpg",
      title: " Xu Gaming Mind 003X",
      desc: "Truga Self 03X",
      creator_image: "/profile8.jpg",
      current_bids: 0.256,
      ending_time: "10H 43m 27s",
    },
    {
      id: 4,
      image: "/bids4.jpg",
      title: " Xu Gaming Mind 003X",
      desc: "Truga Self 03X",
      creator_image: "/profile10.jpg",
      current_bids: 0.256,
      ending_time: "10H 43m 27s",
    },
    {
      id: 5,
      image: "/bids4.jpg",
      title: " Xu Gaming Mind 003X",
      desc: "Truga Self 03X",
      creator_image: "/profile10.jpg",
      current_bids: 0.256,
      ending_time: "10H 43m 27s",
    },
  ];

  return (
    <>
      {categories.map((item: DetailsCategoryProps) => (
        <div
          key={item.id}
          className="max-w-[250px] min-w-[210px] h-[275px] bg-gray-800 rounded-xl flex flex-col justify-between pb-3 items-center"
        >
          <Image
            className="w-full h-[50%] rounded-t-xl rounded-b-md object-cover"
            src={item.image}
            width={500}
            height={500}
            alt="img"
          />
          <h3 className="w-full text-start ms-1 text-white text-[16px]">
            {item.title}
          </h3>
          <div className="w-[96%] flex flex-row justify-between items-center">
            <p className="text-[13px] text-gray-300">{item.desc}</p>
            <Image
              className="size-10 rounded-full object-cover"
              src={item.creator_image}
              width={1000}
              height={1000}
              alt="img"
            />
          </div>
          <div className="w-full mt-3 grid grid-cols-2 gap-y-2 place-content-between place-items-center">
            <p className="text-[12px] text-gray-500 col-span-1 text-start w-full ms-3">
              Current bind
            </p>
            <p className="text-[12px] text-gray-500 col-span-1 w-full text-end me-3">
              Ending in
            </p>
            <div className="flex flex-row justify-start items-center w-full ms-3 gap-2">
              <Image
                src="/ether.png"
                width={1000}
                height={1000}
                alt="alt"
                className="rounded-full size-4 bg-pink-300 p-[1px]"
              />
              <p className="text-[12px] text-gray-500 col-span-1">
                {item.current_bids}
              </p>
            </div>

            <p className="text-[12px] text-gray-500 col-span-1 w-full text-end me-3">
              {item.ending_time}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailsCategory;
