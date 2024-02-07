const Category = () => {
  interface CategoryProps {
    id: number;
    title: string;
  }
  const categories: CategoryProps[] = [
    { id: 1, title: "music" },
    { id: 1, title: "sport" },
    { id: 1, title: "art" },
    { id: 1, title: "photography" },
    { id: 1, title: "trading card" },
    { id: 1, title: "virtual world" },
    { id: 1, title: "videos" },
  ];

  return (
    <>
      <div className="w-full h-[70px] flex justify-evenly items-center space-x-6 ">
        {categories.map((item: CategoryProps) => (
          <p
            className="  px-6 py-2 rounded-full text-gray-300 min-w-fit h-fit bg-gray-800 cursor-pointer shadow-md transition-all duration-150 ease-linear hover:border-[1px] hover:border-orange-300 hover:bg-orange-950 hover:text-orange-500"
            key={item.id}
          >
            {item.title}
          </p>
        ))}
      </div>
    </>
  );
};

export default Category;
