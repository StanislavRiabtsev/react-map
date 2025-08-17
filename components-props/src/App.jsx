import { useState } from 'react';
import './App.css';
import Form from './Form';
import dataContext from './context';


const { Provider } = dataContext;

function App() {
  const [data, setData] = useState({
    mail: "name@examples.com",
    text: 'some text here',
    forceChangeMail: forceChangeMail
  });

  function forceChangeMail() {
    setData({ ...dataContext, mail: 'test@gmail.com' })
  }

  return (
    <Provider value={data}>
      <Form text={data.text} />
      <button
        onClick={() => setData({
          mail: "ame@example.com",
          text: 'some text here',
          forceChangeMail: forceChangeMail
        })}>
        Click mee
      </button>
    </Provider>
  );
}

export default App;
