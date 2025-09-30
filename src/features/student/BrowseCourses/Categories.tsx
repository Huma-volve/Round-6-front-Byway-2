import { HiMiniComputerDesktop } from "react-icons/hi2";
import { Link } from 'react-router';

export default function Categories() {
  
  const categories = [
    { id: 1, name: "Web Development", description: "Learn HTML, CSS, JavaScript, and more.",number:"12", },
    { id: 2, name: "Data Science", description: "Master Python, R, and machine learning.",number:"12", },
    { id: 3, name: "Graphic Design", description: "Create stunning visuals with Adobe tools." ,number:"12",},
    { id: 4, name: "Cybersecurity", description: "Protect systems with ethical hacking skills.",number:"12", },
  ];

  return (
    <div className="container mx-auto px-10 sm:p-0">
      <div className="flex justify-between items-center pb-6">
        <h3 className="text-xl font-semibold py-5">Top Categories</h3>
        <Link to="/category" className="text-blue-500">
          see all
        </Link>
      </div>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category)=>(
        <div key={category.id} className="border border-gray-[#E2E8F0] text-center p-5 rounded-xl shadow shadow-blue-500/12 grid gap-4">
          <span className="bg-blue-100 rounded-full inline-block p-4 w-fit mx-auto"><HiMiniComputerDesktop className="text-blue-website"/></span>
          <h3 className="text-gray-900 font-semibold text-lg">{category.name}</h3>
          <p className="text-gray-700">{category.number} Courses</p>
        </div>
        ))}
      </div>
    </div>
  );
}