import React from 'react'
import ProductPageFAQ from '../Components/Productpagefaq'
import ProductSlider from '../Components/ProductPage'
import ItemDetails from '../Components/ProductItemDetails'
import YouMayAlsoLike from '../Components/YouMayAlsoLike'
import Reviews from '../Components/ProductReviews'

const Product = () => {
    return (
        <div>
            <section class="mx-auto max-w-[110rem] breadcrumb-container hidden md:block">
                <div class="breadcrumb flex flex-wrap p-4 text-[10px] lg:text-[14px] font-normal figtree">
                    <a href="https://www.Jewellsjewels.com/" class="hidden md:block" data-uw-rm-brl="PR" data-uw-original-href="https://www.Jewellsjewels.com/">Home /&nbsp; </a>
                    <a href="https://www.Jewellsjewels.com/" class=" underline" data-uw-rm-brl="PR" data-uw-original-href="https://www.Jewellsjewels.com/"> Wedding &amp; Anniversary Bands</a>
                     {/* <a href="https://www.grownbrilliance.com/eternity-rings" class="active" data-uw-rm-brl="PR" data-uw-original-href="https://www.grownbrilliance.com/eternity-rings">Eternity Rings</a> */}
                </div>
            </section>
            <ProductSlider />
            <ItemDetails />
            <YouMayAlsoLike />
            <Reviews />
            {/* <ProductPageFAQ /> */}
        </div>
    )
}

export default Product