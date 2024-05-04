import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/nopage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductpage from "./pages/admin/UpdateProductpage";
import MyState from "./context/myState";
import {Toaster} from 'react-hot-toast';
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";

const App = () => {
  return (
    <MyState>
       <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/*" element={<NoPage/>}/>
          <Route path="/productInfo/:id" element={<ProductInfo/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/allProduct" element={<AllProduct/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/category/:categoryname" element={<CategoryPage/>}/>
          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard/>
            </ProtectedRouteForUser>
          }/>
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard/>
            </ProtectedRouteForAdmin>
          }/>
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage/>
            </ProtectedRouteForAdmin>
          }/>
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductpage/>
            </ProtectedRouteForAdmin>
          }/>
        </Routes>
        <Toaster/>
       </Router>
    </MyState>
  )
}

export default App