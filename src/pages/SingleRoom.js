import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { RoomContext } from '../context/RoomProvider';
import { StyleAux } from '../styles';
import Button from '../components/Button';
import Banner from '../components/Banner';
import defaultBcg from '../images/room-1.jpeg';

const StyleSingleRoom = styled.div`
  padding: 3rem 0 0 0;
`;

const SingleRoomImg = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;

  & img {
    width: 100%;
    display: block;
  }

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const SingleRoomInfo = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`;

const SingleRoomExtra = styled.div`
  width: 80vw;
  margin: 0 auto 3rem auto;

  & h6 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  .extras {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
  }

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const SingleRoom = props => {
  const [state, setState] = useState({
    slug: props.match.params.slug,
    defaultBcg,
  });

  const value = useContext(RoomContext);
  const { getRoom } = value;
  const room = getRoom(state.slug);

  if (!room) {
    return (
      <div className='error'>
        <h3> no room could be found...</h3>
        <Button link='/rooms'>back to rooms</Button>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [main, ...defaultImages] = images;

  return (
    <>
      <StyleAux img={images[0] || defaultBcg}>
        <Banner title={`${name} room`}>
          <Button link='/'>back to rooms</Button>
        </Banner>
      </StyleAux>
      <StyleSingleRoom>
        <SingleRoomImg>
          {defaultImages.map((image, index) => (
            <img key={index} src={image} alt={name} />
          ))}
        </SingleRoomImg>
        <SingleRoomInfo>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <p>price: ${price}</p>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </SingleRoomInfo>
      </StyleSingleRoom>
      <SingleRoomExtra>
        <h6>extras</h6>
        <ul className='extras'>
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </SingleRoomExtra>
    </>
  );
};

export default SingleRoom;
