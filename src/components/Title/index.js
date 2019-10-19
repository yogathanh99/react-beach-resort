import React from 'react';
import styled from 'styled-components';

const WrapperTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  & h4 {
    font-size: 2rem;
    letter-spacing: var(--mainSpacing);
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  & div {
    width: 5rem;
    height: 5px;
    margin: 0 auto;
    background: var(--primaryColor);
  }
`;

const Title = ({ title }) => {
  return (
    <WrapperTitle>
      <h4>{title}</h4>
      <div />
    </WrapperTitle>
  );
};

export default Title;
