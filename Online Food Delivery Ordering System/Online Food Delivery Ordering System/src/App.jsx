import { Routes, Route } from "react-router-dom";

/* USER COMPONENTS */
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import CustomerHome from "./components/CustomerHome.jsx";
import Menu from "./components/Menu.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

/* ADMIN COMPONENTS */
import AdminLogin from "./admin/AdminLogin.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import ManageRestaurants from "./admin/ManageRestaurants.jsx";
import AddRestaurant from "./admin/AddRestaurant.jsx";
import EditRestaurant from "./admin/EditRestaurant.jsx";

function App() {
  return (
    <Routes>

      {/* USER ROUTES */}
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<CustomerHome />} />
      <Route path="/menu/:id" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* ADMIN ROUTES */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/restaurants" element={<ManageRestaurants />} />
      <Route path="/admin/add-restaurant" element={<AddRestaurant />} />
      <Route path="/admin/edit-restaurant/:id" element={<EditRestaurant />} />

    </Routes>
  );
}

export default App;
