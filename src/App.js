import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Blog from './components/Pages/Blog/Blog';
import Login from './components/Pages/LoginDetails/Login/Login';
import Register from './components/Pages/LoginDetails/Register/Register';
import BuyNow from './components/Pages/BuyNow/BuyNow';
import RequireAuth from './components/Pages/LoginDetails/RequireAuth/RequireAuth';
import Footer from './components/Pages/Home/Footer/Footer';
import Dashboard from './components/Pages/Dashboard/Dashboard/Dashboard';
import DeleteProducts from './components/Pages/Dashboard/DeleteProducts/DeleteProducts';
import PlaceOrder from './components/Pages/BuyNow/PlaceOrder';
import ManageProducts from './components/Pages/Dashboard/ManageProducts/ManageProducts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/buyNow/:buyNowId' element={
          <RequireAuth>
            <BuyNow></BuyNow>
          </RequireAuth>
        }></Route>
        <Route path='/order/:buyNowId' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path='/manageProducts' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/manageProducts' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/deleteProducts' element={
          <RequireAuth>
            <DeleteProducts></DeleteProducts>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          {/* <Route path='/dashboard/manageProducts' element={
            <ManageProducts></ManageProducts>
          }></Route>
          <Route path='/dashboard/deleteProducts' element={
            <DeleteProducts></DeleteProducts>
          }></Route> */}
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>


    </div >
  );
}

export default App;
