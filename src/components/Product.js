import { Container, Button, Col, Image, Row } from "react-bootstrap"
import {cartItemType} from "./Cart"



const Product = ({key, item, addToCart}) => {

    

    return (
        <>
           
                <Col style = {{color: "white", height: "585px"}} xs={6} md={4}>
                    <div key = {key} style = {{border: "2px solid white", height: "80%", width: "80%", margin: "auto"}}>
                   <div style = {{height: "80%", position: "relative"}}>
                   <Image style = {{width: "100%", height: "100%", margin: "auto"}} src = {item.image}/>
                   <Button onClick = {() => addToCart(item)} style = {{position: "relative", margin: "0", top: "-99%", left: "65%"}}>Add to cart</Button>
                   </div>
                   <h4 style= {{textAlign: "center"}}>{item.title}</h4>
                   <p style= {{textAlign: "center"}}>{item.price}</p>
                   </div>
                  
                    </Col>
                 
            
        </>
    )


}

export default Product
