import styles from "../styles/Home.module.css";
import Article from "../components/Article";
import { useState } from "react";
import ShowError from "../components/ShowError";

export default function Home({ newsArticles }) {
  const [articleCount, setArticleCount] = useState(12);
  const totalNews = newsArticles?.length;

  function handleArticleCount() {
    setArticleCount((prevState) => prevState + 12);
  }

  return (
    <div class="min-h-screen md:m-5">
      {newsArticles ? (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          {newsArticles.slice(0, articleCount).map((news) => (
            <div key={news.url}>
              <Article article={news} />
            </div>
          ))}
        </div>
      ) : (
        <div classname="flex justify-center items-center w-full ">
          <ShowError />
        </div>
      )}

      {totalNews > articleCount && (
        <div class="flex justify-between">
          <button
            class="bg-blue-500 mx-auto my-5 sm:text-sm sm:py-0 h-10 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded "
            onClick={handleArticleCount}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  let url = `https://newsapi.org/v2/top-headlines?country=${process.env.COUNTRY_CODE}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;

  let response = await fetch(url);

  let data = await response.json();
  let newsArticles = await data.articles;

  return {
    props: {
      newsArticles: newsArticles ? newsArticles : null,
    },
  };
}
