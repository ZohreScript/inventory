import { useState } from "react";

const ProductsForm = ({categories,setProducts}) => {
    const [productFormData,setProductFormData]=useState({
        title:"",
        quntity:0,
        categoryid:"",
    });
     
    
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setProductFormData({ ...productFormData, [name]: value });
      //console.log(e.value);
    };
    const addNewProduct =(e)=>{
      e.preventDefault();
    const newProduct = {
      ...productFormData,
      createdAt: new Date().toISOString(),
      id:new Date().getTime(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductFormData({ title: "", quntity: "",categoryid:"" });
  };
  return (
    <div>
      <h2 className="text-xl text-slate-300 font-bold">add new product</h2>

      <form className="w-11/12 sm:w-3/5 mx-auto bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div id="">
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            عنوان محصول:
          </label>
          <input
            type="text"
            className="bg-transparent rounded-xl border border-slate-500 
                text-slate-400 p-4 "
            name="title"
            id="product-title"
            value={productFormData.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-quntity"
            className="block mb-1 text-slate-400"
          >
            تعداد:
          </label>
          <input
            type="number"
            name="quntity"
            id="product-quntity"
            className="bg-transparent  rounded-xl border border-slate-500 
                text-slate-400 p-2 "
                value={productFormData.quntity}
                onChange={changeHandler}

          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            دسته بندی:
          </label>

          <select
          value={productFormData.categoryid }
          onChange={changeHandler}
            name="categoryid"
            id="product-category"
            className="bg-transparent text-slate-400 rounded-xl w-full  border border-slate-500"
          >
            
            <option className="bg-slate-600 text-slate-300" value="">
              دسته بندی موردنظررا انتخاب کنید
            </option>
            {categories.map((category)=>{
                return(
                   
            <option key={category.id} 
            className="bg-slate-600 text-slate-300"
             value={category.id}>
           {category.title}
          </option> 
                )
            })}
          </select>
        </div>

        <div className="flex items-center justify-between gap-x-4">
          <button className="flex-1 border border-slate-400 hover:border-slate-500 text-slate-200 rounded-xl py-1">
            cancel
          </button>
          <button
          onClick={addNewProduct}
            id="addnewproduct"
            className="flex-1 bg-slate-500 hover:bg-slate-400 text-slate-200 rounded-xl py-1"
          >
            add new product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
