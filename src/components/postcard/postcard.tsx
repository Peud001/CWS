import React from 'react'
import styles from './postcard.module.css'
import Image from 'next/image'
import Link from 'next/link';

interface postType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: postType
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <main className={styles.main}>
      <div className={styles.postImageDiv}>
        <Image
          src="/lt.jpg"
          alt=""
          fill
          priority
          className={styles.postImage}
          //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.postText}>
        <Link href={`${post.id}`}>{post.title}</Link>
        <div>
          <span>Author</span>
          <span>Time Ago</span>
        </div>
        <div>{post.body}</div>
      </div>
    </main>
  );
};

export default PostCard