import { Image } from "react-bootstrap"
import ShopByCat from "./ShopByCat"
import { Parallax } from "react-parallax"

const Home = ({ name }) => {
    return (
        <div>
            <Parallax style = {{height: "780px"}} blur={0} bgImage="https://freesociety.in/uploads/5457660f3cf27db28cc44294930673a8.png" bgImageAlt="the cat" strength={200}>
        </Parallax>
           

            <ShopByCat pos = 'r' 
            image="https://freesociety.in/uploads/d2f6ee1823a5b2cb5358c72fa18c4440.png"
            text="Through the lens: Cactus Jack" 
            description = "Being a streetwear enthusiast and being a hip hop music fan almost always go hand in hand. The relationship between two of the biggest cultural phenomena in the 21st century has influenced each other a lot, almost like a symbiotic relationship that has become one of the definitions of so many hyped releases in recent times. And then Travis Scott comes in, obliterating any boundaries that existed between the two worlds with his Cactus Jack collaborations. Scott’s record label has become less that and more of a fashion marker, with all his Nike drops mentioning it in some way or the other. We dig deep into what Cactus Jack signifies for both the artist and the community that has made it a must-have in every serious sneakerhead’s wardrobe."
            />
            <ShopByCat pos = 'l'
            image = "https://freesociety.in/uploads/c4ea9b155862b72c2abb1000116f4d25.png"
            text = "Esports and street culture: Origin"
            description = "Luxury fashion and streetwear with a hint of enthusiasm for sneakers is a new way of self expression. In recent times, the streetwear fashion and sneaker industry has started to plant its roots in Esports/gaming. In fact, the gaming industry might be their new playground. As unusual as it sounds, both the industries already function hand in hand. Still confused? Let me explain."
            />    
            <ShopByCat pos = 'r'
            image = "https://freesociety.in/uploads/7ace4ac8f5119f85fb45b49f65db9cb3.jpg"
            text = "FS Portraits: The artist known as Bhattchin"
            description = "I remember going through my explore feed on Instagram, past reposted TikToks and a sea of cute dog videos, scrolling through aimlessly without any expectations from this void. Something suddenly caught my eye during this rapid exercise, and I doubled back to that post. In that small thumbnail, I figured out what it was: a richly-etched artwork featuring one of my favourite artists Thundercat surrounded by Dragon Balls from my second favourite anime series."
            />



        </div>
    )
}

const defaultName = "arnav"

export default Home
