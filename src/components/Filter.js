import React from "react"

function Filter({onCategoryChange}){
    <div className="Filter">
    <select name="filter" onChange={onCategoryChange}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  </div>
}