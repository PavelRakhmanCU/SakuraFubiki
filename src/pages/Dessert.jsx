import React from 'react';
import MenuItem from '../components/MenuItem';

const DessertMenu = () => {
  const dessertMenu = [
  // Traditional Japanese Desserts
  {
    id: 1,
    category: 'Traditional Japanese Desserts',
    name: 'Mochi Ice Cream',
    price: 6,
    description: 'Soft and chewy mochi filled with green tea, mango, or coconut ice cream'
  },
  {
    id: 2,
    category: 'Traditional Japanese Desserts',
    name: 'Manju',
    price: 6,
    description: 'Steamed buns filled with sweet bean paste'
  },
  {
    id: 3,
    category: 'Traditional Japanese Desserts',
    name: 'Green Tea Ice Cream',
    price: 5,
    description: 'Creamy ice cream infused with green tea flavor'
  },
  // Japanese-Inspired Desserts
  {
    id: 4,
    category: 'Japanese-Inspired Desserts',
    name: 'Matcha Tiramisu',
    price: 8,
    description: 'Ladyfingers soaked in green tea and liqueur, layered with whipped cream'
  },
  {
    id: 5,
    category: 'Japanese-Inspired Desserts',
    name: 'Sakura Mousse',
    price: 8,
    description: 'Light and airy mousse infused with cherry blossom flavor'
  }
]
    return (
    <div className="dessert-menu">
      <div className="menu-heading">
        <h1>Dessert Menu</h1>
      </div>
      <section className="traditional-japanese-desserts-section">
        <div className="section-heading">
          <h2>Traditional Japanese Desserts</h2>
        </div>
        <div className="menu-items-container">
          {dessertMenu.filter(item => item.category === 'Traditional Japanese Desserts').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="japanese-inspired-desserts-section">
        <div className="section-heading">
          <h2>Japanese-Inspired Desserts</h2>
        </div>
        <div className="menu-items-container">
          {dessertMenu.filter(item=>item.category==='Japanese-Inspired Desserts').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
    </div>
  );
};

export default DessertMenu;