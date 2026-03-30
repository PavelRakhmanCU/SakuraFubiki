import React from 'react';
import MenuItem from '../components/MenuItem';

const BrunchMenu = () => {
  const brunchMenu = [
  // Breakfast Dishes
  {
    id: 1,
    category: 'Breakfast Dishes',
    name: 'Japanese-Style Breakfast',
    price: 12,
    description: 'Grilled fish, rice, and miso soup'
  },
  {
    id: 2,
    category: 'Breakfast Dishes',
    name: 'Teriyaki Chicken Omelette',
    price: 10,
    description: 'Fluffy omelette filled with teriyaki chicken and served with steamed rice'
  },
  {
    id: 3,
    category: 'Breakfast Dishes',
    name: 'Matcha Pancakes',
    price: 8,
    description: 'Fluffy pancakes infused with green tea flavor, topped with whipped cream and fruit'
  },
  // Sandwiches
  {
    id: 4,
    category: 'Sandwiches',
    name: 'Teriyaki Chicken Sandwich',
    price: 12,
    description: 'Grilled chicken glazed with sweet teriyaki sauce, served on a toasted bun'
  },
  {
    id: 5,
    category: 'Sandwiches',
    name: 'Tuna Bap',
    price: 14,
    description: 'Seared tuna served on a bed of rice and mixed greens'
  },
  // Sides
  {
    id: 6,
    category: 'Sides',
    name: 'Hash Browns',
    price: 4,
    description: 'Crispy shredded potatoes'
  },
  {
    id: 7,
    category: 'Sides',
    name: 'Fresh Fruit Salad',
    price: 6,
    description: 'Seasonal fruit mixed with yogurt and granola'
  }
]; 
    return (
    <div className="brunch-menu">
      <div className="menu-heading">
        <h1>Brunch Menu</h1>
      </div>
      <section className="breakfast-dishes-section">
        <div className="section-heading">
          <h2>Breakfast Dishes</h2>
        </div>
        <div className="menu-items-container">
          {brunchMenu.filter(item => item.category === 'Breakfast Dishes').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="sandwiches-section">
        <div className="section-heading">
          <h2>Sandwiches</h2>
        </div>
        <div className="menu-items-container">
          {brunchMenu.filter(item => item.category === 'Sandwiches').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="sides-section">
        <div className="section-heading">
          <h2>Sides</h2>
        </div>
        <div className="menu-items-container">
          {brunchMenu.filter(item => item.category === 'Sides').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
    </div>
  );
};

export default BrunchMenu;