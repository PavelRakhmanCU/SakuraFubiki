const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dicvjx88i/image/upload/v1775403179/Sakura_Fubuki_new_banner_fmp5t6.jpg";

const Hero = () => {
  return (
    <section className="hero" aria-label="Sakura Fubuki">
      <img
        className="hero__image"
        src={HERO_IMAGE_URL}
        alt=""
        decoding="async"
        fetchPriority="high"
      />
      <div className="hero-heading-container">
        <h1 className="hero-heading">Sakura Fubuki</h1>
        <p className="hero-content">Where tradition meets taste</p>
      </div>
    </section>
  );
};

export default Hero;
