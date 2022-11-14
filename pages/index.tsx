import React from "react";
import Head from "next/head";
import Card from "../components/Card";

import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";

import type { GetStaticProps, NextPage } from "next";
import IntPostCard from "../types/IntResponcePostApi";
import Paginations from "../components/boadrDetails/pagination/Pagination";

import POSTS_FETCH from "../utils/postsToken";
import breakResponse from "../utils/breakResponse"

type Props = {
  posts: IntPostCard[]
};


const Home: NextPage<Props> = ({ posts }: Props) => {
  const [page, setPage] = React.useState<number>(1);

  const postsOnPage: IntPostCard[] = posts.length > 1 ? [...posts].slice(0, 5) : [[...posts][0]];

  const stablePostsSizeForPagination: number = posts.length;

  const [PostsOnPage, setPostsOnPage] = React.useState<IntPostCard[]>(postsOnPage);

  React.useEffect(() => {
    if (page == 1 && posts.length > 1) {
      setPostsOnPage(posts.slice(0, 5));
    }
    if (page >= 2 && posts.length > 1) {
      setPostsOnPage(posts.slice(5 * page - 5, 5 * page));
    }
  }, [page]);

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
          <Paginations size={stablePostsSizeForPagination} setpage={setPage} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response_posts = await fetch(POSTS_FETCH);
    const posts: IntPostCard[] = await response_posts.json();

    return {
      props: {
        posts
      },
      revalidate: 10,
    };
  } catch {
    return {
      props: {
        posts: [breakResponse]
      },
      revalidate: 10,
    };
  }
};

export default Home;
