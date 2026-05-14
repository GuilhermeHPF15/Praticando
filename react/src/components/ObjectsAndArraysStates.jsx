import { useState } from "react";

function ObjectsAndArraysStates() {
  const [elements, setElement] = useState(["Hidrogênio", "Oxigênio"]);
  const [user, setUser] = useState({name: "Ana", age: 21});
  const [newName, setNewName] = useState("");

  function addElement() {
    setElement([...elements, "Carbono"])
  }

  function changeName(newName) {
    setUser({...user, name: newName});
  }

  function addPhone() {
    setUser({...user, phone: "44444-5555"});
  }

  return (
    <>
      <h1>Arrays</h1>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <button onClick={addElement}>Adicionar Carbono</button>
      
      <h1>Objetos</h1>
      {Object.entries(user).map(([key, element]) => (
        <p key={key}>{key}: {element}</p>
      ))}
      <input type="text" onChange={(event) => (
        setNewName(event.target.value)
      )} />
      <button onClick={() => changeName(newName)}>Mudar nome</button>
      <button onClick={addPhone}>Adicionar telefone</button>
    </>
  );
}

export default ObjectsAndArraysStates;
