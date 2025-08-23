import { createContext } from 'react';

const dataContext = createContext({
    mail: "name@examples.com",
    text: 'some text here',
    forceChangeMail: () => {}
});

export default dataContext;