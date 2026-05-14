import { useState, useEffect } from "react";
import FirstSteps from "./components/FirstSteps";
import ObjectsAndArraysStates from "./components/ObjectsAndArraysStates";
import PropsTest from "./components/PropsTest"

//Função, retorno e exportação. São os 3 elementos essenciais de um componente React.
function App() {
  const user4 = "Gelson";
  const [activeUser, setActiveUser] = useState("Nenhum");

  useEffect(() => {
    document.title = activeUser;
    console.log("Efeito ativado.");
  }, [activeUser])
  /* O hook useEffect conta com dois argumentos: uma função de código e um array de dependências.
  O side effect terá um dentre três comportamentos distintos dependendo desse array:
  - Sem array: Roda em toda re-renderização (raramente usado, já que vai contra o objetivo 
  principal dos efeitos secundários).
  - Array vazio: Roda apenas uma vez, na montagem do componente.
  - Array com variáveis [estado]: Roda quando o componente nasce e sempre que essa variável
  expecífica é atualizada. */

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
