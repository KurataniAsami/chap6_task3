import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
    const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
    const data = await response.json();
    setPosts(data.posts);
  };
  getAllPosts();
  }, []);
  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div className={styles["flex-row"]}>
            <div>{post.createdAt}</div>
            <div className={styles["category-tag"]}>{post.categories.join(', ')}</div>
          </div>
          <h3>{post.title}</h3>
          <div className={styles["line-clamp"]}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default App;
