import React, { Component } from 'react';
import Car from "./Car/Car";
class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2012},
      {name: 'BMW', year: 2020},
    ],
    pageTitle: 'My cars',
    showCars: false
  };

  handleClick = pageTitle => {
    this.setState({pageTitle});
  };

  handleShowHide = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  };

  onChangeName (carName, index) {
    const car = this.state.cars[index];
    car.name = carName;
    const cars = this.state.cars;
    cars[index] = car;
    this.setState({cars});
  }

  handleDelete(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({cars});
  };

  render() {

    const divStyle = {
      textAlign: 'center'
    };

    let cars = null;

    if (this.state.showCars) {
       cars = this.state.cars.map((car, index) => {
        return (
            <Car
                name={car.name}
                year={car.year}
                key={index}
                // onClick={() => {this.handleClick(car.name)}}
                onChangeName={event => this.onChangeName(event.target.value, index)}
                onDelete={this.handleDelete.bind(this, index)}
            />
        );
      })
    }

    return (
        <div className="App" style={divStyle}>
          <h2 style={{color: 'blue'}}>{this.state.pageTitle}</h2>
          <div>
            <button onClick={this.handleShowHide}>Show/Hide</button>
            {/*<button onClick={this.handleClick.bind(this, 'Changed')}>Change title</button>*/}
          </div>
          <div style={{
            paddingTop: 20,
            width: 400,
            margin: 'auto'
          }}>
            { cars }
          </div>
        </div>
    )
  }
}

export default App;
