
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer";
import Home from './components/Home';
import Videos from './components/Videos';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductsPage from './components/ProductsPage';
import Collection from './components/Collection';
import { Container } from 'react-bootstrap';
import Products from './components/Products';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useQuery } from 'react-query';
import Product from "./components/Product";
import { Parallax } from "react-parallax";
import Cart from "./components/Cart";
import { useState, useEffect } from 'react'




function App() {

    

  const client = new QueryClient();

  //Cart functionality 
  const [cartProducts, setCartProducts] = useState([])


      useEffect(() => {
        const getProducts = async () => {
          const productsFromServer = await fetchCartProducts()
          setCartProducts(productsFromServer)
        }

        getProducts()
      }, [])

   //Fetch cart Products
      const fetchCartProducts = async () => {
        const res = await fetch('http://localhost:5001/cartProducts')
        const data = await res.json()
        
        
        return data
        }    
    
  const getTotalItems = (items: cartItemType[]) => 
        items.reduce((acc: number, item) => acc + item.amount, 0);

const handleAddToCart = async (clickedItem: cartItemType) => {
  const res = await fetch('http://localhost:5001/cartProducts', {

  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(clickedItem)
})

const data = res.json()
setCartProducts([...cartProducts, data])

  };

  const handleRemoveFromCart = async (id) => {
      await fetch(`http://localhost:5001/cartProducts/${id}`, {
        method: 'DELETE'
      })

      setCartProducts(cartProducts.filter((Cartproduct) => Cartproduct.id !== id))
    };



  return (

    <QueryClientProvider client = {client}>
    
    <Router>

      <div style={{ backgroundColor: "#FC4445", height: "100%" }} className="App">
        
        <NavigationBar />
        


        <Route path={'/'} exact render={(props) => (
          <>
            <Home />
            <Videos />
            <Parallax style = {{height: "500px"}} blur={1} 
            bgImage="https://freesociety.in/uploads/6d63eed7c1389155befa9c229e562e6e.jpg" bgImageAlt="the cat" strength={200}>
            <h1>Trending TEEs</h1>
        </Parallax>
             <Products addToCart = {handleAddToCart}/>
            
          </>
        )}>
        </Route>

        <Route path= {  "/products"} render={(props) => (
          <>
          <ProductsPage />
          <Videos />
          </>
        )}>

        </Route>

        <Route path = { '/bullInChinaShop'}  render = {(props) => (

        <>
        <Collection 
        addToCart = {handleAddToCart}
        coverImage = "https://cdn.shopify.com/s/files/1/0434/5892/0604/files/1_1.jpg?v=1613974028"
         title = "BULL IN A CHINA SHOP" 
         description = "Embodying the Bull from the eponymous collection, “Bull in a China Shop” is a call to war for all those crashing and breaking their way through societal structures and expectations."/>
        </>

        )}>
        </Route>

        <Route path = {"/cart"} render = {(props) => (

          <>
           <Cart 
      cartProducts = {cartProducts}     
      removeFromCart = {handleRemoveFromCart}
      addToCart = {handleAddToCart}

      />

          </>
        )}>

        </Route>


        
      </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
