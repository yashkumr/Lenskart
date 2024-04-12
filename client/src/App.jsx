import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AdminRoute from "./Routes/AdminRoute.jsx";
import UserRoute from "./Routes/UserRoute.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import UserMenu from "./components/extraComponent/UserMenu.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AllUser from "./pages/Admin/AllUser.jsx";

import Category from "./pages/Admin/Category/index.jsx";
import Products from "./pages/Admin/Products/index.jsx";
import HomeBanner from "./pages/Admin/Banner/HomeBanner.jsx";
import UpdateBanner from "./pages/Admin/Banner/UpdateBanner.jsx";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-product" element={<Products />} />

          <Route path="admin/banner" element={<HomeBanner />} />
          <Route path="admin/all-users" element={<AllUser />} />
          <Route path="admin/create-category" element={<Category />} />
          <Route
            path="admin/banner/update-banner/:slug"
            element={<UpdateBanner />}
          />
        </Route>

        <Route path="/dashboard" element={<UserRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/profile" element={<UserMenu />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
