import React from "react";
import Head from "next/head";
import Card from "../components/Card";

import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";

import type { GetStaticProps, NextPage } from "next";
import IntPostCard from "../types/IntResponcePostApi";
import Paginations from "../components/boadrDetails/pagination/Pagination"

type Props = {
  posts: IntPostCard[]  
}
const Home: NextPage<Props> = ({posts}: Props) => {
  
  const [page, setPage] = React.useState<number>(1);
  const [PostsOnPage, setPostsOnPage] = React.useState< IntPostCard[]>([...posts].slice(0, 5))

  React.useEffect(() => {
    if (page == 1) {
      setPostsOnPage(posts.slice(0, 5))
    }
    if (page >= 2) {
      setPostsOnPage(posts.slice(5 * page - 5, 5 * page))
    }
  }, [page])


  return (
    <div>
      <Head>
        <title>Jobs board</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className={styles.main}>
        <div id={styles.app}>
        {PostsOnPage.map((el) => (
          <Card key={el.id} data={el} />
        ))}
        <Paginations size={[...posts].length} page={page} setpage={setPage}/>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const TOKEN: string = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
  const POSTS_FETCH: string = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${TOKEN}`;

  const response_posts = await fetch(POSTS_FETCH);
  const posts: IntPostCard[] = await response_posts.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default Home;
