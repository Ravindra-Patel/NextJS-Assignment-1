import NewsSource from "../components/NewsSource";
import { useState } from "react";

const TopSources = ({ newsSources }) => {
  const [articleCount, setArticleCount] = useState(6);
  const totalNews = newsSources.length;

  function handleArticleCount() {
    setArticleCount((prevState) => prevState + 6);
  }

  return (
    <div class="min-h-screen mx-2 md:mx-10">
      <div class="grid grid-cols-1  md:grid-cols-2 ">
        {newsSources.slice(0, articleCount).map((sources) => (
          <div key={sources.url}>
            <NewsSource sources={sources} />
          </div>
        ))}
      </div>
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
};

export default TopSources;

export async function getServerSideProps(context) {
  let url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;

  let response = await fetch(url);

  let data = await response.json();
  let newsSources = await data.sources;

  return {
    props: {
      newsSources,
    },
  };
}
