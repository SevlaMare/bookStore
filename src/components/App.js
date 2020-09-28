import React, { useState } from 'react';
import Content from './Content';

const App = () => {
  const [fromState] = useState('StateName');

  return (
    <>
      <h1>Bookstore</h1>
      <Content nickname={fromState} />
    </>
  );
};

export default App;
