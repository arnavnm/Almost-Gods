import { Image, Container, Row, Col } from "react-bootstrap"
import Product from "./Product";
import Products from "./Products";

const Collection = (props) => {
    return (
        <Container style={{ backgroundColor: "black" , color: "white", paddingTop: "3%"}}>
            <Row>
                <Col>
                    <Image style={{ width: "576px", height: "408px" }} src={props.coverImage} />
                </Col>
                <Col><p>{props.description}</p></Col>
            </Row>
            <Row>
            <h1>{props.title}</h1>
            </Row>
            <Row>
            <Products addToCart = {props.addToCart}/>
            </Row>
        </Container>
       
    )
}

export default Collection
