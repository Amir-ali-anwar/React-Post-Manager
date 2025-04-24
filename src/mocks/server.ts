import { http, HttpResponse } from 'msw'
import { Post } from '../hooks/usePost'
const url = "http://localhost:4000/posts"

let posts: Post[] = [
    {
        id: '1',
        title: 'First Post',
        likes: 5,
    },
    {
        id: '2',
        title: 'Second Post',
        likes: 10,
    },
]

export const handlers = [
    // GET /posts
    http.get(url, async () => {
        return HttpResponse.json()
    }),
    // POST /posts
    http.post(url, async ({ request }) => {
        const newPost = (await request.json()) as Post;
        posts.push(newPost)
        return HttpResponse.json(newPost, { status: 201 })
    })
]