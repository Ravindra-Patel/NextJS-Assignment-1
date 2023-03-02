import styles from "../styles/Home.module.css";
import Article from "../components/Article";
import { useState } from "react";

export default function Home({ newsArticles }) {
  const [articleCount, setArticleCount] = useState(6);
  const totalNews = newsArticles.length;

  function handleArticleCount() {
    setArticleCount((prevState) => prevState + 6);
  }

  return (
    <div class="min-h-screen m-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-center">
        {newsArticles.slice(0, articleCount).map((news) => (
          <div key={news.url}>
            <Article article={news} />
          </div>
        ))}
      </div>
      {totalNews > articleCount && (
        <div class="flex justify-between">
          <button
            class="bg-blue-500 mx-auto mt-5 sm:text-sm sm:py-0 h-10 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded "
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
  console.log(newsArticles);

  return {
    props: {
      newsArticles,
    },
  };
}
