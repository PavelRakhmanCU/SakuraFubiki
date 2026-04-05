const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dicvjx88i/image/upload/v1775403179/Sakura_Fubuki_new_banner_fmp5t6.jpg";
const HERO_IMAGE_URL_2 =
  "https://res.cloudinary.com/dicvjx88i/image/upload/v1775425166/Sakura_Fubuki_banner_image_2_t8z9qi.jpg";

const Hero = () => {
  return (
    <section className="hero" aria-label="Sakura Fubuki">
      <div className="hero__images" aria-hidden="true">
        <img
          className="hero__image hero__image--1"
          src={HERO_IMAGE_URL}
          alt=""
          decoding="async"
          fetchPriority="high"
        />
        <img
          className="hero__image hero__image--2"
          src={HERO_IMAGE_URL_2}
          alt=""
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="hero-heading-container">
        <h1 className="hero-heading">Sakura Fubuki</h1>
        <p className="hero-content">Where tradition meets taste</p>
      </div>
    </section>
  );
};

export default Hero;
