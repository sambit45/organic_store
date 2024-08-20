import Products from "./Products";
import React from "react";
import PromotionSection from "./PromotionSection";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const InfoBox = ({ title, description }) => (
  <div className="bg-gray-500 p-4 sm:p-10">
    <p className="text-2xl sm:text-3xl">{title}</p>
    <p>{description}</p>
  </div>
);

const SectionHeading = ({ title }) => (
  <div className="text-center">
    <p className="text-3xl font-bold">{title}</p>
  </div>
);

const SectionWithImage = ({ imageUrl, altText, backgroundColor }) => (
  <div className={`flex justify-center mt-4 ${backgroundColor}`}>
    <img src={imageUrl} alt={altText} />
  </div>
);

function Body() {
  
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <img
          className="p-4 sm:p-10 m-4"
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png"
          alt="Main-Page"
        ></img>
        <div className="mt-8 sm:mt-40 sm:ml-4">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
            alt="sideImage"
          ></img>
          <h1 className="text-xl sm:text-3xl mt-4 sm:mt-6">
            Best Quality Products
          </h1>
          <div className="text-xl sm:text-3xl mt-2 font-bold">
            <h1>Join The Organic</h1>
            <h1>Movement!</h1>
          </div>
          <div className="mt-4 sm:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <Link to="/">
            <button className="mt-2 sm:mt-6 bg-green-500 hover:bg-green-600 rounded-sm p-2 sm:p-3">
              Shop Now!
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-black text-white m-4 p-4 sm:m-10 sm:p-10  font-bold">
        <InfoBox title="Free Shipping" description="Above $5 Only" />
        <InfoBox title="Certified Organic" description="100% Guarantee" />
        <InfoBox title="Huge Savings" description="At Lowest Price" />
        <InfoBox title="Easy Returns" description="No Questions Asked" />
      </div>
      <SectionHeading title="Best Selling Products" />
      <div className="flex justify-center mt-4">
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
          alt="sideImage"
        ></img>
      </div>
      <Products />
      <SectionWithImage
        imageUrl="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"
        altText="whateverImage"
        backgroundColor="bg-gray-100"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-16 bg-slate-100">
        <ProductCard
          title="Farm Fresh Vegetable"
          description="Ut sollicitudin quam vel purus tempus, vel eleifend felis varius."
          imageUrl="data:image/jpeg;base64,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"
          altText="lemon"
        />
        <ProductCard
          title="Fresh Vegetables"
          description="Aliquam porta justo nibh, id laoreet sapien sodales vitae justo."
          imageUrl="data:image/jpeg;base64,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"
          altText="cabbage"
        />
        <ProductCard
          title="Organic Legume"
          description="Phasellus sed urna mattis, viverra libero sed, aliquam est."
          imageUrl="data:image/jpeg;base64,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"
          altText="chana"
        />
      </div>
      <PromotionSection />
      <SectionHeading title="Trending Products" />
      <div className="flex justify-center mt-4">
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
          alt="sideImage"
        ></img>
      </div>
      <Products />
    </>
  );
}

export default Body;
