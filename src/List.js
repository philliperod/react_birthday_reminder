import React from 'react';

const List = ({ image, name, age }) => {
  return (
    <>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>Age: {age}</p>
      </div>
    </>
  );
};

export default List;
