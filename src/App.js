import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Category from "./components/Category";
import ProductsForm from "./components/Product";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
 const [selectedCategory , setSelectCategory]=useState("");
 
  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    result=filterSelectedCategory(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue , selectedCategory]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };


const SelectedCategoryHandler = (e)=>{
  setSelectCategory(e.target.value);
}

const filterSelectedCategory=(array)=>{
  if (!selectedCategory) return array;
  return array.filter((item)=> item.categoryid ==  selectedCategory)
}

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };
  
  const sortDate = (array) => {
    let sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  useEffect(()=>{
    const savedProducts=JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories=JSON.parse(localStorage.getItem("categories")) || [];
setProducts(savedProducts);
setCategories(savedCategories);
  },[]);
useEffect(()=>{
if(products.length){
  localStorage.setItem("products", JSON.stringify(products));
}
},[products]);

useEffect(()=>{
if (categories.length){
  localStorage.setItem("categories", JSON.stringify(categories));
}
},[categories]);



  return (
    <div >
      <div className=" min-h-screen">
        <NavBar products={products}/>
        <div className="max-w-screen-sm sm:max-w-screen-lg mx-auto">
          <Category setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <Filter
            sort={sort}
            searchValue={searchValue}
            onSort={sortHandler}
            onSearch={searchHandler}
            categories={categories}
            selectedCategory ={selectedCategory}
             onSelectedCategory={SelectedCategoryHandler}

         />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
