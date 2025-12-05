import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const getAllPosts = async () => {
    const response = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)
    const data = await response.json();
    setPost(data.post);
    setLoading(false);
    if (!data.post) {
      setError(true);
    }
  };
  getAllPosts();
  }, [id]);

  if (error) {
    return <>記事が見つかりません</>
  }
  
  return (
    loading ? (
      <>loading</>
    ) : (
    <div>
      <h2>{post.title}</h2>
      <div>{post.createdAt}</div>
      <div>{post.categories}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
    )
  );
}

export default PostDetail