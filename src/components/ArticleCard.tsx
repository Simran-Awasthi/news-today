import { FC } from "react";
import { Link } from "react-router-dom";

const ArticleCard: FC<{ article: any }> = ({ article }) => {
  return (
    <Link to={"/article"} state={{ article: article }}>
      <div className="w-full h-full flex flex-col gap-4 bg-neutral-800 rounded-md shadow-md">
        <img
          src={article.urlToImage}
          className="w-full h-42 object-cover rounded-t-md"
        />
        <div className="p-4">
          {/* <a href={article.url} className="hover:underline"> */}
          <h3 className="text-lg font-semibold">{article.title}</h3>
          {/* </a> */}
          <p className="text-zinc-300">{article.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
