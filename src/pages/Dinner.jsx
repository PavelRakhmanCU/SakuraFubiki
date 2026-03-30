import React from 'react';
import MenuItem from '../components/MenuItem';

const DinnerMenu = () => {
  const dinnerMenu = [
  // Appetizers
  {
    id: 1,
    category: 'Appetizers',
    name: 'Edamame',
    price: 6,
    description: 'Steamed soybeans in sea salt'
  },
  {
    id: 2,
    category: 'Appetizers',
    name: 'Gyoza',
    price: 8,
    description: 'Pan-fried dumplings filled with pork and vegetables'
  },
  {
    id: 3,
    category: 'Appetizers',
    name: 'Agedashi Tofu',
    price: 7,
    description: 'Deep-fried tofu in light broth'
  },
  // Salads
  {
    id: 4,
    category: 'Salads',
    name: 'Mixed Greens with Asian-Style Dressing',
    price: 8,
    description: 'Mixed greens with cherry tomatoes, cucumber, and carrots'
  },
  {
    id: 5,
    category: 'Salads',
    name: 'Seaweed Salad',
    price: 10,
    description: 'Wakame seaweed mixed with cucumber and sesame seeds'
  },
  // Entrees
  {
    id: 6,
    category: 'Entrees',
    name: 'Tonkatsu',
    price: 18,
    description: 'Breaded and deep-fried pork cutlet served with shredded cabbage and rice'
  },
  {
    id: 7,
    category: 'Entrees',
    name: 'Chicken Teriyaki',
    price: 16,
    description: 'Grilled chicken glazed with sweet teriyaki sauce, served with steamed vegetables and rice'
  },
  {
    id: 8,
    category: 'Entrees',
    name: 'Ramen',
    price: 15,
    description: 'Japanese noodle soup with rich pork broth, noodles, and vegetables'
  },
  {
    id: 9,
    category: 'Entrees',
    name: 'Udon Noodle Bowl',
    price: 14,
    description: 'Thick udon noodles served in a hot broth with vegetables and your choice of protein'
  },
  // Sides
  {
    id: 10,
    category: 'Sides',
    name: 'Steamed Vegetables',
    price: 4,
    description: 'Seasonal vegetables steamed to perfection'
  },
  {
    id: 11,
    category: 'Sides',
    name: 'Miso Soup',
    price: 4,
    description: 'Traditional Japanese soup made with miso paste and tofu'
  }
]; 
    return (
    <div className="dinner-menu">
      <div className="menu-heading">
        <h1>Dinner Menu</h1>
      </div>
      <section className="appetizers-section">
        <div className="section-heading">
          <h2>Appetizers</h2>
        </div>
        <div className="menu-items-container">
          {/*We will be chaining methods to map only specific areas of the  array*/}
          {dinnerMenu.filter(item=>item.category==='Appetizers').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="salads-section">
        <div className="section-heading">
          <h2>Salads</h2>
        </div>
        <div className="menu-items-container">
          {dinnerMenu.filter(item=>item.category === 'Salads').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="entrees-section">
        <div className="section-heading">
          <h2>Entrees</h2>
        </div>
        <div className="menu-items-container">
          {dinnerMenu.filter(item=>item.category==='Entrees').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
      <section className="sides-section">
        <div className="section-heading">
          <h2>Sides</h2>
        </div>
        <div className="menu-items-container">
          {dinnerMenu.filter(item=>item.category==='Sides').map((item,index)=><MenuItem key={index} item={item}></MenuItem>)}
        </div>
      </section>
    </div>
  );
};

export default DinnerMenu;