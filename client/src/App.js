import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Cart} from './components/cart/Cart';
import { Header } from './components/navbar/Header';
import { OrderSuccess } from './components/orderSuccess/OrderSuccess';
import {Products} from './components/product/Products';
import { SingleProduct } from './components/singleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
      <Header/>
     
      <Routes>
      <Route path='/' element={<Products/>} ></Route>
        <Route path='/:id' element={<SingleProduct/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/cart/checkout' element={<OrderSuccess/>} ></Route>



      </Routes>
    </div>
  );
}

export default App;
