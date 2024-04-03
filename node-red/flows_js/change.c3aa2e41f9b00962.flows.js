const Node = {
  "id": "c3aa2e41f9b00962",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "39a84f62ba24489c",
  "name": "controlledProperties",
  "rules": [
    {
      "t": "set",
      "p": "controlledProperties",
      "pt": "global",
      "to": "[{\"localeName\":\"Strømforbrug\",\"propertyName\":\"electricityConsumption\",\"energyType\":\"El\",\"energyTypeUid\":0},{\"localeName\":\"Vandforbrug\",\"propertyName\":\"waterConsumption\",\"energyType\":\"Vand\",\"energyTypeUid\":1},{\"localeName\":\"Centralvarme (Strømforbrug)\",\"propertyName\":\"electricityConsumption\",\"energyType\":\"Centralvarme\",\"energyTypeUid\":2},{\"localeName\":\"Fjernvarme (Strømforbrug)\",\"propertyName\":\"electricityConsumption\",\"energyType\":\"Fjernvarme\",\"energyTypeUid\":3},{\"localeName\":\"Olieforbrug (Energi)\",\"propertyName\":\"energy\",\"energyType\":\"Olie\",\"energyTypeUid\":4},{\"localeName\":\"Gasforbrug\",\"propertyName\":\"gasConsumption\",\"energyType\":\"Gas\",\"energyTypeUid\":5},{\"localeName\":\"Køling\",\"propertyName\":\"temperature\",\"energyType\":\"Køling\",\"energyTypeUid\":6},{\"localeName\":\"Trykluft\",\"propertyName\":\"pressure\",\"energyType\":\"Trykluft\",\"energyTypeUid\":7}]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1020,
  "y": 60,
  "wires": [
    [
      "f0ca37ad3e5adf1c"
    ]
  ]
}

module.exports = Node;