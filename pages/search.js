import axios from "axios";
import Article from "../components/Article";
import { useState, useRef, useEffect } from "react";
import Search from "../components/Search";
import ShowError from "../components/ShowError";
import WarningComponent from "../components/WarningComponent";

const SearchPage = () => {
  const [articleCount, setArticleCount] = useState(12);

  function handleArticleCount() {
    setArticleCount((prevState) => prevState + 12);
  }

  const [query, setQuery] = useState("");
  const [emptyQuery, setEmptyQuery] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const setUrl = () => {
    if (query) {
      let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=3da13dd2c60f4500a7adfa45782e3895`;
      setEmptyQuery(false);

      axios
        .get(url)
        .then((response) => {
          setLoading(false);
          setData(response.data.articles);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      setEmptyQuery(true);
    }
  };

  const totalNews = data?.length;

  return (
    <div class="min-h-screen md:m-10">
      <Search setQuery={setQuery} setUrl={setUrl} />

      {!emptyQuery && (
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-center">
          {data.slice(0, articleCount).map((news) => (
            <div key={news.url}>
              <Article article={news} />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div classname="flex justify-center items-center w-full ">
          <ShowError />
        </div>
      )}
      {emptyQuery && (
        <div classname="flex justify-center items-center w-full ">
          <WarningComponent />
        </div>
      )}
      {!emptyQuery && totalNews > articleCount && (
        <div class="flex justify-between">
          <button
            class="bg-blue-500 mx-auto my-5 sm:text-sm sm:py-0 h-10 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded "
            onClick={handleArticleCount}
          >
            Load More
          </button>
        </div>
      )}
      {!data && (
        <div class="flex justify-between">
          <h3 class="mx-auto font-serif mt-10 sm:text-sm sm:py-0 h-10 text-black font-bold px-4 py-2 rounded ">
            No news available for the searched query!
          </h3>
        </div>
      )}
      {loading && (
        <div class="flex justify-between">
          <h3
            class="mx-auto font-serif mt-10 sm:text-sm sm:py-0 h-10 text-black font-bold px-4 py-2 rounded "
            onClick={handleArticleCount}
          >
            Loading...
          </h3>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
