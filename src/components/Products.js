import { useState } from 'react';
import { useQuery } from 'react-query';
import Product from "./Product";
import { Container, Button, Col, Image, Row } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./Cart";

// Components


// Styles

// Types
export type cartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};



const getProducts = async (): Promise<cartItemType> =>
  await (await fetch('https://my-json-server.typicode.com/arnavmisra2261/react-app-json/products')).json();


const Products = ({addToCart}) => {

const [cartItems, setCartItems] = useState([]);

    const { data, isLoading, error } = useQuery(
        'products',
         getProducts
        );

    console.log(data);

    

    if(error) return <div>Products not Loading</div>

     

    return (
        <>
        <Container>
           <Row>
           {data?.map(item => (
              <Product key = {item.id} item = {item} addToCart = {addToCart}/>
            ))}
            </Row>
                </Container>
        </>
    )
    

   
}

export default Products
