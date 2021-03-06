import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const Header = () => {
  return (
    <Navbar>
      <Logo><Link to="/">Dungeon</Link></Logo>
      <RightNav>
      <Home><Link to="/">home</Link></Home>
      <Download><Link to="download">download</Link></Download>
      <HTP><Link to="how-to-play">how to play</Link></HTP>
      <Lore><Link to="lore">lore</Link></Lore>
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
    a {
      text-decoration: none;
      color: #C5C5C5;
    }
    a:hover {
      cursor: pointer;
      color: #007880;
`

const Logo = styled.div`
    a {
      text-decoration: none;
      color: #d0021b;
    }
`

const Home = styled.div`
`

const Download = styled.div`
`

const HTP = styled.div`
`

const Lore = styled.div`
`
