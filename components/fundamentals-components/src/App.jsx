import React from 'react';
import ControlledComponent from './ControlledComponents';
import UncontrolledComponent from './UnControlledComponents';

const App = ()  => {
  return (
    <div>
      <h2>Controlled Components</h2>
      <ControlledComponent/>


      <hr />

      <h2>Uncontrolled Components</h2>
      <UncontrolledComponent/>
    </div>
  )
}

export default App;