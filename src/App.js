import React, { Component } from 'react';
import './App.css';

import ChoroplethMap from './components/ChoroplethMap';

class App extends Component {
  state = {
    data: [
      ["27603", 75], ["27608", 43], ["27606", 50], ["27601", 88], ["27616", 21], ["27614", 43],
      ["27613", 21], ["27604", 19], ["27609", 60], ["27607", 4], ["27609", 44], ["27612", 38],
      ["27610", 67],["27615",80],["27617",94],["27605",90]], 
  }
  render() {
    return (
      <div style={{
        height:"100vh",
        width: "100vw"
      }}>
        <ChoroplethMap data={this.state.data}/>
      </div>
    );
  }
}

export default App;
