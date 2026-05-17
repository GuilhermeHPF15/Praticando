import { useContext } from "react";
import { ContextTheme } from "../pages/Home";

function PropsTest(props) {
  const theme = useContext(ContextTheme);

  return (
    <>
      {/*O react oculta booleanos puros no HTML, devemos personalizá-los pra mostrá-los.*/}
      <p>Usuário: {props.name}, Administrador: {props.isAdmin ? "Sim" : "Não"}, Tema: {theme}</p>
      {/*null e undefined também serão ocultos.*/}

      {/*Usando a função que o componente pai passou como prop*/}
      <button onClick={() => props.onSelect(props.name)}>Selecionar</button>
    </>
  )
}

export default PropsTest;
