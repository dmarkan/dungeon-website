import React from 'react'
import characters from '../characters'
import Entry from './Entry'

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
  <div>
    {characters.map(createEntry)}
  </div>
  )
}

export default Lore