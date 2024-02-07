const Category = () => {
  interface CategoryProps {
    id: number;
    title: string;
  }
  const categories: CategoryProps[] = [
    { id: 1, title: "music" },
    { id: 2, title: "sport" },
    { id: 3, title: "art" },
    { id: 4, title: "photography" },
    { id: 5, title: "trading card" },
    { id: 6, title: "virtual world" },
    { id: 7, title: "videos" },
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
