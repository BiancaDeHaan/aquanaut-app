import styled from "styled-components"
import { slideUp, SlideEffectWrapper, AnimationProps } from '../app/slideUpAnimation'
import { useRouter } from 'next/router';

function HomeComponent() {
    const router = useRouter();
    return (
        <SlideEffectWrapper>
        <Box>
          <TitleAnim delayTime='.5s'>Aquanauts</TitleAnim>
          <ButtonAnim delayTime='1s' onClick={() => { router.push('/game') }}>Play Now</ButtonAnim>
        </Box>
      </SlideEffectWrapper>
    )
}

const Background = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
overflow: hidden;
z-index: -1;
`

const Box = styled.div`
    width: 80%;
    margin: 5em auto;
    text-align: center;
`

const Title = styled.h1`
    font-size: 4.2em;
    margin: .4em 0;
    color: teal;
    text-align: center;
`

const TitleAnim = styled(Title) <AnimationProps>`
animation: ${slideUp} ease ${props => props.duration || '.7s'} forwards ${props => props.delayTime || '.5s'};
    position: relative;
    opacity:0;`

const MenuButton = styled.button`
  border: solid;
  margin: 0.5em 0em;
  font-size: 1.3em;
  cursor: pointer;
  color: white;
  background-color: teal;
  padding: 1em 2.0em;
`

const ButtonAnim = styled(MenuButton) <AnimationProps>`
animation: ${slideUp} ease ${props => props.duration || '.7s'} forwards ${props => props.delayTime || '.5s'};
    position: relative;
    opacity:0;`


export {HomeComponent}