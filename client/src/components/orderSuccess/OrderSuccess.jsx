import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../redux/CartSlice';

export const OrderSuccess = () => {
    let { cartItems, totalItems, totalPrice } = useSelector((state) => state.cart);
	console.log(JSON.parse(localStorage.getItem('state')));

    const dispatch = useDispatch();

	const navigate = useNavigate();

	const clearCartHandler = () => {
		dispatch(cartActions.clearCart({ cartItems: [], totalItems: 0, totalPrice: 0 }));
	};

    return (
      <>
        
             
              <div className="container" style={{padding: "100px 0"}}>
                  <h1 className='text-center'>Order Confirmation</h1>
                  <div className="bg" style={{margin:"auto"}}>
                  
                      <div className="card text-center" style={{paddingTop: "66px",margin:"auto"}}>
                          
                          <span className="card-success"><i className="fa fa-check"></i></span>
                          
                          <h1 className="card-msg">Payment Complete</h1>
                          <h2 className="card-submsg">Thank you for choosing us!</h2>
                          
                          <div className="card-body">
          
                          </div>
                          
                          <div className="card-tags">
                                  
                          </div>

                          <div style={{width:"300px",backgroundColor:"violet",borderRadius:"5px",color:"white",textAlign:"center",margin:"auto",cursor:"pointer"}} onClick={()=>navigate("/")} className="card-msg ">Go To HomePage</div>


                          
                      </div>
                      
                  </div>
              </div>
           
      </>
    )
  }