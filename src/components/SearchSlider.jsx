import React, { useContext, useState } from "react";
import "./SearchSlider.css";
import { searchContext } from "../context/SearchContext";

const ranges = [
  { label: "₹0 – ₹20K", min: 0, max: 20000 },
  { label: "₹20K – ₹30K", min: 20000, max: 30000 },
  { label: "₹30K – ₹40K", min: 30000, max: 40000 },
  { label: "₹40K – ₹50K", min: 40000, max: 50000 },
  { label: "₹50K – ₹60K", min: 50000, max: 60000 },
  { label: "₹60K – ₹70K", min: 60000, max: 70000 },
  { label: "₹70K – ₹80K", min: 70000, max: 80000 },
];

const SearchSlider = ({ onFilter }) => {
    const { searchTerm, setSearchTerm, selectedRange, setSelectedRange } = useContext(searchContext);
  const [active, setActive] = useState(null);

  const handleClick = (range, index) => {
    setActive(index);
   
    setSelectedRange(range); // Set the selected range
     // Call the onFilter function passed from the parent component with the selected range

    // parent ko data bhej
    if (onFilter) {
      onFilter(range);
    }
  };

  return (
    <div className="searchSlider">
      <h3>Find laptops by budget</h3>

      <div className="slider">
        {ranges.map((item, index) => (
          <h3
            key={index}
            className={active === index ? "activeFilter" : ""}
            onClick={() => handleClick(item, index)}
          >
            {item.label}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default SearchSlider;