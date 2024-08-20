import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader.js';
import MyFooter from './MyFooter.js';
import Compo1 from './components/Compo.js';
import Assign from './assignment/Assignment..js';

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <Compo1></Compo1>

      <Assign></Assign>
      <MyFooter></MyFooter>
      

    </div>
    
  );
}

export default App;
