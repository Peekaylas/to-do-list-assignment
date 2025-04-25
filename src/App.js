import './App.css';
import Header from './components/Header';
import InputTodos from './components/InputTodos';
import Todobox from './components/Todobox';

function App() {
  return (
    <div className="App">
      <Header />
      <InputTodos />
      <Todobox />
    </div>
  );
}

export default App;