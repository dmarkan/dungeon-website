import React from 'react'
import styled from 'styled-components'

function Download() {
  return (
  <Container>
    <Image><img src="images/necromancer.jpg" alt="download-img" /></Image>
    <div class="right-side">
    <Heading>
    <h1>Available now on <span>Google Play</span></h1>
    </Heading>
    <Link><a href="https://play.google.com/store/apps/details?id=com.wDungeon_15663095" target="_blank"><i class="fab fa-google-play"></i> GET IT NOW</a>
    </Link>
    </div>
  </Container>
)}

export default Download

const Container = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`

const Heading = styled.div`
    span {
      color: #FDC57B;
    }
    font-size: 1.5rem;
    @media (orientation: portrait) {
      font-size: 1rem;
    }
`

const Link = styled.div`
a {
  text-decoration: none;
  color: #C5C5C5;
  font-size: 2rem;
  @media (orientation: portrait) {
    font-size: 1.5rem;
  }
}
a:hover {
  cursor: pointer;
  color: #007880;
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