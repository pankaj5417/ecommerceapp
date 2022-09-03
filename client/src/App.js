import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Cart} from './components/cart/Cart';
import { Header } from './components/navbar/Header';
import {Products} from './components/product/Products';
import { SingleProduct } from './components/singleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <Header/>
     
      <Routes>
      <Route path='/' element={<Products/>} ></Route>
        <Route path='/product/:id' element={<SingleProduct/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>


      </Routes>
    </div>
  );
}

export default App;
