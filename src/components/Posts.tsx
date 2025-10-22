import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postSlice";
import type { RootState, AppDispatch } from "../app/store";

function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state: RootState) => state.posts
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p className="text-red-500">{error}</p>;
  }

  if (!isLoading && !isError && posts.length === 0) {
    content = <p>No posts found!</p>;
  }

  if (!isLoading && !isError && posts.length > 0) {
    console.log(posts);
    content = posts.map((post: any) => (
      <div key={post.id} className="mb-4 p-4 border rounded shadow">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ));
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {content}
    </div>
  );
}

export default Posts;