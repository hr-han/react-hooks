import React from 'react';
import Screen from "./Screen";
import Lang from "./context";
import translations from './translations';


function App() {
  return (
    <div className="App">
      <Lang defaultLang="en" translations={translations}>
        <Screen />
      </Lang>
    </div>
  );
}

export default App;
