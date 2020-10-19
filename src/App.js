import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [person, setPerson] = useState(data);
  return (
    <section className="container">
      <h3>Birthday Reminder Project</h3>
      <section className="person">
        {person.map((listing) => {
          return <List key={data.id} {...listing} />;
        })}
      </section>
      <button type="button" onClick={() => setPerson([])}>
        Clear All
      </button>
    </section>
  );
}

export default App;

// Things that I learned without help:
// you need to import {useState} hook in order to use it; forgot about that
// for the parameter for the hook, you use the objects/data/etc in order to access and control that info
// using destructured object makes it easier to read and to use the props at face value as parameters or variables rather than using object dot notation
// List component takes in a destructured parameter and returns the format of the container with props in its appropriate place
// in the App component, this is where you will use the hook that will grab the object data from data.js and control it
// this will also return a overall format in your page using other components to fill in the details
// used map() method to iterate over each prop and its values in a container and returning a component that will output that info
// the hook state function is where you will manipulate that data into something
