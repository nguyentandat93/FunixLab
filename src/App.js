import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { DISHES } from './shared/dishes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="alert alert-primary" role="alert">
          <h1>Menu Restaurant</h1>
        </div>
        <Menu dishes={this.state.dishes} />
      </div>
    )
  }
}

export default App;
