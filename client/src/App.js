import './App.css';
import { Header } from './components/navbar/Header';
import {Products} from './components/product/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
