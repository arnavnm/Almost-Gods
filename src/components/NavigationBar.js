import { Navbar, Nav, Image } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div style = {{backgroundColor: "#FC4445"}}>
         <Navbar>
   
    <Navbar.Brand href="#home"><Image src ="https://cdn.shopify.com/s/files/1/0379/3964/2508/files/ag-logo_2048x.png?v=1614325508"/></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav>
    
  </Navbar>
        </div>
    )
}

export default NavigationBar
