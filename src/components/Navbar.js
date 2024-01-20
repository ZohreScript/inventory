const NavBar = ({products}) => {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-8">
      <h1 className="text-xl font-bold text-slate-300 ">انبار داری</h1>

      <span
        className="flex items-center justify-center w-7 h-7 rounded-full
                 bg-slate-500 border-2  border-slate-400 font-bold text-slate-300"
      >
        {products.length}
      </span>
    </div>
  );
};

export default NavBar;
