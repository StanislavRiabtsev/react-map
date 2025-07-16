import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 19,
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name}, surname - {surname}, age - {years},
          position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Enter your job title</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
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
