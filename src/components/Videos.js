import { Container } from "react-bootstrap"

const Videos = () => {
    return (
        <Container style = {{backgroundColor: "black", padding: "0", margin: "auto"}}>
        <div style = {{width: "100%"}}>
         <video style = {{width: "100%"}} autoPlay = {true} loop = {true} src = "https://freesociety.in/uploads/67038d5195a12f022a44417e7593a219.mp4"></video>   
        </div>
        </Container>
    )
}

export default Videos
