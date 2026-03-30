import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <span className="menu-item-name">{item.name}</span>
      <span className="menu-item-price">${item.price}</span>
      <p className="menu-item-description">{item.description}</p>
    </div>
  );
};

export default MenuItem;