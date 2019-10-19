import React from 'react';

const Banner = props => {
  const { children, title, subtitle } = props;
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
