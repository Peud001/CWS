import { Post, User } from "./models"
import { connectToDb } from "./utils"

export const getPosts = async() => {
    try{
        connectToDb()
        const posts = await Post.find()
        return posts
    }catch(error){
        throw new Error("Failed to fetch posts")
    }
}
export const getPost = async(slug: string) => {
    try {
      connectToDb();
      const post = await Post.findOne({slug})
      return post
    } catch (error) {
      throw new Error("Failed to fetch post");
    }
}
export const getUser = async(id: number) => {
    try {
      connectToDb();
      const user = await User.findById(id)
      return User
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
}
export const getUsers = async() => {
    try {
      connectToDb();
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
}