import React, { useRef } from "react";
import { Link } from "react-router-dom";

function PromotionSection() {
  const scrollToTop = useRef(null);

  const handleShopNowClick = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex justify-between p-4 sm:p-14 text-white bg-black">
      <p className="text-xl sm:text-3xl mt-4">
        Get 25% Off On Your First Purchase!
      </p>
      <Link to="/">
        <button
          ref={scrollToTop}
          onClick={handleShopNowClick}
          className="bg-green-500 m-2 sm:m-4 p-2 sm:p-4"
        >
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default PromotionSection;
