import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Author from '@/components/author/author';
import { getPost } from '@/lib/data';

const SinglePost = async({params}: any) => {

  const {slug} = params

  const post = await getPost(slug)
  console.log(post)

  return (
    <main>
      <div className={styles.imageContainer}>
        <Image src="/lt.jpg" alt="" fill priority />
      </div>
      <h3>{`${post && post.title}`}</h3>
      <div>
        <Author userId={post?.id} />
        <span>October 10, 2023</span>
        <span>4 min read</span>
      </div>
      <div>{`${post && post.body}`}</div>
    </main>
  );
}

export default SinglePost