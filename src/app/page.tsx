"use server"
import PostCard from "@/components/postcard/postcard";
import styles from './pages.module.css'
import { getPosts } from "@/lib/data";
import { connectToDb } from "@/lib/utils";

interface postType {
  userId : number
  id : number
  title : string
  body : string
}

const Home = async() => {

  const connect = connectToDb()
  console.log(connect);

  const posts = await getPosts()

  return (
    <main className={styles.main}>
      {posts && posts.map((post: postType) => <PostCard key={post.id} post={post} />)}
    </main>
  );
}
export default Home;