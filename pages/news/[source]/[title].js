import Link from "next/link";
import { useRouter } from "next/router";
import SingleArticle from "../../../components/SingleArticle";

const Title = ({ article }) => {
  const router = useRouter();

  return (
    <div class="min-h-[74vh]">
      {!article && (
        <div class="flex justify-between">
          <h1 class="text-2xl mx-auto font-serif mt-[150px] sm:py-0 h-10 text-black font-bold px-4 py-2 rounded ">
            No Data Available!
          </h1>
        </div>
      )}
      {article && (
        <div>
          <div class="flex">
            <button
              onClick={() => router.back()}
              class="mb-5 ml-2 p-2 mt-2 text-black font-bold rounded hover:underline"
            >
              Back
            </button>
          </div>
          <SingleArticle article={article[0]} />
        </div>
      )}
    </div>
  );
};

export default Title;

export async function getServerSideProps(context) {
  
  let url = `https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&qInTitle=${context.params.title}&sources=${context.params.source}`;

  let response = await fetch(url);

  let data = await response.json();
  let article = await data.articles;

  return {
    props: {
      article: article ? article : null,
    },
  };
}
