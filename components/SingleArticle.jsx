import React from "react";

const SingleArticle = ({ article }) => {
  return (
    <div>
      {article && (
        <div class="border-2 md:mx-[20vw] mx-5  mb-5">
          <div class="w-full pt-5">
            <h3 class="text-lg font-bold md:text-3xl mb-5 ml-4">
              {article.title}
            </h3>
            <div>
              <div class="md:w-full md:h-full md:mx-0 mx-4">
                {article.urlToImage && (
                  <img src={article.urlToImage} alt="/latest_News.jpg"></img>
                )}
                {!article.urlToImage && (
                  <img src="/latest_News.jpg" alt="/latest_News.jpg"></img>
                )}
              </div>
            </div>
            <div class="mt-5 ml-4">Source: {article.source.name}</div>

            <a href={article.url} target="_blank" class="ml-4">
              <button class="bg-blue-500 text-sm mb-2 mx-auto mt-5 sm:text-sm sm:py-0 h-10 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">
                Read More
              </button>
            </a>
          </div>
        </div>
      )}
      {!article && (
        <div class="flex justify-between">
          <h1 class="text-2xl mx-auto font-serif mt-[150px] sm:py-0 h-10 text-black font-bold px-4 py-2 rounded ">
            No Data Available!
          </h1>
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
