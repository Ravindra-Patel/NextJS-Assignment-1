import Head from "next/head";

export default function HeadMeta() {
  return (
    <div>
      <Head>
        <title>Drive Assignment 1</title>
        <meta
          name="description"
          content="Practising Next Js and Custom Hooks"
        />
        <meta
          name="keywords"
          content="Custom Hooks, Lightweight Functional Components"
        />
        <link rel="icon" href="/drive.png" />
      </Head>
    </div>
  );
}
