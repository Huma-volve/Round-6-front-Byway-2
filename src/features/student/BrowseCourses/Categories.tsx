import { HiMiniComputerDesktop } from "react-icons/hi2";

export default function Categories() {
  
  const categories = [
    { id: 1, name: "Web Development", description: "Learn HTML, CSS, JavaScript, and more." },
    { id: 2, name: "Data Science", description: "Master Python, R, and machine learning." },
    { id: 3, name: "Graphic Design", description: "Create stunning visuals with Adobe tools." },
    { id: 4, name: "Cybersecurity", description: "Protect systems with ethical hacking skills." },
  ];

  return (
    <div className="container mx-auto px-20">
      <h3 className="text-xl font-semibold py-5">Top Categories</h3>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category)=>(
        <div className="border border-gray-[#E2E8F0] text-center p-5 rounded-xl shadow">
          <span className="bg-blue-100 rounded-full inline-block p-4"><HiMiniComputerDesktop className="text-blue-website w-"/></span>
          <h3 className="text-gray-900 font-semibold text-lg">{category.name}</h3>
        </div>
        ))}
      </div>
    </div>
  );
}