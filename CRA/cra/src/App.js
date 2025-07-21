import { Component, StrictMode } from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hej</h2>
};

// const Fields = () => {
//   const holder = 'Enter herer'
//   const styledField = {
//     width: '300px'
//   }
//   return <input
//     placeholder={holder}
//     type="text"
//     style={styledField} />
// };

class Field extends Component {
  render() {
    const holder = 'Enter herer'
    const styledField = {
      width: '300px'
    }
    return <input
      placeholder={holder}
      type="text"
      style={styledField} />
  }
}

function Btn() {
  const text = 'Log in';
  const logged = false;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn></Btn>
    </div>
  );
}

export { Header };
export default App;
