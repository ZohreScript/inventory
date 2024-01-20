import { useState } from "react";

const Category = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [e.target.name]: value });
    //console.log(e.value);
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
      id:new Date().getTime(),
    };
    setCategories((prevState) => [...prevState, newCategory]);
    //یا setCategories([...categories,newCategory]);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-200 font-bold">add new category</h2>
        <form className="w-11/12 sm:w-3/5 mx-auto bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              عنوان دسته بندی :
            </label>
            <input
              type="text"
              className="bg-transparent rounded-xl border border-slate-500 
                text-slate-400 p-4 focuse:outline-none"
              name="title"
              id="category-title"
              value={categoryFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              توضیحات:
            </label>
            <textarea
              type="text"
              name="description"
              id="category-description"
              className="bg-transparent w-full rounded-xl border border-slate-500 
                text-slate-400 p-4 focuse:outline-none"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 border border-slate-400 hover:border-slate-500 text-slate-200 rounded-xl py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
            >
              cancel
            </button>
            <button
              id="addnewcategory"
              className="flex-1 bg-slate-500 hover:bg-slate-400 text-slate-200 rounded-xl py-2"
              onClick={addNewCategoryHandler}
            >
              add new category
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className={`text-yellow-400 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        Add new category?
      </button>
    </section>
  );
};

export default Category;
