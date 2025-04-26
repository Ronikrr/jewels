import React from 'react'
import Navbar from '../Components/navbar'
import NavAds from '../Components/navads'
import UspSection from '../Components/uspsection'
import ProductSlider from '../Components/ProductSlider'
import Banner from '../Components/banner'
import FAQ from '../Components/faq\'s'
import ShopByCategory from '../Components/ShopByCategory'
import Shopbystyle from '../Components/stylebyshape'
import DesignYourOwnSection from '../Components/DesignYourOwnSection'
import Yourdreamcreate from '../Components/Yourdreamcreate' 
import GiftGuideSlider from '../Components/GiftGuideSection'
import JewelrySection from '../Components/JewelrySection'
import Footer from '../Components/footer'
import GoogleReviews from '../Components/GoogleReviews'

const Home = () => {
    return (
        <div>
            {/* <NavAds /> */}
            {/* <Navbar /> */}
            <Banner />
            <Shopbystyle />
            <DesignYourOwnSection />
            <UspSection />
            <ShopByCategory />
            <JewelrySection />
            <GiftGuideSlider />
            <Yourdreamcreate />
            <ProductSlider />
            {/* <GoogleReviews /> */}
            <FAQ />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
