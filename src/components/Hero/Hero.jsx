import herobg from "../../assets/hero-bg.svg"
// import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Just <span className="spanner">Eat healthy</span> food to live a healthier life
        </h1>
        <p className="hero__subtitle">
          Enjoy a healthy life by eating healthy foods that have extraordinary
          flavors that make your life healthier for today and in the future
        </p>

        <button className="btn__hero">Order Now</button>
      </div>
    </div>
  );
}

export default Hero