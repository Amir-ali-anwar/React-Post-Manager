import { http, HttpResponse } from 'msw'
import { Post,postWithOutId } from '../hooks/usePost'
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
        return HttpResponse.json(posts, { status: 200 });
    }),
    // POST /posts
    http.post(url, async ({ request }) => {
        const postData = (await request.json()) as postWithOutId;
        const newPost: Post = {
            ...postData,
            id: crypto.randomUUID(),
        };
        posts.push(newPost)
        return HttpResponse.json(newPost, { status: 201 })
    }),
    http.put(`${url}/:id`, async ({ params, request }) => {
        const { id } = params
        const updatedPost = (await request.json()) as Post;
        const index = posts.findIndex((post) => post.id === id);
        if(index === -1){
            return HttpResponse.json({ message: "Post not found" }, { status: 404 })
        }
        posts[index] = updatedPost;
        return HttpResponse.json(updatedPost, { status: 200 })
    }),
    http.delete(`${url}/:id`, async ({ params }) => {
        const { id } = params;
        posts = posts.filter((post) => post.id !== id);
        return HttpResponse.json(null, { status: 200 });
    }),

]
export const getErrorHandler = [
    http.get(url, () => {
        return HttpResponse.json(
            { message: 'Failed to fetch posts' },
            { status: 500 }
        );
    }),
];

export const createErrorHandler = [
    http.post(url, () => {
        return HttpResponse.json(
            { message: 'Failed to create post' },
            { status: 400 }
        );
    }),
];


export const updateErrorHandler = [
    http.put(`${url}/:id`, () => {
        return HttpResponse.json(
            { message: 'Failed to update post' },
            { status: 400 }
        );
    }),
]

export const deleteErrorHandler = [
    http.delete(`${url}/:id`, () => {
      return HttpResponse.json(
        { message: 'Failed to delete post' },
        { status: 400 }
      );
    }),
  ];
  