import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import UserLayout from "./layout/UserLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import ProtectRoute from "./layout/ProtectRoute";
import AuthRoute from "./layout/AuthRoute";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Order from "./pages/admin/Order";
import Products from "./pages/admin/Products";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectRoute><UserLayout /></ProtectRoute>}>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Route>

          <Route path="/login" element={<AuthRoute><AuthLayout/></AuthRoute>}>
            <Route index element={<Login/>}/>
          </Route>

          <Route path="/admin" element={<ProtectRoute><AdminLayout/></ProtectRoute>}>
            <Route index element={<Dashboard/>} />
            <Route path="order" element={<Order/>}/>
            <Route path="products" element={<Products/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
