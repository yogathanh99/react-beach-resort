import React, { memo } from 'react';

import Button from '../Button';
import defaultImage from '../../images/details-1.jpeg';

const Room = memo(props => {
  const { room } = props;
  const { name, slug, images, price } = room;

  return (
    <div className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImage} alt='single room' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Button link={`/rooms/${slug}`} classname='room-link'>
          features
        </Button>
      </div>
      <p className='room-info'>{name}</p>
    </div>
  );
});

export default Room;
