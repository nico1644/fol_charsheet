import React, {Component} from 'react';
import {Table, Checkbox, Button, Grid, Image,
  Segment, Dropdown, Popup, Form, TextArea} from "semantic-ui-react"

export const Weapons = [
  {
    key:0,
    text:"Spoon",
    value:"Spoon",
    details:"DMG: 1d4, Type: Light, Throw: 45ft"
  },{
    key: 1,
    text:"Knife",
    value:"Knife",
    details: "DMG: 1d4, Type: Light, Throw: 60ft"
  },{
    key: 2,
    text:"Straw Shot",
    value:"Straw Shot",
    details: "DMG: 1d6, Type: Light, Throw: 30ft"
  },{
    key: 3,
    text:"Fork",
    value:"Fork",
    details: "DMG: 1d4, Type: Graceful/Light, Throw: 60ft"
  },{
    key: 4,
    text:"Whisk",
    value:"Whisk",
    details: "DMG: 1d10, Type: Graceful, Throw: 25ft"
  },{
    key: 5,
    text:"Parin Knife",
    value:"Parin Knife",
    details: "DMG: 1d12, Type: Graceful, Throw: 60ft"
  },{
    key: 6,
    text:"Toothpicks",
    value:"Toothpicks",
    details: "DMG: 1d4, Type: Graceful, Throw: 60ft"
  },{
    key: 7,
    text:"Great Fork",
    value:"Parin Knife",
    details: "DMG: 1d8, Type: Graceful/2-Handed, Throw: Nope"
  },{
    key: 8,
    text:"Spork",
    value:"Spork",
    details: "DMG: 1d6, Type: Standard/2-Handed, Throw: 30ft"
  },{
    key: 9,
    text:"Spatula",
    value:"Spatula",
    details: "DMG: 1d10, Type: Heavy, Throw: Nope"
  },{
    key: 10,
    text:"Ladie",
    value:"Ladie",
    details: "DMG: 1d10, Type: Heavy, Throw: Nope"
  },{
    key: 11,
    text:"Frying Pan",
    value:"Frying Pan",
    details: "DMG: 1d12, Type: Heavy, Throw: 10ft"
  },{
    key: 12,
    text:"Great Spoon",
    value:"Great Spoon",
    details: "DMG: 1d8, Type: Heavy/2-Handed, Throw: Nope"
  },{
    key: 13,
    text:"Great Knife",
    value:"Great Knife",
    details: "DMG: 1d8, Type: Heavy/2-Handed, Throw: 10ft"
  },{
    key: 14,
    text: "Cast-Iron Skillet",
    value: "Cast-Iron Skillet",
    details: "DMG: 3d6, Type: Heavy/2-Handed, Throw: Nope"
  },{
    key: 15,
    text:"Toothpick Crossbow",
    value:"Toothpick Crossbow",
    details: "DMG: 1d6, Type: Heavy, Throw: 10ft"
  }
]

export const Armor = [
  {
    key: 0,
    text: "Fresh Baked Bun",
    value: "Fresh Baked Bun",
    Type: "Light",
    Details: "+1 Defense",
    Numval: 1,
    Ability: "DEF"
  },{
    key: 1,
    text: "Foil Wizard Robe",
    value: "Foil Wizard Robe",
    Type: "Light",
    Details: "+1 Arcana",
    Numval: 1,
    Ability: "ARC"
  },{
    key: 2,
    text: "Apron",
    value: "Apron",
    Type: "Light",
    Details: "+1 Grace",
    Numval: 1,
    Ability: "GRC"
  },{
    key: 3,
    text: "Red Polo, Black Visor",
    value: "Red Polo, Black Visor",
    Type: "Light",
    Details: "+1 Defense",
    Numval: 1,
    Ability: "DEF"
  },{
    key: 4,
    text: "Shift Lords Tunic",
    value: "Shift Lords Tunic",
    Type: "Light",
    Details: "+2 Arcana",
    Numval: 2,
    Ability: "ARC"
  },{
    key: 5,
    text: "Crispy Chicken Armor",
    value: "Crispy Chicken Armor",
    Type: "Medium",
    Details: "+2 Defense",
    Numval: 2,
    Ability: "DEF"
  },{
    key: 6,
    text: "Clamshell Packaging",
    value: "Clamshell Packaging",
    Type: "Medium",
    Details: "+2 Defense",
    Numval: 2,
    Ability: "DEF"
  },{
    key: 7,
    text: "Oven Plating",
    value: "Oven Plating",
    Type: "Medium",
    Details: "+2 Defense",
    Numval: 2,
    Ability: "DEF"
  },{
    key: 8,
    text: "Bacon Armor",
    value: "Bacon Armor",
    Type: "Heavy",
    Details: "+3 Defense",
    Numval: 3,
    Ability: "DEF"
  },{
    key: 9,
    text: "Biggie Armor",
    value: "Biggie Armor",
    Type: "Heavy",
    Details: "+3 Defense and resistance to ice attacks",
    Numval: 3,
    Ability: "DEF",
    Special: "RES to Ice Attacks"
  }
]

export const Animals = [
  {
    key: 0,
    text: "Horse",
    value: "Horse",
    Hp: 10,
    Damage: "1d8",
    Movement: "Movement speed x2"
  },{
    key: 1,
    text: "Donkey",
    value: "Donkey",
    Hp: 12,
    Damage: "1d6",
    Movement: "Movement speed x1.5"
  },{
    key: 2,
    text: "Mule",
    value: "Mule",
    Hp: 15,
    Damage: "1d4",
    Movement: "Movement speed x1.5"
  }
]

export const Levels = [
  {
    key: 0,
    text: "LEVEL 1",
    value: "lvl1"
  },{
    key: 1,
    text: "LEVEL 2",
    value:"lvl2"
  },{
    key: 2,
    text: "LEVEL 3",
    value:"lvl3"
  },{
    key: 3,
    text: "LEVEL 4",
    value: "lvl4"
  },{
    key: 4,
    text: "LEVEL 5",
    value: "lvl5"
  }
]

export default Weapons
