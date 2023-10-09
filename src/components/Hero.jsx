import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid items-center gap-24 lg:grid-cols-2">
      <div className="space-y-8">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dicta illo, quae illum eligendi nisi aliquid culpa
          porro fugiat neque!
        </p>
        <Link to="/products" className="btn btn-primary">
          Our products
        </Link>
      </div>
      <div className="carousel-center rounded-box hidden h-[28rem] space-x-4 bg-neutral p-4 lg:carousel">
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
};

export default Hero;
