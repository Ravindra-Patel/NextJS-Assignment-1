import Head from "next/head";

export default function HeadMeta({ title, description }) {
  return (
    <div>
      <Head>
        <title>{title ? title : "News Website"}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "Get all the latest News and Information related to sports, politics, technology, science"
          }
        />
        <meta
          name="keywords"
          content="Latest News, Information, Sports, Cars, Space, Technology, Cricket, Football, Politics, Movies, Bollywood, Science, Olympics "
        />
        <link rel="icon" href="/newico.png" />
      </Head>
    </div>
  );
}
