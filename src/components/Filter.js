import { useState } from "react";
import Category from "./Category";

const Filter = ({onSort, onSearch , sort ,
     searchValue , categories, selectedCategory
      , onSelectedCategory}) => {

 
  
  
  
  
  return ( 
    <div>
            <div className="flex items-center justify-between mb-6 mt-3">
            <label htmlFor="search-input" className="text-slate-500 text-lg">search</label>
            <input type="text" name="search-input" id="search-input"
            value={searchValue}
            onChange={onSearch}
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
        </div>
        <div className="flex items-center justify-between mb-6">
            <label htmlFor="sort-products" className="text-slate-500 text-lg" >sort</label>
            <select name="sort-products" id="sort-products"
            value={sort}
            onChange={onSort}
            className="bg-transparent text-slate-400 rounded-xl">
                <option className="bg-slate-500 text-slate-300" value="">select a category</option>
                <option className="bg-slate-500 text-slate-300"  value="latest"> latest</option>
                <option className="bg-slate-500 text-slate-300" value="earliest"> earliest</option>

            </select>

        </div>

        <div className="flex items-center justify-between mb-6">
            <label htmlFor="sort-products" className="text-slate-500 text-lg" >category</label>
            <select name="sort-products" id="sort-products"
            value={selectedCategory}
            onChange={onSelectedCategory}
            className="bg-transparent text-slate-400 rounded-xl">
                <option className="bg-slate-500 text-slate-300" value=""> ALL </option>
{categories.map((category)=>{
    return(
        <option className="bg-slate-500 text-slate-300"  value={category.id} key={category.id}> 
        {category.title}
        </option>

    )
})}
            </select>

        </div>
    </div>
     );
}
 
export default Filter;