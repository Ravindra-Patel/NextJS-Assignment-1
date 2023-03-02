import React from "react";
import Link from "next/link";
import Image from "next/image";

const Article = ({ article }) => {
  return (
    <Link href={`/news/${article.title}`}>
      <div class="border-2 xs:m-[30px]  sm:m-[20px] lg:m-[50px] ">
        {article.urlToImage && (
          <Image
            class="w-full"
            src={article.urlToImage}
            alt="/latest_News.jpg"
            height="200"
            width="200"
          ></Image>
        )}
        {!article.urlToImage && (
          <Image
            class="w-full"
            src="/latest_News.jpg"
            alt="/latest_News.jpg"
            height="200"
            width="200"
          ></Image>
        )}
        <div>
          <h3 class="text-xl pr-3 pl-2 font-bold">{article.title}</h3>
        </div>
        <div>
          <h3 class="text-sm pt-3 pl-2 font-semibold">{article.publishedAt}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Article;
