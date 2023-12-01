import React, { useState, useEffect } from "react";

const ProductsList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <div className="top-bar">
        <h1>Available Products</h1>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="image-container fade-overlay">
              <img
                className="product-image"
                src={`${product.thumbnail}`}
                alt=""
              ></img>
            </div>
            <div className="product-information">
              <div className="product-info-top">
                <h2 className="title">{product.title}</h2>
                <p className="price">${product.price}</p>
                <button
                  onClick={() => {
                    onAddToCart(product);
                  }}
                  className="addtoCart"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
