import { useEffect, useState } from "react"
import Main from "../../Components/Main/Main"
import axios from "axios";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";
// import SingleUserPage from "../SingleUserPage/SingleUserPage";

const UsersPage = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${API_URL}/users`);
      setUsers(res.data)
    }
    
    fetchData();
  }, []);

  return (
    <Main>
      <h1>Users Page</h1>
      <ul>
        {users.map(user => (

          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>

        ))}
      </ul>
    </Main>
  )
}

export default UsersPage