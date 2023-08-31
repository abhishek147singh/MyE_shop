import { lazy, useEffect, useState, Suspense } from 'react';
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddScreen from './screens/ShippingAddScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import axios from 'axios';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './componets/ProtectedRoute';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './componets/AdminRoute';
import CancelIcon from '@mui/icons-material/Cancel';
const DeshboardScreen = lazy(() => import('./screens/DeshboardScreen'));
const AdminOrderScreen = lazy(() => import('./screens/AdminOrderScreen'));
const AdminOrderInfo = lazy(() => import('./screens/AdminOrdersInfo'));
const AdminProductScreen = lazy(() => import('./screens/AdminProductScreen'));
const CreateProductScreen = lazy(() => import('./screens/CreateProductScreen'));
const AdminUserScreen = lazy(() => import('./screens/AdminUserScreen'));
const EditProductScreen = lazy(() => import('./screens/EditProductScreen'));
const EditUserScreen = lazy(() => import("./screens/EditUserScreen"));

function App() {
  const [sidebarIsOen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const { data } = await axios.get('/api/products/categories');
        setCategories(data);
      } catch (err) {
        alert("Error : " + err.message);
      }
    }
    fetchCategories();

  }, []);

  function sideBarIcon() {
    return (
      <IconButton color='primary' onClick={() => { setSidebarIsOpen(!sidebarIsOen) }}>
        <MenuIcon />
      </IconButton>
    )
  }

  return (
    <div className={sidebarIsOen ? "App active-const" : "App"}>
      <BrowserRouter>
        <Header sideBarIcon={sideBarIcon} />
        <div className={
          sidebarIsOen ? 'active-nav side-navbar second'
            : 'side-navbar second'
        }>
          <nav className='nav'>
            <div style={{ marginLeft: "150px", width: "50px" }}>
              <IconButton color='primary' onClick={() => { setSidebarIsOpen(!sidebarIsOen) }}>
                <CancelIcon />
              </IconButton>
            </div>
            <div>
              <strong> Categories</strong>
            </div>
            <div>
              {
                (categories !== undefined) ? (
                  categories.map(category => (
                    <div key={category} className="space-between" onClick={() => setSidebarIsOpen(false)}>
                      <Link style={{ color: "#fff" }} to={`/search?category=${category}`}>{category}</Link>
                    </div>
                  ))) : null
              }
            </div>
          </nav>
        </div>
        <Suspense fallback={<div>Please wait!!, We are making things ready for you...</div>}>
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path='/products/:id' element={<ProductDetails />}></Route>
            <Route path='/cart' element={<CartScreen />}></Route>
            <Route path='/signin' element={<SigninScreen />}></Route>
            <Route path='/shipping' element={<ShippingAddScreen />}></Route>
            <Route path='/signup' element={<SignupScreen />}></Route>
            <Route path='/payment' element={<PaymentScreen />}></Route>
            <Route path='/placeorder' element={<PlaceOrderScreen />}></Route>
            <Route path='/order/:id'
              element={
                <ProtectedRoute>
                  <OrderScreen />
                </ProtectedRoute>
              }></Route>
            <Route path='/orderhistory'
              element={
                <ProtectedRoute>
                  <OrderHistoryScreen />
                </ProtectedRoute>
              }></Route>
            <Route path='/search' element={<SearchScreen />}></Route>
            <Route path='/profile' element={
              <ProtectedRoute >
                <ProfileScreen />
              </ProtectedRoute>
            }></Route>

            <Route path='/admin/dashboard' element={
              <AdminRoute >
                <DeshboardScreen />
              </AdminRoute>
            }></Route>
            <Route path='/admin/orders' element={
              <AdminRoute >
                <AdminOrderInfo />
              </AdminRoute>
            }></Route>
            <Route path='/admin/order/:id' element={
              <AdminRoute >
                <AdminOrderScreen />
              </AdminRoute>
            }></Route>
            <Route path='/admin/products' element={
              <AdminRoute >
                <AdminProductScreen />
              </AdminRoute>
            }></Route>
            <Route path='/admin/createproduct' element={
              <AdminRoute >
                <CreateProductScreen />
              </AdminRoute>
            }></Route>
            <Route path='/admin/users' element={
              <AdminRoute >
                <AdminUserScreen />
              </AdminRoute>
            }></Route>
            <Route path='/admin/product/:id' element={
              <AdminRoute >
                <EditProductScreen />
              </AdminRoute>
            }></Route>
            <Route path='/admin/user/:id' element={
              <AdminRoute >
                <EditUserScreen />
              </AdminRoute>
            }></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
