import React from 'react';
import Screen from "./Screen";
import UserContextProvider from "./context";


function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Screen />
      </UserContextProvider>
    </div>
  );
}

export default App;
