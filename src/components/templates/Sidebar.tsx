"use client";
import { useContext } from "react";
import { SideBarContext } from "@/src/components/context/SidebarContext";
import {
  Arrow,
  Logo,
  Logout,
  Home,
  Help,
  Shop,
  Terms,
  Analyze,
  Wallet,
} from "../svg";

export const Sidebar = () => {
  const { isCollapsed, toggleCollapseHandler } = useContext(SideBarContext);

  interface ItemProps {
    id: number;
    title: string;
    icon: JSX.Element;
  }

  const Items: ItemProps[] = [
    {
      id: 1,
      title: "Home",
      icon: (
        <Home className="w-6 h-6 fill-gray-400 group-hover:fill-gray-200" />
      ),
    },
    {
      id: 2,
      title: "Help",
      icon: (
        <Help className="w-6 h-6 fill-gray-400 group-hover:fill-gray-200" />
      ),
    },
    {
      id: 3,
      title: "Shop",
      icon: (
        <Shop className="w-6 h-6 fill-gray-400 group-hover:fill-gray-200" />
      ),
    },
    {
      id: 4,
      title: "Trends",
      icon: (
        <Analyze className="w-6 h-6 fill-gray-400 group-hover:fill-gray-200" />
      ),
    },
    {
      id: 5,
      title: "Terms",
      icon: (
        <Terms className="w-6 h-6 fill-gray-400 group-hover:fill-gray-200" />
      ),
    },
    {
      id: 6,
      title: "Wallet",
      icon: (
        <Wallet className="w-6 h-6 fill-gray-400 group-hover:fill-gray-200" />
      ),
    },
  ];

  return (
    <div className="h-full block ">
      <aside
        className={`${
          isCollapsed ? "w-[75px] " : "w-[200px] "
        } h-screen flex flex-col bg-gray-700 justify-between items-center gap-2 transition-all duration-300 ease-linear `}
      >
        <div
          className={`bg-pink-400 rounded-full p-1 flex justify-center items-center mt-2 ${
            isCollapsed ? "w-[40px] h-[40px]" : "w-[40px] h-[40px]"
          }`}
        >
          <Logo className="w-12 h-12 fill-white" />
        </div>
        <div className="flex flex-col justify-start items-center gap-7  w-full ps-4">
          {Items.map((item: ItemProps) => (
            <div
              key={item.id}
              className="w-full group  cursor-pointer flex min-h-[40px] flex-row justify-start relative items-center  gap-3"
            >
              {item.icon}

              <p
                className={`${
                  isCollapsed ? "hidden" : "visible"
                } font-medium text-gray-400 group-hover:text-gray-200  `}
              >
                {item.title}
              </p>

              {item.title === "Home" && (
                <div className="bg-pink-300 absolute end-[-4px] h-full w-[4px] rounded-r-lg shadow-left   "></div>
              )}
            </div>
          ))}
        </div>

        <div className="h-[100px]  gap-10 mb-5 flex flex-col justify-start items-center  w-full ps-4">
          <div className="flex w-full flex-row justify-start items-center gap-3">
            <Logout className="w-6 h-6 fill-gray-400" />
            {!isCollapsed && (
              <p className="font-medium text-gray-400">Log Out</p>
            )}
          </div>
          <div className="flex w-full flex-row justify-start items-center gap-3">
            <Arrow
              className={` ${
                isCollapsed ? "rotate-0" : "rotate-180"
              } p-1 w-6 h-6 rounded-full bg-gray-400 fill-white cursor-pointer transition-transform duration-300 ease-linear`}
              onClick={toggleCollapseHandler}
            />
            {!isCollapsed && (
              <p className="font-medium text-gray-400">Collapse</p>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};
