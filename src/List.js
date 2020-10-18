import React from 'react';

const List = ({ image, name, age }) => {
  return (
    <>
      <h2>Names</h2>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h4>Age: {age}</h4>
    </>
  );
};

export default List;
