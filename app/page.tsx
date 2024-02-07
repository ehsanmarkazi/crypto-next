"use client";
import Header from "@/src/components/module/HeaderModule";
import Category from "@/src/components/module/CategoryModule";
import DetailsCategory from "@/src/components/module/DetailsCategoryModule";
import SectionRight from "@/src/components/templates/SectionRight";

export default function Home() {
  return (
    <div className=" bg-gray-900 w-screen flex flex-row justify-start items-center overflow-clip ">
      <div className="w-[80%] h-full flex flex-col justify-start items-center">
        <Header />
        <h1 className="text-gray-200 text-[22px] text-start w-[98%] mt-10 font-bold">
          Hot Categories
        </h1>
        <Category />
        <div className="w-fit h-fit mt-5 flex flex-row justify-start items-center gap-5">
          <DetailsCategory />
        </div>
      </div>
      <SectionRight />
    </div>
  );
}
