import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ShimmerUi from "../Constants/ShimmerUi";

const Everything = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [leftProducts, setLeftProducts] = useState([]);
  const [rightProducts, setRightProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 40 });
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const filterProducts = useCallback(() => {
    let filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= priceRange.min &&
        product.price <= priceRange.max
    );

    setRightProducts(filtered);
  }, [allProducts, searchTerm, priceRange]);

  useEffect(() => {
    setLeftProducts(allProducts.slice(0, 3));
  }, [allProducts]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setAllProducts(result);

      setLeftProducts(result.slice(0, 3));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const pageHeadings = {
    "/": "Home",
    "/everything": "Shop",
    "/juice": "Juice",
    "/groceries": "Groceries",
  };

  const pageDescriptions = {
    "/": "Welcome to our home page! Explore a wide range of products in our online store.",
    "/everything":
      "Discover a diverse collection of products ranging from electronics to fashion. We have everything you need!",
    "/juice":
      "Quench your thirst with our refreshing juice selection. From classic flavors to unique blends, we have the perfect drink for every occasion.",
    "/groceries":
      "Find fresh and high-quality groceries for your everyday needs. Our carefully curated selection ensures that you get the best for your kitchen.",
  };
  if (loading) {
    return (
      <div className="flex bg-gray-200">
        <div className="w-1/3 p-4">
          {[1, 2, 3].map((index) => (
            <ShimmerUi/>
          ))}
        </div>
        <div className="w-2/3 p-4">
          {[1, 2, 3].map((index) => (
            <ShimmerUi/>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-200">
      <div className="w-1/3 p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 mr-2"
          />
          <button
            onClick={() => {
              setSearchTerm("");
              setPriceRange({ min: 0, max: 40 });
            }}
            className="px-4 py-2 bg-gray-500 text-white"
          >
            Clear Filters
          </button>
        </div>
        <div className="mb-4">
          <div className="text-center mb-2 bg-gray-200">
            Price Range: {priceRange.min} - {priceRange.max}
          </div>
          <Slider
            className="bg-gray-200"
            range
            min={0}
            max={40}
            step={5}
            value={[priceRange.min, priceRange.max]}
            onChange={(value) =>
              setPriceRange({ min: value[0], max: value[1] })
            }
          />
        </div>
        <div>
          {leftProducts.map((product) => (
            <Link to={`/ProductDetails/${product.id}`}>
              <div key={product.id}>
                <img src={product.imgURL} alt={product.name}></img>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-2/3 p-4">
        <div>
          <Link to="/">Home</Link>
          {location.pathname !== "/" && (
            <>
              <span>/</span>
              <Link to={location.pathname}>
                {pageHeadings[location.pathname]}
              </Link>
            </>
          )}
        </div>
        <h1 className="text-2xl text-green-800 mt-6">
          {pageHeadings[location.pathname]}
        </h1>
        <p className="text-xl mt-6">{pageDescriptions[location.pathname]}</p>

        <div className="mb-4 mt-8 text-xl font-bold">
          <p>Showing results for {rightProducts.length} products</p>
        </div>

        {rightProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div className="flex flex-wrap -mx-4 text-center">
            {allProducts.length === 0 && <ShimmerUi />}
            {rightProducts.map((product) => (
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
                <Link to={`/ProductDetails/${product.id}`}>
                  <div className="border border-gray-300 p-4">
                    <img
                      src={product.imgURL}
                      alt={product.name}
                      className="mb-2"
                    />
                    <h2 className="text-sm">{product.category}</h2>
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <h2 className="text-lg">${product.price}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Everything;
