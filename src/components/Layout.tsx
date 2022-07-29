import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import background from '../../public/background.png'


function Layout(props) {
  const router = useRouter();
  const aboutStyle = {
    color: router.pathname === '/about' ? 'white' : 'black'
  }
  const homeStyle = {
    color: router.pathname === '/' ? 'white' : 'black'
  }
  const creditStyle = {
    color: router.pathname === '/credit' ? 'white' : 'black'
  }

  return (
    <div >
      <Background>
      <Image src={background}
      objectFit='cover'
      quality={100}
      alt="Aquascape"
      layout='fill' />
      </Background>
      <Header>
        <div>
          <MenuButton style={homeStyle} onClick={() => { router.push('/') }}>Home</MenuButton>
          <MenuButton style={aboutStyle} onClick={() => { router.push('/about') }}>About</MenuButton>
          <MenuButton style={creditStyle} onClick={() => { router.push('/credit') }}>Team</MenuButton>
        </div>
        <BorderButton >Play</BorderButton>
      </Header>
    </div>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  font-family: Monospace;
  margin: 0 4em;
  padding-top: 1em;
  justify-content: space-between;
`

const MenuButton = styled.span`
  border: none;
  margin: 0.5em 1.5em;
  font-size: 1.3em;
  cursor: pointer;
`

const BorderButton = styled(MenuButton)`
  border: solid;
  color: white;
  background-color: teal;
  padding: 1em 2.0em;
  border-radius: 6px;
`

const Background = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
overflow: hidden;
z-index: -1;
` 

export default Layout
