import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("../../../public/items.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data); // Show all gadgets by default
      });
  }, []);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredGadgets(gadgets);
    } else {
      const filtered = gadgets.filter(
        (gadget) => gadget.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredGadgets(filtered);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      
      <div className="w-full md:w-1/5 p-5 border-2 border-gray-200 h-fit flex md:flex-col flex-row rounded-xl md:mt-24 ">
        <ul className="gap-3 text-sm md:text-lg w-full md:w-full flex flex-row md:flex-col font-bold justify-around">
          {["All Product", "Phone", "Laptop", "Accessories", "Watch"].map((category) => (
            <li key={category}>
              <button
                onClick={() => handleCategoryChange(category)}
                className={`w-full md:w-full  text-left p-2 rounded-xl ${
                  selectedCategory === category
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Gadgets List */}
      <div className="md:w-3/4 p-5">
        <h1 className="text-4xl text-center font-bold">
          {selectedCategory === "All"
            ? "Explore Cutting-Edge Gadgets"
            : `Explore ${selectedCategory}`}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {filteredGadgets.length > 0 ? (
            filteredGadgets.map((gadget) => (
              <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full text-2xl">
              No gadgets found in {selectedCategory} category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
