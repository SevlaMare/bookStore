import React, { Component, useState } from 'react';
import Content from './Content'

const App = props => {
  const [ fromState ] = useState('StateName');

  return (
    <React.Fragment>
      <h1>Template</h1>
      <Content nickname={ fromState }></Content>
    </React.Fragment>
  );
}

export default App;
