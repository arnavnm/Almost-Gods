
import { Image, Container, Row, Col, Button } from "react-bootstrap"

const ShopByCat = (props) => {
    return (
        <div style = {{color: "white"}}>
           { props.pos === 'r' &&  <Container style = {{borderTop: "10px solid black",backgroundColor: "black", height: "100%", margin: "auto", width: "950%"}}><Row>
                <Col><h2>{props.text}</h2>
                <p>{props.description}</p>
                <Button>Read more</Button>
                </Col>
                <Col style={{ width: "50%", paddingBottom: "2%" }}>
                    <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={props.image} />
                </Col>
            </Row></Container>}

            { props.pos === 'l' &&  <Container style = {{borderTop: "10px solid black",backgroundColor: "black", height: "100%", margin: "auto", width: "950%"}}><Row>
                <Col style={{ width: "50%", paddingBottom: "2%" }}>
                    <Image style={{ width: "100%", height: "100%", objectFit: "cover" }} src={props.image} />
                    </Col>
                <Col><h2>{props.text}</h2>
                <p>{props.description}</p>
                <Button>Read more</Button>
                </Col>
            </Row></Container>}
        </div>
    )
}

export default ShopByCat
