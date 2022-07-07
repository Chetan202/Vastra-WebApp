import React from 'react'
import "./Shop.css"
import {Men,Women,Child} from "../data";
import cart from "../Images/cart.png";
import { FemaleOutlined } from '@mui/icons-material';

export default function Shop() {
  return (
    <div className="Page">
      <div className="title">MEN</div>
      <div className="Part">
        {Men.map((male) => {
          return (
            <div className="male-cards" key={male}>
              <img src={male.img} />
              <div>
                <span>{male.name}</span>
                <span>${male.price}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="title">WOMEN</div>
      <div className="Part">
        {Women.map((female) => {
          return (
            <div className="female-cards" key={female}>
              <img src={female.img} />

              <div className="info-span">
                <span>{female.name}</span>
                <span>${female.price}</span>
              </div>
              <div className="desciption">
                <button className="addCart" key={female.price}>
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="title">KIDS</div>
      <div className="Part">
        {Child.map((kids) => {
          return (
            <div className="kids-cards" key={kids}>
              <img src={kids.img} />
              <div>
                <span>${kids.price}</span>
                <span>{kids.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
