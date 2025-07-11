import { useState } from "react";

export default function Sidebar({ isOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const modules = ["Module 1", "Module 2", "Module 3", "Module 4"];

  return (
    <aside
      className={`bg-gray-100 w-64 min-h-screen p-4 border-r border-gray-200
        ${isOpen ? "block" : "hidden"} md:block fixed md:static z-10`}
    >
      <ul className="space-y-2">
        {modules.map((mod, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`group flex justify-between items-center p-2 rounded cursor-pointer transition
              ${activeIndex === index ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-200"}
            `}
          >
            <span>{mod}</span>
            <div
              className={`space-x-1 text-sm ${
                activeIndex === index
                  ? "block"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
