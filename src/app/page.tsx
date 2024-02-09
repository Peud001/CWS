import PostCard from "@/components/postcard/postcard";
import styles from './pages.module.css'
import { getPosts } from "@/lib/data";

interface postType {
  userId : number
  id : number
  title : string
  body : string
}

const Home = async() => {

  const data = await getPosts()
  return (
    <main className={styles.main}>
      {data && data.map((post: postType) => <PostCard key={post.id} post={post} />)}
    </main>
  );
}
export default Home;