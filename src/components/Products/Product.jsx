import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/project";

const Product = () => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (!data){
          console.error("No product data found.");
          return;
        }
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        alert("Error fetching product data. Please try again later.");
      });
  }, []);

  return (
    <section className="product-div">
      <div className="flex flex-wrap justify-center gap-10 px-[6%]">
        {products && products.map((product) => (
          <div
            key={product._id}
            className="bg-green-900 rounded-lg text-black hover:text-white flex flex-col items-center p-4 max-w-md w-full"
            style={{ flex: '1 1 350px' }}
          >
            {/* Product Title Image */}
            <img
              src={product.title_image}
              alt={product.product_name}
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            {/* Product Name (clickable) */}
            <button
              onClick={() => navigate(`/projectdetail/${product._id}`)}
              className="text-xl font-bold text-green-700 hover:underline mb-4 bg-white rounded px-3 py-1"
            >
              {product.product_name}
            </button>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Product;