import { useState } from "react";
import axios from "axios";

export type Post = {
    id: string
    title: string,
    likes: number
}
export type postWithOutId = Omit<Post, 'id'>

const API_URL = 'http://localhost:4000/posts'

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [error, setError] = useState<string>('')
}