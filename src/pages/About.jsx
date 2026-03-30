import React from "react";
import Accordion from "../components/Accordion";

const AboutUs = () => {
  
  const AboutUs=[{
      title: "Our Story",
      text: `Sakura Fubuki was born from a bold idea: to bring a taste of Tokyo's crazy sushi scene to the heart of Minneapolis. It was 2015, and the founders, Kenji and Yui, were tired of just dreaming about it, so they took a leap of faith (and a deep breath, considering the competition).

Fast forward to today, and Sakura Fubuki is still standing – a testament to the power of determination, questionable life choices, and an endless supply of wasabi. We've navigated our fair share of peak-hour chaos (think Tokyo subway vibes, minus the courtesy nods), survived countless kitchen fires, and somehow managed to keep our sushi fresh (most of the time, anyway).

What hasn't changed is our commitment to serving up authentic Japanese flavors with a side of sass. Whether you're a sushi aficionado or just looking for a decent meal amidst the chaos, Sakura Fubuki is your spot. Come for the food, stay for the atmosphere – and maybe a few laughs`
    }]
  
  const OurMission = [
    
    {
      title: "Our Mission",
      text: `Our mission is to be your go-to spot for sushi and good vibes, minus the pretentiousness. We're on a quest to make Japanese food accessible, delicious, and – dare we say – fun. Whether you're grabbing a quick lunch or celebrating a special occasion, we aim to fill your belly and brighten your day, one sushi roll at a time`
    }]
    
  const OurVision = [{
    title: "Our Vision",
    text: `We envision Sakura Fubuki as more than just a restaurant – we see it as a bridge between cultures, a place where food sparks connections and memories. In a world where sushi can get lost in translation, we dream of being the spot where authenticity meets creativity, and every meal feels like a mini-adventure. Think Tokyo meets Minneapolis, with a side of laughter and great food`
  }]

  return (
    <div className="about-us-page">
      <div className="accordion-container">
        {AboutUs.map((item,index)=><Accordion key={index} title={item.title} text={item.text}/>)} 
      {OurMission.map((item,index)=><Accordion key={index} title={item.title} text={item.text}></Accordion>)}   
      {OurVision.map((item,index)=><Accordion key={index} title={item.title} text={item.text}></Accordion>)}
      </div>
      </div>
  
  
    
    

  )}
  


export default AboutUs; 