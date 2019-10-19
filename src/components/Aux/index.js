import React from 'react';

const Aux = props => {
  const { classAux, children } = props;
  return <header className={classAux}>{children}</header>;
};

Aux.defaultProps = {
  classAux: 'defaultAux',
};

export default Aux;
