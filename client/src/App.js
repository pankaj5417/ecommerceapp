import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/navbar/Header';
import {Products} from './components/product/Products';
import { SingleProduct } from './components/singleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Routes>
      <Route path='/' element={<Products/>} ></Route>

        <Route path='/:id' element={<SingleProduct/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
