import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#16528f] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden lg:flex justify-between">
          

          {/* Spacing added using grid and gap */}
          <div className="grid grid-cols-3 gap-40">
            {/* Customer Service Section */}
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>Support Center</li>
                <li>Free Shipping</li>
                <li>Free Returns</li>
                <li>Warranty</li>
                <li>Payment & Financing</li>
                <li>Special Offers</li>
              </ul>
            </div>

            {/* More Info Section */}
            <div>
              <h3 className="font-semibold mb-4">Policies</h3>
              <ul className="space-y-2">
                <li>Exchange & Buy Back Policies</li>
                <li>Shipping Policies</li>
                <li>Return Policies</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li> 
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>Live Chat</li>
                <li>Email Us</li>
                <li>877-476-9627</li>
                <li>Book an Appointment</li>
                <li>Store Locator</li>
                <li>Affiliates</li>
              </ul>
            </div>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <p className="mb-4">Get on the Guest List</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Sign Me Up"
                className="p-2 rounded-l-md text-black"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-md">
                →
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">Pinterest</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold"></h2>
          </div>

          {/* Customer Service Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Customer Service</h3>
            <button className="block w-full text-left">Support Center</button>
            <button className="block w-full text-left">Free Shipping</button>
            <button className="block w-full text-left">Free Returns</button>
            <button className="block w-full text-left">Warranty</button>
            <button className="block w-full text-left">Payment & Financing</button>
            <button className="block w-full text-left">Special Offers</button>
          </div>

          {/* More Info Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Policies</h3>
            <button className="block w-full text-left">Exchange & Buy Back Policies</button>
            <button className="block w-full text-left">Shipping Policies</button>
            <button className="block w-full text-left">Return Policies</button>
            <button className="block w-full text-left">Terms & Conditions</button>
            <button className="block w-full text-left">Privacy Policy</button>
          </div>

          {/* Contact Us Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <button className="block w-full text-left">Live Chat</button>
            <button className="block w-full text-left">Email Us</button>
            <button className="block w-full text-left">877-476-9627</button>
            <button className="block w-full text-left">Book an Appointment</button>
            <button className="block w-full text-left">Store Locator</button>
            <button className="block w-full text-left">Affiliates</button>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <p className="mb-4">Get on the Guest List</p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Sign Me Up"
                className="p-2 rounded-l-md text-black w-full"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-md">
                →
              </button>
            </form>
            <div className="flex space-x-4">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">Pinterest</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-10 pt-6 text-sm text-center">
          <p>© 2024 Jewells.com | <a href="#" className="underline">Terms & Conditions</a> | <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Do Not Sell My Information</a> | <a href="#" className="underline">Site Map</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;