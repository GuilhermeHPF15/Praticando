import { useState } from "react";
import FirstSteps from "./components/FirstSteps";
import ObjectsAndArraysStates from "./components/ObjectsAndArraysStates";

//Função, retorno e exportação. São os 3 elementos essenciais de um componente React.
function App() {
  return (
    <>
      <FirstSteps />
      <ObjectsAndArraysStates />
    </>
  );
}

export default App
