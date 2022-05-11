import React, { useState } from "react";

function CategoryFilter({categories, onButtonClick}) {
  const [buttonSelected, setSelected] = useState(false);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        <button className={buttonSelected ? "selected": null} onclick={onButtonClick}>{category}</button>
      })};
    </div>
  );
}

export default CategoryFilter;
