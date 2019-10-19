import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from '../Title';

const Services = () => {
  const dataServices = [
    {
      icon: <FaCocktail />,
      title: 'Free Cocktails',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <FaHiking />,
      title: 'Endless Hiking',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free Shuttle',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <FaBeer />,
      title: 'Strongest Beer',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
  ];

  return (
    <div className='services'>
      <Title title='service' />
      <div className='services-center'>
        {dataServices.map((service, index) => (
          <div key={index} className='service'>
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
