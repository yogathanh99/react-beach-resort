import React from 'react';

import Banner from '../components/Banner';
import Button from '../components/Button';
import Aux from '../components/Aux';

const Error = () => {
  return (
    <Aux>
      <Banner title='error 404' subtitle='page not found'>
        <Button link='/'>return Home</Button>
      </Banner>
    </Aux>
  );
};

export default Error;
