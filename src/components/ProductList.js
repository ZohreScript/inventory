const ProductList = ({ products , categories , setProducts }) => {
    const findCategory=(categoryid)=>{
        return categories.find((c)=>c.id == parseInt(categoryid)).title;
    };
    const deleteProduct=(productid)=>{
    const filteredProducts=products.filter((product)=>product.id !== parseInt(productid));
    setProducts(filteredProducts);
}
  return (
    <div>
      <h2 className="text-slate-100 font-semibold py-3">productlist  :</h2>
    <div className="overflow-x-auto">
    {products.map((product) => {
        return (
          <div
          key={product.id}
          className="flex items-center justify-between container mx-auto border-2 p-2 rounded-md border-slate-700">
            <span className="text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-300">
                {new Date(product.createdAt).toLocaleString("fa-IR")}
              </span>
              <span  className="block px-3 py-0.5 text-slate-400 border 
border-slate-400 text-sm rounded-2xl"
              >
                {findCategory(product.categoryid)}
              </span>
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2
border-slate-300 text-slate-300"
              >
                {product.quntity}
              </span>
              <button
              onClick={()=>deleteProduct(product.id)}
                className="border px-2 py-0.5 rounded-2xl border-red-500
     text-red-500"
              >
               
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ProductList;
