import React from 'react';
import data from './data';
import List from './List';

function App() {
  return (
    <section className="container">
      <h3>Birthday Reminder Project</h3>
      <section className="person">
        {data.map((listing) => {
          return <List key={data.id} {...listing} />;
        })}
      </section>

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
