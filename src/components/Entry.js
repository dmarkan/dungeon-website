import React from 'react'
import styled from 'styled-components'

const Entry = (props) => {
  return (
    <Container>
    <p class="name-props">{props.name}</p>
    <img class="img-props" src={props.img} />
    <div class="bottom-props">
    <p>{props.stats}</p>
    <p>{props.trait}</p>
    </div>
    </Container>
  )
}

export default Entry

const Container = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
`
