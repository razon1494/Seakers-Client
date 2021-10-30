import './App.css';
import AddService from './Components/AddService/AddService';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyOrders from './Components/MyOrders/MyOrders';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import {BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import {Route, Switch} from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import NavBar from './Components/NavBar/NavBar';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import ShowService from './Components/ShowServices/ShowService';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <NavBar></NavBar>
          <br /><br /><br />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
            </Route>
            <Route exact path='/show'>
            <ShowService></ShowService>
          </Route>
          <PrivateRoute exact path='/addservice'>
            <AddService></AddService>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path='/manageorders'>
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute exact path='/myorders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path='/placeorder/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
      </Switch>
<Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
