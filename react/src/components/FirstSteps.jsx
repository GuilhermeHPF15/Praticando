import { useState } from "react";

function FirstSteps() {
const name = "Guilherme";

  //Nome do estado(state), a função que tem permissão de alterá-lo, e seu ponto inicial (0).
  const [count, setCount] = useState(0); 
  /* useState é um hook. Hooks são ganchos que buscam funcionalidades, neste caso, este hook busca a 
  funcionalidade de estados. Todo hook começa com "use". */
  //Hooks precisam estar no nível mais alto da função, nunca dentro de condicionais, loops ou funções aninhadas.

  function increase() {
    setCount(count + 1);
  }

  const [inputName, setInput] = useState("");

  console.log("Funcionou!"); //Toda vez que um estado for atualizado, essa linha será executada também.

  return (
    //É obrigatório ter um elemento pai que contenha os outros, pois o return só pode retornar um elemento.
    <> {/*Fragment. Um elemento pai que desaparece na renderização.*/}
      <h1>Olá, mundo!</h1> 
      <p>Meu primeiro experimento!</p>
      <p>Sem div extra aqui!</p>

      <h1>Laboratório de {name}.</h1> {/*Inserindo JavaScript dentro das tags.*/}
      <p>A soma de 2 + 2 é {2 + 2}.</p>

      <h1>Contador científico</h1>
      <p>Valor atual: {count}</p>
      <button onClick={increase}></button>
      <br />
      <input type="text" onChange={(event) => setInput(event.target.value)}/>
      <h2>Olá, {inputName}</h2>
    </>
  )
}

export default FirstSteps;
