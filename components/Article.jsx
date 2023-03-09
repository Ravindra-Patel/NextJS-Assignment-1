import React from "react";
import Link from "next/link";
import Image from "next/image";

const Article = ({ article }) => {
  
  return (
    <>
      <div class="border-2 m-2 ">
        <Link href={`/news/${article.source.id}/${article.title}`}>
          <div>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="/latest_News.jpg"
                height="100%"
                width="100%"
                style={{objectFit:"cover"}}
              ></img>
            )}
            {!article.urlToImage && (
              <img
                src="/latest_News.jpg"
                alt="/latest_News.jpg"
                height="100%"
                width="100%"
                style={{objectFit:"cover"}}
              ></img>
            )}
          </div>

          <div>
            <div>
              <h3 class="text-xl pl-2 font-bold my-5 hover:underline">
                {article.title.length > 60
                  ? article.title.substring(0, 60) + "..."
                  : article.title}
              </h3>
            </div>
            <div>
              <h3 class="text-sm pt-3 pl-2 font-semibold">
                Published Date:{" "}
                {article.publishedAt.substring(
                  0,
                  article.publishedAt.indexOf("T")
                )}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Article;
