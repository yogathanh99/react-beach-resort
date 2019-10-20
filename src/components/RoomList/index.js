import React from 'react';
import styled from 'styled-components';

import Room from '../Room';

const EmptyStyle = styled.div`
  text-align: center;
  text-transform: capitalize;
  margin: 2rem 0;
  padding: 1rem;
  letter-spacing: var(--mainSpacing);
`;

const RoomListStyle = styled.section`
  padding: 2rem 0;
  & span {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 30px;
  }

  @media screen and (min-width: 776px) {
    & span {
      width: 90vw;
    }
  }
  @media screen and (min-width: 992px) {
    & span {
      width: 95vw;
      max-width: 1170px;
    }
  }
`;

const RoomList = ({ rooms }) => {
  return (
    <>
      {rooms.length === 0 ? (
        <EmptyStyle>
          <h3>unfortunately no rooms matched your search parameters</h3>
        </EmptyStyle>
      ) : (
        <RoomListStyle>
          <span>
            {rooms.map(room => (
              <Room key={room.id} room={room} />
            ))}
          </span>
        </RoomListStyle>
      )}
    </>
  );
};

export default RoomList;
