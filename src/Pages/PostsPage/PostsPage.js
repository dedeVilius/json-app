import { useState, useEffect } from "react";
import Main from "../../Components/Main/Main"
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(postsData => setPosts(postsData));
  }, []);

  return (
    <Main>
      <Link to='/posts/create-post'>Create a new post</Link>
      <ul>
        {posts.map(post => <li key={post.id}><Link to={'/posts/' + post.id}>{post.id}. {post.title}</Link></li>)}
      </ul>
    </Main>
  )
}

export default PostsPage