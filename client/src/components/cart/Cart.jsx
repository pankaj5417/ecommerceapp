import { Col, Row, ListGroup, Container, Card, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../redux/CartSlice';


export const Cart = () => {
	let { cartItems, totalItems, totalPrice } = useSelector((state) => state.cart);
	console.log(JSON.parse(localStorage.getItem('state')));

	console.log("cartItems",cartItems);

	console.log(totalPrice);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const clearCartHandler = () => {
		dispatch(cartActions.clearCart({ cartItems: [], totalItems: 0, totalPrice: 0 }));
	};

	const incrementHandler = (item) => {
		dispatch(cartActions.addItem(item));
	};

	const decrementHandler = (item) => {
		dispatch(cartActions.removeItem(item));
	};
	const items = cartItems?.map((item) => {
		return (
			<ListGroup.Item key={item.id} style={{ marginBottom: '20px' }}>
				<Row>
					<Col>
						<div>
							<Image src={item.url} style={{ width: '80%', height: '80%' }} />
						</div>
					</Col>

					<Col style={{ marginRight: '20px' }}>
						{item.category}
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'end',
								justifyContent: 'space-between',
							}}
						>
							<h3>
								Price -₹<span>{item.price.mrp}</span>
							</h3>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'end',
									width: '10%',
									justifyContent: 'space-between',
									padding: '10px',
								}}
							>
								<div>
									<i
										class="fa fa-minus-circle"
										style={{ color: 'blue', cursor: 'pointer' }}
										onClick={() => decrementHandler(item)}
									></i>
								</div>
								<p>{item.qty}</p>
								<div>

									<i
										class="fa fa-plus-circle"
										style={{ color: 'blue', cursor: 'pointer' }}
										onClick={() => incrementHandler(item)}
									></i>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</ListGroup.Item>
		);
	});
	return (
		<>
		{cartItems.length===0?
		<>
		
		<h1  style={{  marginTop: '110px ',textAlign:"center" }}>Your Cart is Empty</h1>
		<div style={{margin:"auto",width:"600px"}}>
		<img style={{margin:"auto",width:"600px"}} src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />

		</div>
		
		</>:<>
        <div >
			<div style={{ width: '100%', textAlign: 'center', marginTop: '110px' }}>
				<h2 style={{  marginTop: '110px !important' }}>
					My Cart <span>{`(${totalItems} Items)`}</span>
				</h2>
			</div>

			<Container style={{ alignItems: 'center',marginTop: '110px'  }}>
				<Row>
					<ListGroup style={{ width: '50%', marginLeft: '80px', marginTop: '40px' }}>{items}</ListGroup>

					<Col style={{ width: '50%', marginLeft: '80px', marginTop: '40px' }}>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>
									Total Amount - <span>₹{totalPrice}</span>
								</Card.Title>

								<Button
									variant="primary"
									style={{ marginTop: '20px',width:"200px"  }}
									onClick={() => {
										clearCartHandler()
										navigate('/cart/checkout')}}
									disabled={cartItems.length === 0}
								>
									Proceed To Checkout
								</Button>
								<Button
									variant="secondary"
									style={{ marginTop: '20px',width:"200px" }}
									onClick={clearCartHandler}
									disabled={cartItems.length === 0}
								>
									Clear Cart
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
            </div>
			</>
}
		</>
	);
};

