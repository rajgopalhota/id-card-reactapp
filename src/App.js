import './App.css';
import Home from './components/Home';
import Card from './components/Id';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Card />}></Route>
      </Routes>
    </>
  );
}

export default App;
