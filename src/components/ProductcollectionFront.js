import { Image, Container, Row, Col, Nav } from "react-bootstrap"
import { Parallax } from "react-parallax"

const ProductcollectionFront = (props) => {
    const imageStyle = {
        width: "100%",
        height: "290px"
    }

const BrandImageStyle = {
    width: "100%",
    height : "100%"
   
}

    const RowStyling = {
        marginBottom: "2%",
        marginTop:"2%"
    }

    return (

        <div>
            <Parallax  blur={3} bgImage="https://secureservercdn.net/198.71.233.65/cp8.ef8.myftpupload.com/wp-content/uploads/2020/04/IMG_0458-2048x1365.jpg" 
            bgImageAlt="the cat" strength={200}>
        
            <Container style = {{paddingBottom: "5%"}}>
                <Row style = {RowStyling}>
                    <Col md={4}>
                        <Nav.Link href = "/bullInChinaShop" style = {{color: "black"}}>
                        <Image style = {imageStyle} src = "https://cdn.shopify.com/s/files/1/0434/5892/0604/files/Bull_In_A_China_Shop_Campaign_page.jpg?v=1612440289" />
                        <h2>BULL IN A CHINA SHOP</h2>
                        </Nav.Link>
                        </Col>
                        
                    <Col md={{ span: 5, offset: 2 }}><Image style = {imageStyle} src="https://cdn.shopify.com/s/files/1/0434/5892/0604/files/Garden_Of_Earthly_Desires__Campaignpage.jpg?v=1612440288" /><h2>GARDEN OF EARTHLY DESIRES</h2></Col>
                </Row>
                <Row style = {RowStyling}>
                    <Col md={{ span: 5, offset: 1 }}><Image style = {imageStyle} src="https://cdn.shopify.com/s/files/1/0434/5892/0604/files/Fruit_Shop_Campaign_Page.jpg?v=1612438945" /><h2>FRUIT SHOP AT THE END OF THE WORLD</h2></Col>
                    <Col style = {{backgroundColor: "#b5d2dc", height: "290px"}} md={{ span: 4, offset: 2 }}>   <Image style = {BrandImageStyle} src = "https://www.culturecultivation.com/assets/theme/default/images/footer-logo-lg.svg"/>
                        <h2>CULTURE CULTIVATION: 5th EDITION</h2></Col>
                </Row>
                <Row style = {RowStyling}>
                    <Col  md={{ span: 5, offset: 3 }}>
                    <Image style = {imageStyle} src="https://cdn.shopify.com/s/files/1/0062/1749/8742/files/AstronautPrint_Full_LowRes2.jpg?v=1617437017" /><h2>SPACE BISKIT: SPACED OUT</h2>
                    </Col>
                </Row>
            </Container>
            </Parallax>
        </div>
    )
}

export default ProductcollectionFront
