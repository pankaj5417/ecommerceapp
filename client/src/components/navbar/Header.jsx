import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

import { NavLink, Link } from "react-router-dom";
import "./header.css";
export const Header = () => {
	const { totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Navbar.Brand>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-white d-flex w-100 align-item-center  justify-content-between">
				<div>
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <i class="fa fa-home"></i>Home
                </Link>
              </Nav.Link>

				</div>
				<div className="d-flex w-25 align-item-center  justify-content-between">

              <Nav.Link>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <i
                    class="fa fa-user-circle"
                    style={{ marginRight: "5px" }}
                  ></i>
                  My Account
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "white" }}
                >
				  <i class="fa fa-shopping-bag" aria-hidden="true"></i>

				  
                  {1 && (
                    <span
                      style={{
                        height: "8px",
                        width: "15px",
                        backgroundColor: "red",
                        color: "white",
                        marginLeft: "5.5px",
                        marginRight: "2px",
                        borderRadius: "100%",
                        padding: "3px",
                      }}
                    >{totalItems}</span>
                  )}
                  <span style={{ marginLeft: "10px" }}>Cart</span>
                </Link>
              </Nav.Link>
				</div>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
