import {cartItemType}  from "./Products";
import { Container, Image, Row, Col, Button } from 'react-bootstrap';



const CartItem = ({item, addToCart , removeFromCart}) => {



    return (
        <Container>
        <Row style = {{height: "320px" , border: "2px solid black", marginTop: "2%"}}>
        <Col style = {{margin: "auto"}}>
        <Image style ={{height: "250px"}} src = {item.image}/>
</Col>
<Col style = {{margin: "auto"}}>
<Button onClick = {() => removeFromCart(item.id) }>Remove</Button>
</Col>
<Col style = {{margin: "auto"}}> <h3>{item.title}</h3>
            <p>${item.price}</p>
            </Col>
            </Row>
        </Container>
    )
}

export default CartItem
