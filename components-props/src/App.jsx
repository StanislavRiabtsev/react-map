import './App.css';

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <WhoAmI name={function () { return 'Stasnislav' }} surname="Riabstev" link="facebook.com" />
      <WhoAmI name={function () { return 'Stasnislav' }} surname="Bob" link="youtube.com" />
    </div>
  );
}

export default App;
