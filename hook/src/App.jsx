import React from "react";
import './index.css';

const App = () => {
    const array = [{ hello: 'world' }, { hello: 'world1' }];

    // const arrayReactElements = [];

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];

    //     arrayReactElements.push(
    //         <div>
    //             {element.hello}
    //         </div>
    //     );
    // }

    // array.forEach((obj) => {
    //     arrayReactElements.push(
    //         <div>
    //             {obj.hello}
    //         </div>
    //     );
    // });

    const result = array.map((obj) => {
        return (
            <div >
                {obj.hello}
            </div>
        );
    });

    console.log(result);

    return (
        <div className="div">
            {array.map((obj) => {
                return (
                    <div >
                        {obj.hello}
                    </div>
                );
            })}
        </div>
    );
};

export default App;