import { Routes, Route } from 'react-router-dom';
import './App.css';
import Container from './Components/Container/Container';
import HomePage from './Pages/HomePage/HomePage';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
