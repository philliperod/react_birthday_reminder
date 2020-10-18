import React from 'react';
import data from './data';
import List from './List';

function App() {
  return (
    <section className="container">
      <h3>Birthday Reminder Project</h3>
      <List />
      <button
        onClick={() => {
          console.log('it works');
        }}
      >
        Clear All
      </button>
    </section>
  );
}

export default App;
