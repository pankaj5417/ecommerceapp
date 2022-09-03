import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import { useDispatch, useSelector } from "react-redux";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const navigate = useNavigate();
  //  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://flipkart-clone3.herokuapp.com/db/products"
      );
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products);

  const clickHandler = (id) => {
  	navigate(`/product/${id}`);
  };

  return (
    <Container style={{ paddingTop: "25px" }}>
      {loading ? (
        <h2>Loading ....</h2>
      ) : (
        <Row>
          {products?.map((product) => {
            return (
              <Col style={{ paddingBottom: "25px" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.url} />
                  <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
                    <Card.Text>
                      <p>{`Brand - ${product.brand||""}`}</p>
                      <h3>{`₹${product.price.mrp} `}</h3>
                      <div>
                        {product.reviews > 1
                          ? `${product.reviews}`
                          : `${product.reviews} `}
                      </div>
                    </Card.Text>
                    <Button
                      variant="success"
                      onClick={() => clickHandler(product.id)}
                    >
                      Know More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};
