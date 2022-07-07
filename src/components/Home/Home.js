import React from "react";
import "./Home.css";
import Van from "../Images/van.png";
import badge from "../Images/badge.png";
import creditcard from "../Images/secure.png";
import images from "../Imagelink";
import {motion} from "framer-motion";
import {useRef, useEffect , useState} from "react";
import bg from "../Images/bg.png";
import {categories} from "../data";

function Home() {

  const [width,setWidth] =useState(0);
  const carousel = useRef();
  useEffect(() => {
     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);
  
  return (
    <div className="homePage">
      <div className="First">
        <div className="circle-3"></div>
        <img src={bg} />
        <div>
          <span>Explore Amazing Fashionable Wearings</span>
          <a href="/Shop" className="bttn-first">
            Shop Now
          </a>
        </div>
      </div>

      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <h2>Trend Products</h2>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <h2>BEST PRODUCTS</h2>
      <div className="Third">
        {categories.map((cat) => {
          return (
            <div className="cat-cards" key={cat}>
              <img src={cat.img} />
              <div>
                <span>${cat.price}</span>
                <span>{cat.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
