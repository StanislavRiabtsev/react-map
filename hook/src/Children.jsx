import React, { useEffect, useState } from "react";

const Children = (props) => {

    const [delivery, setDelivery] = useState(false);

    // console.log(props);
    // useEffect(() => {
    //     console.log("Effect");
    // }, []);

    // useEffect(() => {
    //     return () => {
    //         console.log("Unmounted");
    //     }
    // }, []);

    useEffect(() => {
        return () => {
            if (props.count > 10) {
                setDelivery(true);
            }
        }
    }, [props.count]);

    return (
        <div>
            Children {props.count}

            {props.count > 10 && (<p>Delivery true</p>)}
        </div>
    );
}

export default Children;