import NewsSource from "../components/NewsSource";

const TopSources = ({newsSources}) => {
  return (
    <div class="min-h-screen">
      <div class="grid grid-cols-1  md:grid-cols-2 ">
        {newsSources.map((sources) => (
          <div key={sources.url}>
            <NewsSource sources={sources} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSources;

export async function getServerSideProps(context) {
  let url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.API_KEY}`;

  let response = await fetch(url);

  let data = await response.json();
  let newsSources = await data.sources;

  return {
    props: {
        newsSources,
    },
  };
}
