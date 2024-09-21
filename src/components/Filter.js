import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
      <button onClick={() => setFilter('Completed')} className={filter === 'Completed' ? 'active' : ''}>Completed</button>
      <button onClick={() => setFilter('Pending')} className={filter === 'Pending' ? 'active' : ''}>Pending</button>
    </div>
  );
};

export default Filter;
