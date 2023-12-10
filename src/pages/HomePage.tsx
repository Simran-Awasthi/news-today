import { LoaderIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

const NEWS_SEARCH_API_URL = "https://newsapi.org/v2/everything";
const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

function Home() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<any>([]);

  const fetchArticles = async (query?: string) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const url = new URL(!!query ? NEWS_SEARCH_API_URL : NEWS_API_URL);
      if (query) {
        url.searchParams.append("q", query);
      } else {
        url.searchParams.append("category", "technology");
        url.searchParams.append("country", "us");
      }

      url.searchParams.append("sortBy", "popularity");
      url.searchParams.append("apiKey", import.meta.env.VITE_NEWS_API_KEY);
      const newsRes = await fetch(url);
      const newsData = await newsRes.json();
      console.log(newsData);
      setArticles(newsData.articles);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await fetchArticles(query);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <div className="w-full max-w-2xl flex flex-col gap-4 justify-center items-center pt-32 pb-10">
        <h2 className="font-black text-4xl"> 📰 News Today</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center focus-within:ring-2 focus-within:ring-cyan-800 focus-within:ring-offset-2 focus-within:ring-offset-cyan-600 rounded-lg sticky top-5 shadow-xl drop-shadow-xl">
          <input
            type="text"
            name="query"
            placeholder="Search an article..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            className="w-full p-6 bg-neutral-800 outline-none focus:outline-none border-none focus:border-none rounded-l-lg"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-neutral-800 h-full p-4 rounded-r-lg text-zinc-400">
            {isLoading ? (
              <LoaderIcon className="animate-spin" />
            ) : (
              <SearchIcon />
            )}
          </button>
        </form>
        <div className="w-full grid grid-cols-2 gap-4 py-8">
          {articles.map((e: any, idx: any) => {
            return <ArticleCard key={idx} article={e} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
