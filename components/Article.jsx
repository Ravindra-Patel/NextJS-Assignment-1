import React from "react";
import Link from "next/link";
import Image from "next/image";

const Article = ({ article }) => {
  return (
    <>
      <div class="border-2 m-2 min-w-[350px] md:min-w-[300px] min-h-[350px] md:min-h-[400px] lg:h-[40vh] md:h-[35vh]  ">
        <Link href={`/news/${article.source.name}/${article.title}`}>
          <div className="h-[60%]">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="/latest_News.jpg"
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  minWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "100%",
                }}
              ></img>
            )}
            {!article.urlToImage && (
              <img
                src="/latest_News.jpg"
                alt="/latest_News.jpg"
                height="100%"
                width="100%"
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  minWidth: "100%",
                  maxHeight: "100%",
                  minHeight: "100%",
                }}
              ></img>
            )}
          </div>

          <div className="40%">
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
