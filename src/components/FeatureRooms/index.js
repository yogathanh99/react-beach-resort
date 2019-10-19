import React, { useContext } from 'react';

import { RoomContext } from '../../context/RoomProvider';
import Loading from '../Loading';
import Title from '../Title';
import Room from '../Room';

const FeatureRooms = () => {
  const value = useContext(RoomContext);
  const { featureRooms: rooms, loading } = value;
  const roomsData = rooms.map(room => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <div className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>
        {loading ? <Loading /> : roomsData}
      </div>
    </div>
  );
};

export default FeatureRooms;
