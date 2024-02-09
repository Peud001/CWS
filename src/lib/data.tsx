const users = [
    {id: 1, name: 'Peau'},
    {id: 2, name: 'Solomon'}
]

const posts = [
    {id: 1, title: 'one', body: 'one post...', userId: 1},
    {id: 2, title: 'two', body: 'two post...', userId: 2},
    {id: 3, title: 'three', body: 'three post...', userId: 3},
    {id: 4, title: 'four', body: 'four post...', userId: 4}
]

export const getPosts = async() => {
    return posts
}
export const getPost = async(id: number) => {
    return posts.find((post) => post.id === id)
}
export const getUser = async(id: number) => {
    return users.find((user) => user.id === id)
}