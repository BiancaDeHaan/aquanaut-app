import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { AboutComponent } from '../components/AboutComp'


const AboutPage: NextPage = () => {
  return (
    <div>
      <Layout />
      <AboutComponent />
    </div>
  )
}

export default AboutPage

//{props => props.inputColor


