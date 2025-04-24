import {type Post} from '../hooks/usePost'
import Item from './Item';
type ListProps = {
  posts: Post[];
  onLike: (postId: string) => Promise<void>;
  onDelete: (postId: string) => Promise<void>;
};

const List = ({posts,onDelete,onLike}: ListProps) => {
  return (
    <div className='space-y-4'>
      {posts.map((post) => {
        return (
          <Item key={post.id} post={post} onLike={onLike} onDelete={onDelete} />
        );
      })}
    </div>
  );
}

export default List