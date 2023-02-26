import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { AnimationProps, SlideEffectWrapper, slideUp } from "../app/slideUpAnimation"
import styled from 'styled-components'

const Title = styled.h1<AnimationProps>`
    font-size: 4em;
    margin: .4em 0;
    color: teal;
    text-align: center;
    opacity: 1;
    animation: ${slideUp} ease ${props => props.duration || '.7s'} forwards ${props => props.delayTime || '.5s'};
    position: relative;
    opacity:0;
`
const Text = styled.p<AnimationProps>`
    font-size: 1.8em;
    color: black;
    text-align: center;
    line-height: 2.0em;
    margin-top: 0.5em;
    animation: ${slideUp} ease ${props => props.duration || '.7s'} forwards ${props => props.delayTime || '.5s'};
    position: relative;
    opacity:0;
`
const Box = styled.div`
    width: 60%;
    margin: 5em auto;
    text-align: center;
`


const AboutPage: NextPage = () => {
  return (
    <div>
      <Layout />
      <SlideEffectWrapper>
        <Box>
          <Title delayTime='.5s'>About</Title>
          <Text delayTime='1s'>As the new intern on a prestigious underwater research base, your new job is full of promise. </Text>
          <Text delayTime='1.5s'>You can spend time studying the unique sealife, learning the tricks of the trade from your new mentors and companions,
            and exploring the seafloor in the high tech mini-sub. </Text>
          <Text delayTime='2s'>Well at least that’s what you would be doing if the sub wasn’t under repair…
            and the walls of the base hadn’t ruptured after your third day on the job.   </Text>
          <Text delayTime='2.5s'>Now, after weeks of stasis,
            you wake up to find a completely flooded base filled with otherwise ordinary sea creatures that suddenly all want to kill you! </Text>
          <Text delayTime='3s'>What to do?</Text>
        </Box>
      </SlideEffectWrapper>
    </div>
  )
}

export default AboutPage