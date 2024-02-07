import Image from "next/image";
import Header from "../module/sectionright/HeaderSectionModule";
import ChartModule from "../module/sectionright/ChartModule";
import { Arrow } from "../svg";
import MyTopItems from "../module/sectionright/MyTopItemsModule";
import TopGlobalCollectionModule from "../module/sectionright/TopGlobalCollectionModule";

const SectionRight = () => {
  return (
    <div className="w-[20%] h-full bg-gray-800 shadow-lg flex flex-col gap-1  justify-start items-center">
      <Header />
      <ChartModule />
      <div className=" w-[95%] flex flex-row justify-between items-center py-2">
        <p className="text-white font-medium">My Top Items</p>
        <Arrow className="fill-white w-5 h-5" />
      </div>
      <MyTopItems />
      <div className=" w-[95%] flex flex-row justify-between items-center py-2">
        <p className="text-white font-medium">Top Global Collection</p>
        <Arrow className="fill-white w-5 h-5" />
      </div>
      <TopGlobalCollectionModule />
    </div>
  );
};

export default SectionRight;
