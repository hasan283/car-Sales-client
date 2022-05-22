import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Blog from './components/Pages/Blog/Blog';
import Login from './components/Pages/LoginDetails/Login/Login';
import Register from './components/Pages/LoginDetails/Register/Register';
import BuyNow from './components/Pages/BuyNow/BuyNow';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/buyNow/:buyNowId' element={<BuyNow></BuyNow>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div >
  );
}

export default App;
