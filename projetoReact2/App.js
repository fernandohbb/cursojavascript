import {FiSearch}from 'react-icons/fi';
import { DiCodeigniter } from 'react-icons/di';
import { AiFillGithub} from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <div>
      <AiFillGithub size={90}/>
      </div>
      <h1>React <DiCodeigniter size="70" color="orange"/></h1>
      <button className="btn">
        <FiSearch size={30} color="red"/>
        <input
         className="input"
         type="text"
         placeholder="Digite aqui..."
         ></input>
      </button>
      <h2>O que é React</h2>
      <p>O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.
        Os componentes dessa ferramenta foram desenvolvidos pelo Facebook. Ela foi lançada em 2013 como uma ferramenta JavaScript de código aberto. Atualmente, ela permanece na frente das suas principais competidoras, como a Angular e a Bootstrap, as duas bibliotecas JavaScript mais bem vendidas.  </p>
      <h2>Porque usar React?</h2>
      <ul>
        <li>1- Facil de usar</li>
        <li>2- Suporte a Componente Reusável em Java</li>
        <li>3- Componente Fácil de Escrever</li>
        <li>4- Melhor Desempenho com Virtual DOM</li>
        <li>5- Amigável a SEO</li>        
      </ul>
      <h2>Como o React Funciona?</h2>
      <p>A maior parte do React é escrito em JSX (JavaScript XML) em vez de apenas usar o padrão JS de escrita no JavaScript. Contudo, saiba que isso acontece apenas porque é mais fácil de criar componentes React.
        Você pode criar um componente React com o JavaScript padrão. Mas garantimos a você que será um pouco mais trabalhoso e bagunçado.
          Fora isso, a ideia por trás do uso do JSX no React é que o Facebook (o desenvolvedor inicial) queria fornecer um tipo de extensão de sintaxe com uma configuração limpa e sem ambiguidades aos desenvolvedores.
          </p>
          <h2>Conclusao</h2>
          <p>Finalmente, esperamos que este artigo possa ter dado alguns insights sobre o que é React e como ele funciona. Para tanto, abaixo está um resumo de notações importantes sobre React JavaScript:

React foi originalmente apresentado pelo Facebook.
Ele é usado por grandes companhias e marcas mundo afora.
O React atua como uma biblioteca para o JavaScript. Mas ele também pode ser categorizado como um framework.
Esse framework não vem sozinho: você vai precisar de elementos adicionais para vários propósitos, como gerenciamentos, apontamentos, etc.
O React usa um DOM Virtual para oferecer uma  melhor otimização para a sua página.
Esse framework é fácil de usar e bem amigável a SEO.
Ele tem suporte à reusabilidade de componentes.
Ele usa a extensão JSX, que basicamente é uma excelente combinação de HTML com JavaScript.
O React usa extensão JSX para deixar a escrita da codificação mais fácil, não exatamente porque ela tem um desempenho melhor.
</p>
    </div>
  );
}

export default App;
