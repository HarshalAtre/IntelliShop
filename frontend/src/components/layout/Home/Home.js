import React from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import Metadata from "../Metadata.js";

const product = {
    name: "Blue T shirt",
    images: [{
        url: "https://i.ibb.co/DRST11n/1.webp"
    }],
    price: '1,999',
    id: "abhishek"
};


const Home = () => { 

  return (
   <>

          <Metadata title="Ecommerce"/> 
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container"> 
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
      
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            
          </div>
        </>
  );
};

export default Home;