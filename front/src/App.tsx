import { useState } from "react";
import s from "./App.module.css";
import useAddArticle from "./api/articles/useAddArticle";
import Article from "./components/Articles/Article";
import Category from "./components/Categories/Category"
import { AiFillPlusCircle } from "react-icons/ai";
import { TbCategoryPlus } from "react-icons/tb";
import { Tooltip } from 'react-tooltip'
import useAddCategory from "./api/categories/useAddCategory";
import { NavLink, Outlet } from "react-router-dom";


function App() {
  const [showModalCreateCategory, setShowModalCreateCategory] = useState(false);
  const [showModalCreateArticle, setShowModalCreateArticle] = useState(false)
  const [showAddButtons, setShowAddButtons] = useState(false)

  const { mutate: addArticle } = useAddArticle()
  const { mutate: addCategory } = useAddCategory()

  return (
    <div>
      <header className={s.headerInnerWrap}>
        <h1 className={s.logo}>Ori's Blog</h1>
        <nav>
          <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Articles</NavLink>
          <NavLink to='/categories' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Categories</NavLink>
          <a href="http://localhost:8000/api-docs/" target="_blank">#Swagger-API</a>
        </nav>
      </header>
      <section>

        {/* Create Article Button */}
        <div className={s.addBtns} onMouseLeave={() => setShowAddButtons(false)}>
          {showAddButtons && <TbCategoryPlus size={30} onClick={() => setShowModalCreateCategory(true)} data-tooltip-id="tooltip-add-category" />}
          <AiFillPlusCircle size={60} onMouseEnter={() => setShowAddButtons(true)} onClick={() => setShowModalCreateArticle(true)} data-tooltip-id="tooltip-create-article" />
        </div>
        <Tooltip id="tooltip-add-category" content="Add category" />
        <Tooltip id="tooltip-create-article" content="Create Article" />

        <div className={s.addNewWrap}>
          {showModalCreateArticle && <Article onCreate={addArticle} status="Create" showModalCreateMode={showModalCreateArticle} onCloseModalCreateMode={() => setShowModalCreateArticle(prev => !prev)} />}
          {showModalCreateCategory && <Category onCreate={addCategory} status="Create" showModalCreateMode={showModalCreateCategory} onCloseModalCreateMode={() => setShowModalCreateCategory(prev => !prev)} />}
        </div>

        <div className={s.pageWrap}>
          <Outlet />
        </div>

      </section>
    </div>
  );
}

export default App;
