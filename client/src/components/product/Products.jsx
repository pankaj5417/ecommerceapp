import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 300000]);

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

  const filterCategory = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://flipkart-clone3.herokuapp.com/db/products?category=${e.target.value}`
      );
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products);
  const marks = [
    {
      value: 0,
      label: 0,
    },

    {
      value: 300000,
      label: 3000000,
    },
  ];

  const rangeSelector = async (event, newValue) => {
    event.preventDefault();
    setPriceRange(newValue);

    try {
      const { data } = await axios.get(
        "https://flipkart-clone3.herokuapp.com/db/products"
      );
      console.log(data);
      setProducts(
        data.filter(
          (d) => +d.price.mrp >= priceRange[0] && +d.price.mrp <= priceRange[1]
        )
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    console.log(newValue);
  };
  const clickHandler = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <Container fluid style={{ paddingTop: "25px", marginTop: "80px" }}>
        <Row>
          <Col xs={8} className="w-75">
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
                            <p>{`Brand - ${product.brand || ""}`}</p>
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
          </Col>
          <Col xs={1} className="w-25">
            <h1>Filter Products</h1>
            <Form.Select
              name="category"
              onChange={filterCategory}
              aria-label="Default select example"
            >
              <option>select category</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="topwear">TopWear</option>
              <option value="bottomwear">BottomWear</option>
              <option value="headphone">Headphone</option>
            </Form.Select>
            Price Range
            <Slider
              value={priceRange}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
              marks={marks}
              min={0}
              max={300000}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
