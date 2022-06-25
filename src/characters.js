const characters = [{
        id: 1,
        name: "Cleric",
        imgSrc: "images/cleric.jpg",
        stats: "15AC/14HP/10AT/1DMG",
        trait: "Heal when open tile HP +1"
    },
    {
        id: 2,
        name: "Wizard",
        imgSrc: "images/wizard.jpg",
        stats: "14AC/14HP/11AT/1DMG",
        trait: "Can open 2 tiles each turn"
    },
    {
        id: 3,
        name: "Monk",
        imgSrc: "images/monk.jpg",
        stats: "16AC/15HP/8AT/1DMG",
        trait: "Increased chance for a treasure to appear"
    },
    {
        id: 4,
        name: "Archer",
        imgSrc: "images/archer.jpg",
        stats: "14AC/13HP/12AT/2DMG",
        trait: "+1 to DMG"
    },
    {
        id: 5,
        name: "Knight",
        imgSrc: "images/knight.jpg",
        stats: "17AC/17HP/5AT/1DMG",
        trait: "Reduced chance for the enemy to appear"
    },
    {
        id: 6,
        name: "Necromancer",
        imgSrc: "images/necromancer.jpg",
        stats: "14AC/16HP/9AT/1DMG",
        trait: "All enemies are undead"
    },
    {
        id: 7,
        name: "Druid",
        imgSrc: "images/druid.jpg",
        stats: "15AC/16HP/8AT/1DMG",
        trait: "All enemies are animals"
    },
    {
        id: 8,
        name: "Bat",
        imgSrc: "images/bat.jpg",
        stats: "13AC/2HP/7AT/1DMG",
        trait: "Tiny beast. Hunts at night"
    },
    {
        id: 9,
        name: "Bear",
        imgSrc: "images/bear.jpg",
        stats: "16AC/2HP/8AT/1DMG",
        trait: "Large beast. Hard to hit"
    },
    {
        id: 10,
        name: "Eagle",
        imgSrc: "images/eagle.jpg",
        stats: "14AC/2HP/10AT/1DMG",
        trait: "Large beast. Love the heights"
    },
    {
        id: 11,
        name: "Ghost",
        imgSrc: "images/ghost.jpg",
        stats: "15AC/2HP/9AT/1DMG",
        trait: "Medium undead. Hard to see"
    },
    {
        id: 12,
        name: "Goblin",
        imgSrc: "images/goblin.jpg",
        stats: "14AC/2HP/8AT/1DMG",
        trait: "Small humanoid. Ugly face"
    },
    {
        id: 13,
        name: "Mummy",
        imgSrc: "images/mummy.jpg",
        stats: "15AC/2HP/8AT/1DMG",
        trait: "Medium undead. Back from the dead"
    },
    {
        id: 14,
        name: "Spider",
        imgSrc: "images/spider.jpg",
        stats: "13AC/2HP/9AT/1DMG",
        trait: "Tiny beast. Many eyes"
    },
    {
        id: 15,
        name: "Vampire",
        imgSrc: "images/vampire.jpg",
        stats: "16AC/2HP/9AT/1DMG",
        trait: "Shapechanger. Feeds on blood"
    },
    {
        id: 16,
        name: "Ogre",
        imgSrc: "images/ogre.jpg",
        stats: "14AC/2HP/14AT/1DMG",
        trait: "Large giant. Hard hitter"
    },
    {
        id: 17,
        name: "Orc",
        imgSrc: "images/orc.jpg",
        stats: "15AC/2HP/10AT/1DMG",
        trait: "Medium humanoid. Low intelligence"
    },
    {
        id: 18,
        name: "Troll",
        imgSrc: "images/troll.jpg",
        stats: "18AC/2HP/6AT/1DMG",
        trait: "Large giant. Clumsy"
    },
    {
        id: 19,
        name: "Wyvern",
        imgSrc: "images/wyvern.jpg",
        stats: "13AC/2HP/16AT/1DMG",
        trait: "Large dragon. Attack from the sky"
    },
    {
        id: 20,
        name: "Zombie",
        imgSrc: "images/zombie.jpg",
        stats: "11AC/2HP/12AT/1DMG",
        trait: "Medium undead. Won't be resurrected again"
    },
    {
        id: 21,
        name: "Mermaid",
        imgSrc: "images/mermaid.jpg",
        stats: "18AC/8HP/11AT/2DMG",
        trait: "Humanoid aquatic. Can breathe underwater"
    },
    {
        id: 22,
        name: "Minotaur",
        imgSrc: "images/minotaur.jpg",
        stats: "19AC/8HP/10AT/2DMG",
        trait: "Large monstrosity. Attacks with horns"
    },
    {
        id: 23,
        name: "Reaper",
        imgSrc: "images/reaper.jpg",
        stats: "17AC/7HP/13AT/2DMG",
        trait: "Medium fiend. Servant of death"
    },
    {
        id: 24,
        name: "Werewolf",
        imgSrc: "images/werewolf.jpg",
        stats: "17AC/10HP/10AT/2DMG",
        trait: "Shapechanger. Wolf humanoid hybrid"
    },
    {
        id: 25,
        name: "Centaur",
        imgSrc: "images/centaur.jpg",
        stats: "15AC/13HP/9AT/2DMG",
        trait: "Large monstrosity. Very beautiful"
    },
    {
        id: 26,
        name: "Medusa",
        imgSrc: "images/medusa.jpg",
        stats: "14AC/13HP/10AT/2DMG",
        trait: "Medium monstrosity. Has a petrifying gaze"
    },
    {
        id: 27,
        name: "Demon",
        imgSrc: "images/demon.jpg",
        stats: "19AC/15HP/14AT/3DMG",
        trait: "Can cast various spells"
    },
    {
        id: 28,
        name: "Dragon",
        imgSrc: "images/dragon.jpg",
        stats: "21AC/17HP/13AT/3DMG",
        trait: "Can breathe fire"
    },
    {
        id: 29,
        name: "Snake",
        imgSrc: "images/snake.jpg",
        stats: "20AC/14HP/15AT/3DMG",
        trait: "Can cast poison"
    },
    {
        id: 30,
        name: "Lich",
        imgSrc: "images/lich.png",
        stats: "20AC/16HP/14AT/3DMG",
        trait: "Can lower AC"
    },
    {
        id: 31,
        name: "Witch",
        imgSrc: "images/witch.jpg",
        stats: "18AC/14HP/16AT/3DMG",
        trait: "Can lower LVL"
    }
]

export default characters