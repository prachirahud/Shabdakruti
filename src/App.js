import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Navbar from './Components/Navbar';
// import BannerCarousel from './Pages/BannerCarousel';
import Footer from './Pages/Footer';
// import PrintingPage from './Pages/PrintingPage';
// import DesignPage from './Pages/DesignPage';
// import GiftsPage from './Pages/GiftsPage';
// import CustomOrderPage from './Pages/CustomOrderPage';
import AwardsCertificaates from './Pages/Awards';
import CorporateGifts from './Pages/CorporateGifts';
import CustomOrderPage from './Pages/CustomOrderPage'; // Assuming you have this page
import GiftsPage from './Pages/GiftsPage'; // Assuming you have this page
import PrintingPage from './Pages/PrintingPage'; // Assuming you have this page
import GraphicDesign from './Pages/DesignPage'; // Assuming you have this page
import Bags from './Pages/Bags';
import Banner from './Pages/Banner';
import Cards from './Pages/Cards';
import Tshirts from './Pages/T-shirt';
import MulticolorPrint from './Pages/MultiColorPrint';
import CutomizedGifts from './Pages/CutomizedGifts';
import EmployeeJoinKit from './Pages/CorporateGift/employeeJoinkit';
import EngagementKit from './Pages/CorporateGift/EMployeeEngmtKit';
import Hampers from './Pages/CorporateGift/Hampers';
import Recognization from './Pages/CorporateGift/Reward&Reco';
import Accessories from './Pages/CorporateGift/Accessories';
import WhatsappFloat from './Pages/Whatsapp';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
      
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
    <Route path="/products" element={<Products />} />
<Route path="/services/printing" element={<PrintingPage />} />
<Route path="/services/design" element={<GraphicDesign />} />
<Route path="/services/gifts" element={<GiftsPage />} />
<Route path="/services/custom" element={<CustomOrderPage />} />
<Route path="/awards-certificates" element={<AwardsCertificaates />} />
<Route path="/corporate-gifts" element={<CorporateGifts />} />  
<Route path="/employee-joining" element={<EmployeeJoinKit />} />
        <Route path="/engagement" element={<EngagementKit />} />
        <Route path="/hampers" element={<Hampers />} />
        <Route path="/recognization" element={<Recognization />} />
<Route path="/accessories" element={<Accessories />} />
<Route path="/cutomizedgifts" element={<CutomizedGifts />} />
<Route path="/bags" element={<Bags />} />
<Route path="/banner" element={<Banner />} />
<Route path="/cards" element={<Cards />} />
<Route path="/tshirts" element={<Tshirts />} />
<Route path="/multicolor-print" element={<MulticolorPrint />} />
</Routes>
<WhatsappFloat /> {/* Appears on all pages */}
      <Footer />
   </BrowserRouter>
  );
}

export default App;
