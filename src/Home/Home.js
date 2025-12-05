import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
    const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
    const data = await response.json();
    setPosts(data.posts);
    setLoading(false);
  };
  getAllPosts();
  }, []);

  if (loading) return <p>loading</p>
  if (posts.length === 0) return <p>記事が見つかりません</p>

  return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} className={styles["postItem"]}>
              <div className={styles["flex-row"]}>
                <div>{post.createdAt}</div>
                <div className={styles["category-tag"]}>{post.categories.join('')}</div>
              </div>
              <h3>{post.title}</h3>
              <div className={styles["line-clamp"]}>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    )
}

export default Home