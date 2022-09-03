import { useNavigate } from 'react-router-dom';

export const OrderSuccess = () => {
   


	const navigate = useNavigate();

	

    return (
      <>
        
             
              <div className="container" style={{padding: "100px 0"}}>
                  <h1 className='text-center'>Order Confirmation</h1>
                  <div className="bg" style={{margin:"auto"}}>
                  
                      <div className="card text-center" style={{paddingTop: "66px",margin:"auto",backgroundColor:"lightblue"}}>
                          
                          <span className="card-success"><i className="fa fa-check"></i></span>
                          
                          <h1 className="card-msg">Payment Complete</h1>
                          <h2 className="card-submsg">Thank you for choosing us!</h2>
                          
                          <div className="card-body">
          
                          </div>
                          
                          <div className="card-tags">
                                  
                          </div>

                          <div  style={{width:"300px",height:"40px",backgroundColor:"violet",borderRadius:"5px",color:"white",textAlign:"center",margin:"auto",cursor:"pointer"}} onClick={()=>navigate("/")} className="card-msg ">Go To HomePage</div>


                          
                      </div>
                      
                  </div>
              </div>
           
      </>
    )
  }