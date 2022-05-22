import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Blog from './components/Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>

    </div>
  );
}

export default App;
