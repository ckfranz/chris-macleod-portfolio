import React from "react";
import Layout from "../../components/Layout";

const ShopCards = () => {
  return (
    <Layout>
      <div className="shop-page">
        <div className="shop-header">
          <h1>Cards</h1>
          <p>
            5x7" cards are available for a number of pieces in my watercolour
            studies and vintage book page collections. These can be purchased
            individually, in sets of 5, or sets of 10.
          </p>
        </div>
        {/* Add ShopGallery here when card data is available */}
      </div>
    </Layout>
  );
};

export default ShopCards;
