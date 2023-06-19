import { Routes, Route } from 'react-router-dom';
import './App.css';
import Container from './Components/Container/Container';
import HomePage from './Pages/HomePage/HomePage';
import Nav from './Components/Nav/Nav';
import UsersPage from './Pages/UsersPage/UsersPage';
import PostsPage from './Pages/PostsPage/PostsPage';
import AlbumsPage from './Pages/AlbumsPage/AlbumsPage';
import SearchPage from './Pages/SearchPage/SearchPage';

function App() {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/albums' element={<AlbumsPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Container>
  );
}

export default App;
