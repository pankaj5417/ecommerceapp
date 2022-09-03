import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
export const  Header=()=> {
  return (
    <>
    <div>
				<Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
					<Navbar.Brand >
						<div style={{ display: 'inline-block', paddingRight: '15px' }}>
							<i class="fa fa-shopping-basket"></i>
						</div>
						
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto text-white">
							<Nav.Link>
								<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
									<i class="fa fa-home"></i>Home
								</Link>
							</Nav.Link>
							
							

							
								<Nav.Link>
									<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
										<i class="fa fa-user-circle" style={{marginRight : '5px'}}></i>My Account
									</Link>
								</Nav.Link>
							
							<Nav.Link>
								<Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
									<i class="fa fa-cart-plus"></i>
									{1 && (
										<span
											style={{
												height: '5px',
												width: '20%px',
												backgroundColor: 'red',
												color: 'white',
												marginLeft: '5.5px',
												marginRight: '2px',
												borderRadius: '100%',
												padding: '3px',
											}}
										>
											
										</span>
									)}
									<span style={{ marginLeft: '10px' }}>Cart</span>
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
    </>
  )
}


