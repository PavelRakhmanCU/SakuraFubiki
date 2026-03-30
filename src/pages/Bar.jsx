import React from 'react';
import MenuItem from '../components/MenuItem';

const BarMenu = () => {
const barMenu = [
  // Sake
  {
    id: 1,
    category: 'Sake',
    name: 'Junmai Sake',
    price: 8,
    description: 'Rich and full-bodied sake made from Japanese rice'
  },
  {
    id: 2,
    category: 'Sake',
    name: 'Daiginjo Sake',
    price: 12,
    description: 'Light and refined sake made from high-quality rice'
  },
  // Japanese Beers
  {
    id: 3,
    category: 'Japanese Beers',
    name: 'Asahi Super Dry',
    price: 6,
    description: 'Crisp and refreshing Japanese lager'
  },
  {
    id: 4,
    category: 'Japanese Beers',
    name: 'Sapporo',
    price: 7,
    description: 'Rich and malty Japanese lager'
  },
  // Cocktails
  {
    id: 5,
    category: 'Cocktails',
    name: 'Sakura Martini',
    price: 12,
    description: 'Gin, cherry liqueur, and lemon juice mixed with a splash of sparkling water'
  },
  {
    id: 6,
    category: 'Cocktails',
    name: 'Yuzu Gimlet\'s Kiss',
    price: 10,
    description: 'Gin, yuzu juice, and simple syrup mixed with a splash of soda water'
  },
                
  
  {
    id: 7,
    category: 'Other Drinks',
    name: 'Japanese Iced Tea',
    price: 4,
    description: 'Refreshing green tea served over ice'
  },
  {
    id: 8,
    category: 'Other Drinks',
    name: 'Ramune',
    price: 5,
    description: 'Japanese soda with a unique bottle design'
  }
];   
  
    return (
    <div className="bar-menu">
      <div className="menu-heading">
        <h1>Bar Menu</h1>
      </div>
      <section className="sake-section">
        <div className="section-heading">
          <h2>Sake</h2>
        </div>
        <div className="menu-items-container">
          {barMenu.filter(item=> item.category === 'Sake').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="japanese-beers-section">
        <div className="section-heading">
          <h2>Japanese Beers</h2>
        </div>
        <div className="menu-items-container">
          {barMenu.filter(item=> item.category === 'Japanese Beers').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="cocktails-section">
        <div className="section-heading">
          <h2>Cocktails</h2>
        </div>
        <div className="menu-items-container">
          {barMenu.filter(item=> item.category === 'Cocktails').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="other-drinks-section">
        <div className="section-heading">
          <h2>Other Drinks</h2>
        </div>
        <div className="menu-items-container">
          {barMenu.filter(item => item.category === 'Other Drinks').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
    </div>
  );
};

export default BarMenu;