import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config";

const SingleUserPage = () => {

  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${API_URL}/users/${id}`);
      const data = await res.json();
      setUser(data)
    }    

    fetchData();
  }, [id]);

  if (!user) {
    return '';
  }

  return (
    <h1>{user.name}</h1>
  )
}

export default SingleUserPage