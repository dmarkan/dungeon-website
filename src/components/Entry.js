import React from 'react'
import styled from 'styled-components'

const Entry = (props) => {
  return (
    <Container>
    {props.name}
    <img src={props.img} />
    <p>{props.stats}</p>
    <p>{props.trait}</p>
    </Container>
  )
}

export default Entry

const Container = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
`
