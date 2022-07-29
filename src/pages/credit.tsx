import styled from 'styled-components'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { CreditComponent } from '../components/CreditComp'


const CreditPage: NextPage = () => {
  return (
    <div>
      <Layout/>
      <CreditComponent/>
    </div>
  )
}


export default CreditPage
