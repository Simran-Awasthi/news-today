import { useLocation } from "react-router-dom";

const ArticlePage = () => {
  const { state } = useLocation();
  if (!state.article) {
    return <div>No article found!</div>;
  }
  return (
    <div className="w-full bg-neutral-800 max-w-screen-xl flex flex-col text-center items-center gap-12">
      <img
        src={state.article.urlToImage}
        className="w-full h-56 object-cover"></img>
      <div className="w-full max-w-screen-sm flex-col flex gap-4 p-6">
        <h3 className="text-4xl font-black">{state.article.title}</h3>
        <p>
          by <span>{state.article.author}</span>
        </p>
        <p>
          @ <span>{state.article.publishedAt}</span>
        </p>
        {state.article.content}
      </div>
    </div>
  );
};

export default ArticlePage;
