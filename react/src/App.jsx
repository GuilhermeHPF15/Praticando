//Função, retorno e exportação. São os 3 elementos essenciais de um componente React.
function App() {
  const nome = "Guilherme";

  return (
    //É obrigatório ter um elemento pai que contenha os outros, pois o return só pode retornar um elemento.
    <> {/*Fragment. Um elemento pai que desaparece na renderização.*/}
      <h1>Olá, mundo!</h1> 
      <p>Meu primeiro experimento!</p>
      <p>Sem div extra aqui!</p>
      <h1>Laboratório de {nome}.</h1> {/*Inserindo JavaScript dentro das tags.*/}
      <p>A soma de 2 + 2 é {2 + 2}.</p>
    </>
  ) 
}

export default App
