import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 w-full bg-[#001524] text-white p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="items-start mb-4 md:mb-0">
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png" // Replace with your logo URL
          alt="logo"
          className="h-8 mb-2"
        />
        <p className="text-sm">
          Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut
          quis eros blandit, ultrices diam in, elementum ex.
        </p>
      </div>
      <div className="mr-8">
        <p className="text-lg font-bold mb-2 md:mb-0">Quick Links</p>
        <div className="flex flex-col md:flex-row">
          <FooterLink to="/" label="Home" />
          <FooterLink to="/about" label="About" />
          <FooterLink to="/contact" label="Contact" />
          <FooterLink to="/everything" label="Everything" />
          <FooterLink to="/groceries" label="Groceries" />
          <FooterLink to="/juice" label="Juice" />
        </div>
      </div>
    </div>
  );
};

const FooterLink = ({ to, label }) => (
  <Link to={to}>
    <span className="cursor-pointer block mb-2 md:mb-0 md:mr-4 hover:text-green-500 transition">{label}</span>
  </Link>
);

export default Footer;
