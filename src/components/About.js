import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container>
        <Heading>
            <h2><span>Dungeon</span> is RPG game based on D&D rules.</h2>
        </Heading>
    <SubContainer>
        <List>
            <ul>
                <li><span>Explore</span> dungeon</li>
                <li><span>Battle</span> enemies</li>
                <li><span>Collect</span> treasure</li>
                <li><span>Defend</span> against traps</li>
                <li><span>Defeat</span> Boss</li>
            </ul>
        </List>
        <Image><img src="images/druid.jpg" alt="about-img" /></Image>
    </SubContainer>
    </Container>
  )
}

export default About

const Container = styled.div`
    color: #fff;
    margin-top: 5rem;
`

const Heading = styled.div`
    span {
        color: #d0021b;
        font-style: italic;
    }
`

const SubContainer = styled.div`
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
        @media (orientation: portrait) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
`

const List = styled.div`
    li {
        margin-top: 1rem;
    }
    span {
        color: #FDC57B;
    }
`

const Image = styled.div`
    img {
        height: 30rem;
        width: 30rem;
        border-radius: 10px;
        @media (orientation: portrait) {
        display: block;
        margin: auto;
        width: 100%;
        height:fit-content;
        }
    }
`