import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../config";
import CommentsSection from "../../Components/CommentsSection/CommentsSection";

const SinglePostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [postDeleted, setPostDeleted] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/posts/${id}?_expand=user`)
      .then(res => setPost(res.data));
  }, [id]);

  const deleteHandler = () => {
    axios.delete(`${API_URL}/posts/${id}`)
      .then(data => setPostDeleted(true))
  }

  return (
    <div>
      {postDeleted ? (
        <>
          <h1>Post was deleted</h1>
          <Link to='/posts'>Go back to posts list</Link>
        </>
      ) : (
        post && (
          <>
            <h1>{post.title}</h1>
            <button onClick={deleteHandler}>Delete Post</button>
            <Link to={`/posts/edit-post/${post.id}`}>Edit Post</Link>
            <p>{post.body}</p>
            <span>Author: {post.user.name}</span>
            <CommentsSection />
          </>
        )
      )}
    </div>
  )
}

export default SinglePostPage