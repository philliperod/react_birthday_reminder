import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <section className="person">
          <List people={people} />
        </section>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;

// Refactoring along the tutorial
// created a <main> tag and moved other tags inside
// created a hook [people,setPeople] with its DEFAULT data it gets from data.js
// data.js is an array of objects which is not name but rather has 'export default'
// just an alternate option to use if not naming the array of objects (probably not the best way so always name your arrays which can be set into a variable)
// with the List component, this is where you will pass the array from data.js in the App function
// so you will set up (people={people}) which is the people prop which equals to the people state value; that state value is the data array
// next, you place in array.length to show how many individual's birthdays are in the array
