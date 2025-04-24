import { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { usePosts } from "./hooks/usePost";
const App = () => {
  const {
    posts,
    error,
    fetchPosts,
    handleCreatePost,
    handleDeletePost,
    handleLike,
  } = usePosts();
  useEffect(() => {

    fetchPosts()
    return () => {
        
    }
  }, [])
  
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Posts Manager</h1>
      {error && <div className='text-red-500 mb-4'>{error}</div>}
      <Form onSubmit={handleCreatePost}/>
      <List posts={posts} onLike={handleLike} onDelete={handleDeletePost} />
    </div>
  );
};
export default App;
