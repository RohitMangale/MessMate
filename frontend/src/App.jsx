import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import CheckOut from "./Pages/CheckOut";
// import OrderDetails from "./components/OrderDetails";
import User from "./Pages/UserDashboard/User";
import MessPage from "./Pages/MessDashboard.jsx/MessPage";
import AddItemForm from "./Pages/MessDashboard.jsx/AddItemForm";

import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Home />} />

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={"user"} />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/userdashboard" element={<User />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={"mess_staff"} />}>
          <Route path="/messdashboard" element={<MessPage />} />
          <Route path="/dashboard/addfooditem" element={<AddItemForm />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
