import { useState } from "react";
import FirstSteps from "./components/FirstSteps";
import ObjectsAndArraysStates from "./components/ObjectsAndArraysStates";
import PropsTest from "./components/PropsTest"

//Função, retorno e exportação. São os 3 elementos essenciais de um componente React.
function App() {
  const user4 = "Gelson";
  const [activeUser, setActiveUser] = useState("Nenhum");

  return (
    <>
      <FirstSteps />
      <ObjectsAndArraysStates />
      {/*Use aspas para passar props de string estática*/}
      {/*Use chaves pra passar qualquer propriedade que não seja uma string estática*/}

      {/*Passando função como prop (setActiveUser é uma função)*/}
      <PropsTest name="Guilherme" isAdmin={false} onSelect={setActiveUser}/> 
      <PropsTest name="Abel" isAdmin={true} onSelect={setActiveUser}/>
      <PropsTest name="Evandro" isAdmin={false} onSelect={setActiveUser}/>
      <PropsTest name={user4} isAdmin={false} onSelect={setActiveUser}/> 
      <h2>Usuário ativo: {activeUser}</h2>
    </>
  );
}

export default App
