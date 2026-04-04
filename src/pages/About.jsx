import React from "react";

const splitParagraphs = (text) =>
  text
    .split(/\n\s*\n/)
    .map((p) => p.trim().replace(/\s+/g, " "))
    .filter(Boolean);

const illustrationUrls = [
  {
    imageURL:
      "https://res-console.cloudinary.com/dicvjx88i/thumbnails/v1/image/upload/v1775320475/U2FrdXJhRnVidWtpX1Rva3lvX3pkYTFkZw==/drilldown",
    altText: "Sakura Fubuki illustration",
  },
  {
    imageURL:
      "https://res-console.cloudinary.com/dicvjx88i/thumbnails/v1/image/upload/v1775320475/S2VuamlfYW5kX1l1aV9teHZ6emk=/drilldown",
    altText:
      "Kenji and Yui back to back against the backdrop showing contrast between Minneapolis and Tokyo",
  },
];

const sakuraIllustration = illustrationUrls[0];
const kenjiAndYuiIllustration = illustrationUrls[1];

const sections = [
  {
    id: "story",
    title: "Our Story",
    paragraphs: splitParagraphs(`Sakura Fubuki was born from a bold idea: to bring a taste of Tokyo's crazy sushi scene to the heart of Minneapolis. It was 2015, and the founders, Kenji and Yui, were tired of just dreaming about it, so they took a leap of faith (and a deep breath, considering the competition).

Fast forward to today, and Sakura Fubuki is still standing – a testament to the power of determination, questionable life choices, and an endless supply of wasabi. We've navigated our fair share of peak-hour chaos (think Tokyo subway vibes, minus the courtesy nods), survived countless kitchen fires, and somehow managed to keep our sushi fresh (most of the time, anyway).

What hasn't changed is our commitment to serving up authentic Japanese flavors with a side of sass. Whether you're a sushi aficionado or just looking for a decent meal amidst the chaos, Sakura Fubuki is your spot. Come for the food, stay for the atmosphere – and maybe a few laughs.`),
    image: kenjiAndYuiIllustration,
  },
  {
    id: "mission",
    title: "Our Mission",
    paragraphs: splitParagraphs(`Our mission is to be your go-to spot for sushi and good vibes, minus the pretentiousness. We're on a quest to make Japanese food accessible, delicious, and – dare we say – fun. Whether you're grabbing a quick lunch or celebrating a special occasion, we aim to fill your belly and brighten your day, one sushi roll at a time.`),
    image: sakuraIllustration,
  },
  {
    id: "vision",
    title: "Our Vision",
    paragraphs: splitParagraphs(`We envision Sakura Fubuki as more than just a restaurant – we see it as a bridge between cultures, a place where food sparks connections and memories. In a world where sushi can get lost in translation, we dream of being the spot where authenticity meets creativity, and every meal feels like a mini-adventure. Think Tokyo meets Minneapolis, with a side of laughter and great food.`),
    image: null,
  },
];

const AboutUs = () => {
  return (
    <main className="about-us-page">
      <header className="about-us-header">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-intro">
          Sakura Fubuki — where tradition meets taste, and every chapter comes with a story.
        </p>
      </header>

      {sections.map((section, index) => {
        const hasImage = Boolean(section.image);
        const reverse = hasImage && index % 2 === 1;

        return (
          <section
            key={section.id}
            className={`about-section ${hasImage ? "" : "about-section--text-only"} ${
              reverse ? "about-section--reverse" : ""
            }`}
            aria-labelledby={`about-heading-${section.id}`}
          >
            {hasImage && (
              <figure className="about-section__figure">
                <img
                  className="about-section__img"
                  src={section.image.imageURL}
                  alt={section.image.altText}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            )}
            <div className="about-section__content">
              <h2 className="about-section__heading" id={`about-heading-${section.id}`}>
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="about-section__text">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default AboutUs;
