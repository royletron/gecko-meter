import React from 'react';

import Meter from './components/Meter';

export default class App extends React.Component {
  render () {
    return (
      <Meter pre='£' min={-100} max={100} value={90} />
    );
  }
}
