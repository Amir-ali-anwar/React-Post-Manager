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
    const [loading, setLoading] = useState<boolean>(false);
    const fetchPosts = async (): Promise<void> => {
        setLoading(true);
        try {
            const { data } = await axios(API_URL)
            setPosts(data)
        } catch (error) {
            setError("Failed to Fetch the data")
        } finally {
            setLoading(false);
        }
    }
    const handleCreatePost = async (postData: Post): Promise<void> => {
        try {
            await axios.post(API_URL, { ...postData });
            await fetchPosts(); // Add this
        } catch (error) {
            setError("Failed to Create the data")
        }
    }
    const handleDeletePost = async (postId: string): Promise<void> => {
        try {
            await axios.delete(`${API_URL}/${postId}`);
            await fetchPosts()
        } catch (error) {
            setError("Failed to Delete post")
        } finally {
            setLoading(false);
        }
    }
    const handleLike = async (postId: string): Promise<void> => {
        try {
            const post = posts.find((post) => post.id === postId);
            if (!post) {
                setError('Post not found');
                return;
            }
            const response = await axios.put(`${API_URL}/${postId}`, {
                ...post,
                likes: post.likes + 1
            })
            console.log({ response });

            await fetchPosts()
            setError('');
        } catch (error) {
            setError('Failed to like post');
        } finally {
            setLoading(false);
        }
    }
    return {
        loading,posts, error, fetchPosts, handleCreatePost, handleDeletePost, handleLike
    }
}