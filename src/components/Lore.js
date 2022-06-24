import React from 'react'
import characters from '../characters'
import Entry from './Entry'
import styled from 'styled-components'

function createEntry(entry) {
  return (
    <Entry
    key={entry.id}
    name={entry.name}
    img={entry.imgSrc}
    stats={entry.stats}
    trait={entry.trait}
    />
  )
}

function Lore() {
  return (
  <Container>
    {characters.map(createEntry)}
  </Container>
  )
}

export default Lore

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  
  margin-top: 5rem;
  @media (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

