import React from 'react';

import Banner from '../components/Banner';
import Button from '../components/Button';
import Aux from '../components/Aux';

const Rooms = () => {
  return (
    <Aux classAux='roomsAux'>
      <Banner title='our rooms'>
        <Button link='/'>return Home</Button>
      </Banner>
    </Aux>
  );
};

export default Rooms;
