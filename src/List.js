import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Age: {age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

// this is where you will deal with the people prop in the parameter of the List component and use a map method() to iterate over the props/values
// in the parameter of the map() method, you will set person which will represent every and each object
// in the map() method, you will destructure the array that will equal the person parameter in which where the data will come from
// you want to return the jsx that will output the structure of your List component
