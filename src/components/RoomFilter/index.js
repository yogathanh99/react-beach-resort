import React, { useContext } from 'react';
import styled from 'styled-components';
import { RoomContext } from '../../context/RoomProvider';
import Title from '../Title';

const Wrapper = styled.section`
  padding: 3rem 0;
`;

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const value = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = value;
  //get unique
  let types = getUnique(rooms, 'type');
  //add 'all'
  types = ['all', ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <Wrapper>
      <Title title='search rooms' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            onChange={handleChange}
            className='form-control'
            value={type}
          >
            {types}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='capacity'>guests</label>
          <select
            name='capacity'
            id='capacity'
            onChange={handleChange}
            className='form-control'
            value={capacity}
          >
            {people}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='price'>room price: ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='size'>room size</label>
          <div className='size-inputs'>
            <input
              id='size'
              type='number'
              name='minSize'
              onChange={handleChange}
              className='size-input'
              value={minSize}
            />
            <input
              id='size'
              type='number'
              name='maxSize'
              onChange={handleChange}
              className='size-input'
              value={maxSize}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default RoomFilter;
