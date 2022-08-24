import {Navbar, NavbarBrand, Container} from 'react-bootstrap'

const Footer = () => {
    return (
        <div >
            <Navbar sticky = "true" bg="light" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn.shopify.com/s/files/1/0379/3964/2508/files/ag-logo_2048x.png?v=1614325508"
          
          height="30"
          className="d-inline-block align-top"
        />{' '}
       
      </Navbar.Brand>
      <h1>Add to cart</h1>
    </Container>
  </Navbar>
        </div>
    )
}

export default Footer
