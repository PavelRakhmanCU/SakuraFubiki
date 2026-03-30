import React from 'react';
import MenuCard from '../components/MenuCard';

const Menu = () => {
  const menuTypes = [
    {
      id: 1,
      title: 'Dinner',
      image: 'https://images.pexels.com/photos/31393431/pexels-photo-31393431.jpeg',
      description: 'Savor our rich and flavorful ramens, udon, and soba noodle dishes',
    },
    {
      id: 2,
      title: 'Brunch',
      image: 'https://images.pexels.com/photos/7532859/pexels-photo-7532859.jpeg',                                                             
      description: 'Enjoy our specialty omelets, Japanese-inspired breakfast bowls, and artisanal toast',
    },
    {
      id: 3,
      title: 'Dessert',
      image: 'https://images.pexels.com/photos/35517025/pexels-photo-35517025.jpeg',
      description: 'Indulge in our sweet treats, including mochi, ice cream, and traditional Japanese desserts',
    },
    {
      id: 4,
      title: 'Bar',
      image: 'https://images.pexels.com/photos/31871321/pexels-photo-31871321.jpeg',                                                               
      description: 'Discover our selection of craft beers, sake, and Japanese-inspired cocktails',
    },
  ];

  return (
    <div className="menu-grid">
      {menuTypes.map((menuType) => (
        <MenuCard item={menuType} key={menuType.id} />
      ))}
    </div>
  );
};

export default Menu;