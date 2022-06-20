import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Navbar>
      <Logo>Dungeon</Logo>
      <RightNav>
      <Home>home</Home>
      <Download>download</Download>
      <HTP>how to play</HTP>
      <Lore>lore</Lore>
      <Web>web</Web>
      </RightNav>
    </Navbar>
  )
}

const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #D0021B;
    font-size: 2rem;
    font-weight: 900;
`

const RightNav = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    color: #C5C5C5;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    align-items: center;

    @media (orientation: portrait) {
      flex-direction: column;
    }
`

const Logo = styled.div`
`

const Home = styled.div`
    :hover {
      cursor: pointer;
      color: #007880;
    }
`

const Download = styled.div`
    :hover {
      cursor: pointer;
      color: #007880;
    }
`

const HTP = styled.div`
    :hover {
      cursor: pointer;
      color: #007880;
    }
`

const Lore = styled.div`
    :hover {
      cursor: pointer;
      color: #007880;
    }
`

const Web = styled.div`
    :hover {
      cursor: pointer;
      color: #007880;
    }
`