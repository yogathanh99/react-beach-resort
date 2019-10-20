import React from 'react';

import RoomFilter from '../RoomFilter';
import RoomList from '../RoomList';
import Loading from '../Loading';
import { withRoom } from '../../context/RoomProvider';

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RoomFilter rooms={rooms} />
          <RoomList rooms={sortedRooms} />
        </>
      )}
    </>
  );
};

export default withRoom(RoomContainer);
