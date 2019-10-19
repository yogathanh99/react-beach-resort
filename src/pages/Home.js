import React from 'react';

import Aux from '../components/Aux';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeatureRooms from '../components/FeatureRooms';
import Button from '../components/Button';

const Home = () => {
  return (
    <>
      <Aux>
        <Banner
          title='Luxurious rooms'
          subtitle='deluxe rooms starting at $199'
        >
          <Button link='/rooms'>our rooms</Button>
        </Banner>
      </Aux>
      <Services />
      <FeatureRooms />
    </>
  );
};

export default Home;
