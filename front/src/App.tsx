import { useState } from "react";
import s from "./App.module.css";
import useAddArticle from "./api/articles/useAddArticle";
import AddArticle from "./components/Articles/AddArticle";
import ArticlesList from "./components/Articles/ArticlesList";


function App() {
  const { mutate: addArticle } = useAddArticle()

  return (
    <div>
      <header className={s.headerInnerWrap}>
        <h1 className={s.logo}>Ori's Blog</h1>
      </header>
      <section>
        <div className={s.addNewArticleWrap}>
          <AddArticle {...{ addArticle }} />
        </div>

        <div className={s.articlesListWrap}>
          <ArticlesList />
        </div>

      </section>
    </div>
  );
}

export default App;
