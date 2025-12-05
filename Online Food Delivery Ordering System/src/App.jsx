import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import CustomerHome from "./components/CustomerHome.jsx";
import Menu from "./components/Menu.jsx";  // ⭐ Import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<CustomerHome />} />

      {/* ⭐ Dynamic Menu Route */}
      <Route path="/menu/:id" element={<Menu />} />
    </Routes>
  );
}

export default App;
