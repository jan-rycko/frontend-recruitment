/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, FC, Dispatch, SetStateAction } from "react";
import { Post, Comment } from "./typescript";

export const Child: FC<{
  id: number;
  post: Post;
  setPost: Dispatch<SetStateAction<Post | null>>;
}> = ({ id, post, setPost }) => {
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const comments: Comment[] = await response.json();

      setPost({ ...post, comments });
    })();
  }, [id]);

  return (
    <div>
      ({post.id}) {post.title}
      {" – "}
      {"comments: " + (post.comments?.map((c) => c.id) ?? "–")}
    </div>
  );
};

const Parent: FC<{ id: number }> = ({ id }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const post: Post = await response.json();

      setPost(post);
    })();
  }, [id]);

  if (!post) {
    return null;
  }

  return <Child id={id} post={post} setPost={setPost} />;
};

export default Parent;
