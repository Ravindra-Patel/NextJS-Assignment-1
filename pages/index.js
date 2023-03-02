import styles from "../styles/Home.module.css";
import Article from "../components/Article";

export default function Home({ newsArticles }) {
  
  return (
    <div class="min-h-screen">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  justify-center">
        {newsArticles.map((news) => (
          <div key={news.url}>
            <Article article={news} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let url = `https://newsapi.org/v2/top-headlines?country=${process.env.COUNTRY_CODE}&apiKey=${process.env.API_KEY}`;

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
