import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import axios from "axios";

const carouselImages = [hero1, hero2, hero3, hero4];
function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center py-20">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tighter sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quod
          voluptates molestias magni dignissimos voluptate porro quos excepturi
          iste laboriosam.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                alt=""
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
