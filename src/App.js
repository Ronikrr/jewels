
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/home';
import NavAds from './Components/navads';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Product from './Pages/product';
import Category from './Pages/category';
import Login from './Pages/login';
import Wishlist from './Pages/wishlist';
import Addtocart from './Pages/Addtocart';
import AboutUs from './Components/AboutUs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions';
import ExchangeAndBuyBack from './Components/ExchangeAndBuyBack';
import ShippingPolicies from './Components/ShippingPolicies';
import ReturnPolicies from './Components/ReturnPolicies';
import CreateAccountPage from './Components/CreateAccountPage';
import AccountPage from './Components/AccountPage';
import Productview from './Components/product/productview';
import Contactusfrom from './Components/product/contactsectionpage'
import Contactusfrominqury from './Components/product/Contactusfrominqury'
import Jewelry from './Components/product/Jewelry';
import ScrollToTop from './Components/ui/ScrollToTop'
function App() {
  return (
    <Router>
      <div className="">
        <NavAds />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/category' element={<Category />} />
          <Route path='/login' element={<Login />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/addtocart' element={<Addtocart />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsAndConditions />} />
          <Route path='/exchange' element={<ExchangeAndBuyBack />} />
          <Route path='/shipping' element={<ShippingPolicies />} />
          <Route path='/return' element={<ReturnPolicies />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/useraccount" element={<AccountPage />} />
          <Route path="/contactus" element={<Contactusfrom />} />
          <Route path="/contactus/:link" element={<Contactusfrominqury />} />
          <Route path="/:category" element={<Jewelry />} />
          <Route path="/:category/:link" element={<Productview />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
