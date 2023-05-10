import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ResponsiveNav from "./Components/ResponsiveNav/ResponsiveNav";
import Home from "./Components/Home/Home/Home";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import Events from "./Components/Home/Events/Events";
import Reviews from "./Components/Reviews/Reviews";
import AddReviews from "./Components/Reviews/AddReview";
import AddEvent from "./Components/Home/Add/AddEvent";
import EventDetails from "./Components/Home/Events/EventDetails";
import Contact from "./Components/contact/Contact";
import About from "./Components/About/About";
import ManageOrders from "./Components/Order/ManageOrders";
import AdminRoute from "./Components/Login/PrivateRoute/AdminRoute";
import Products from "./Components/Products/Products";
import Gallery from "./Components/Gallery/Gallery";
import Verification from "./Components/Login/Register/Verification.js";
import ForgotPassword from "./Components/Login/Login/ForgotPassword";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ResponsiveNav></ResponsiveNav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/Events">
              <Events></Events>
            </Route>
            <Route path="/Products">
              <Products></Products>
            </Route>
            <Route path="/Reviews">
              <Reviews></Reviews>
            </Route>
            <Route exact path="/Gallery">
              <Gallery></Gallery>
            </Route>
            <PrivateRoute path="/AddReviews">
              <AddReviews></AddReviews>
            </PrivateRoute>
            <PrivateRoute path="/EventDetails/:id">
              <EventDetails></EventDetails>
            </PrivateRoute>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword></ForgotPassword>
            </Route>
            <Route path="/Register">
              <Register></Register>
            </Route>
            <Route path="/Verification">
              <Verification></Verification>
            </Route>

            <AdminRoute path="/AddEvent">
              <AddEvent></AddEvent>
            </AdminRoute>

            <AdminRoute path="/ManageOrders">
              <ManageOrders></ManageOrders>
            </AdminRoute>

            <Route exact path="/Contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/About">
              <About></About>
            </Route>

            <Router path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
