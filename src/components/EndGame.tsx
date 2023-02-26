import { useRouter } from "next/router";
import styled from "styled-components"

function EndGame() {
    const router = useRouter();

    return (
        <Background> 
            <Title>
                Thank you for playing!
            </Title>
            <HomeButton onClick={() => {router.push('/')}}>Back to Home Page</HomeButton>
        </Background>
    )
}

const Title = styled.h1`
font-size: 4em;
margin: 0.5em auto;
color: teal;
text-align: center;
`

const HomeButton = styled.button`
border: solid;
color: white;
background-color: teal;
padding: 1em 1em;
border-radius: 1em;
font-size: 1.2em;
width: 20%;
cursor: pointer;
`

const Background = styled.div`
  background: rgba(232,255,252,1);
  position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   z-index: -1;
    text-align: center;
`

export {EndGame}