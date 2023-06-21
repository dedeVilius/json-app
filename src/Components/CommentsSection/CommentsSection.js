import { useEffect, useState } from "react"
import axios from "axios";
import { API_URL } from "../../config";
import { useParams } from "react-router-dom";
import '../CommentsSection/CommentsSection.scss';

const CommentsSection = () => {

  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/posts/${id}/comments`)
      .then(res => setComments(res.data));
  }, [id]);

  return (
    <section className='comments'>
      {comments.map(comment => (
        <div className='comment-item' key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <span>{comment.email}</span>
        </div>
      ))}
    </section>
  )
}

export default CommentsSection