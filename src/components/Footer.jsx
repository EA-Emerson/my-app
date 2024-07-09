import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#27493E] text-white py-8 px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-sm">
            <h2 className="font-bold mb-4 text-sm">Company</h2>
            <ul>
              <li>
                <a href="/about" className="text-xs">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-xs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-bold mb-4 text-sm">Legal</h2>
            <ul>
              <li>
                <a href="/terms" className="text-xs">
                  Terms
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-xs">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-bold mb-4 text-sm">Quick Links</h2>
            <ul>
              <li>
                <a href="/categories" className="text-xs">
                  Categories
                </a>
              </li>
              <li>
                <a href="/new-products" className="text-xs">
                  New Products
                </a>
              </li>
              <li>
                <a href="/top-deals" className="text-xs">
                  Top Deals
                </a>
              </li>
              <li>
                <a href="/subscription" className="text-xs">
                  Subscription
                </a>
              </li>
              <li>
                <a href="/furniture-makers" className="text-xs">
                  Our Furniture Makers
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-bold mb-4 text-sm">Help and Information</h2>
            <ul>
              <li>
                <a href="/delivery" className="text-xs">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-xs">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/support" className="text-xs">
                  Help and Support
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-xs">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-24 h-24 border-white border-2 rounded-full p-4 flex items-center justify-center mt-12 mx-auto">
          <h2 className="text-xl font-bold">dEKOR</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
