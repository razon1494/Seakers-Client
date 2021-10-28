import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/addservice'>
            <AddService></AddService>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/manageorders'>
            <ManageOrders></ManageOrders>
          </Route>
          <Route exact path='/myorders'>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
