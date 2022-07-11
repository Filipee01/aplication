import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import List from './components/List';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome= "Filipe" />
      <Pessoa nome="Filipe" idade="20" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List maquina="buceta"/>
    </div>
  );
}

export default App;
