import React from 'react'
import styled from 'styled-components'

function HowToPlay() {
  return (
   <Container>
    <TopSection>
      <div><span>Stats</span><br></br>
LVL - Hero level. If a hero gains next level, he or she will receive +1AC, +1AT and +2HP<br></br>
AC - Armor. AT must equal or be higher than AC to give/receive DMG<br></br>
HP - Health points. Hero/Enemy remaining health. If equals or less than 0, Hero/Enemy dies<br></br>
AT - Attack roll. AT must equal or be higher than AC to give/receive DMG<br></br>
DMG - Damage. If AT is successful, Hero/Enemy will inflict DMG<br></br>
Trait - Special characteristic or power
</div>
<TopSectionRight>
<div><span>Hero Phase</span><br></br>
Hero can open tile<br></br>
Hero attacks
</div>
<div><span>Enemy Phase</span><br></br>
Trap attacks<br></br>
Enemy attacks
</div>
</TopSectionRight>
    </TopSection>
    <MiddleSection>
      <div><span>Tile</span><br></br>
Treasure - Hero gets 1 item in inventory<br></br>
Trap - Hero must defend against a trap<br></br>
Enemy - Hero must fight against an enemy<br></br>
Empty tile - Hero can open another tile
</div>
<div class="icons">
  <img src="images/treasure-icon.png" alt="treasure-icon" />
  <img src="images/trap-icon.png" alt="trap-icon" />
  <img src="images/enemy-icon.png" alt="enemy-icon" />
  <img src="images/black-icon.png" alt="black-icon" />
</div>
    </MiddleSection>
    <BottomSection>
      <div><span>Inventory</span><br></br>
Hero can store 5 items<br></br>
Hero can use 1 item at will
      </div>
    </BottomSection>
   </Container>
  )
}

export default HowToPlay

const Container = styled.div`
margin-top: 5rem;
font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: left;
    span {
      color: #FDC57B;
    }
`

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (orientation: portrait) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
`

const TopSectionRight = styled.div`
`

const MiddleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icons {
      display: flex;
      width: 50%;
      justify-content: space-between;
      align-items: center;
      @media (orientation: portrait) {
        display: flex;
        flex-direction: column;
      }
    }
    img {
      border: solid 1px #C5C5C5;
      height: 6rem;
      width: 6rem;
    }
`

const BottomSection = styled.div`
`