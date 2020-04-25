import React from "react";
import Header from "./Header";
import {useFns} from "./context";

const Screen = () => {
    const { logUserIn, logUserOut } = useFns();
    return (
        <div>
            <Header/>
            <h1>First Screen</h1>
            <button onClick={logUserIn}>Log user in</button>
            <button onClick={logUserOut}>Log user out</button>
        </div>
    );
};

export default Screen;