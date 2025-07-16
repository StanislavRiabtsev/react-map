import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 19,
      text: "text"
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='Stasnislav' surname="Riabstev" link="facebook.com" />
      <WhoAmI name='Max' surname="Bob" link="youtube.com" />
    </div>
  );
}


export default App;
