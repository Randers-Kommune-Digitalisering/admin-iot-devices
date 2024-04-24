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
      "to": "[{\"localeName\":\"Strømforbrug\",\"propertyName\":\"electricityConsumption\",\"energyType\":\"El\",\"energyTypeUid\":0,\"energyKeyUid\":1},{\"localeName\":\"Vandforbrug\",\"propertyName\":\"waterConsumption\",\"energyType\":\"Vand\",\"energyTypeUid\":1,\"energyKeyUid\":2},{\"localeName\":\"Centralvarme (Strømforbrug)\",\"propertyName\":\"electricityConsumption\",\"energyType\":\"Centralvarme\",\"energyTypeUid\":2,\"energyKeyUid\":3},{\"localeName\":\"Fjernvarme (Strømforbrug)\",\"propertyName\":\"electricityConsumption\",\"energyType\":\"Fjernvarme\",\"energyTypeUid\":3,\"energyKeyUid\":4},{\"localeName\":\"Olieforbrug (Energi)\",\"propertyName\":\"energy\",\"energyType\":\"Olie\",\"energyTypeUid\":4,\"energyKeyUid\":5},{\"localeName\":\"Gasforbrug\",\"propertyName\":\"gasConsumption\",\"energyType\":\"Gas\",\"energyTypeUid\":5,\"energyKeyUid\":6},{\"localeName\":\"Køling\",\"propertyName\":\"temperature\",\"energyType\":\"Køling\",\"energyTypeUid\":6,\"energyKeyUid\":7},{\"localeName\":\"Trykluft\",\"propertyName\":\"pressure\",\"energyType\":\"Trykluft\",\"energyTypeUid\":7,\"energyKeyUid\":8}]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "dataTypes",
      "pt": "global",
      "to": "[{\"localeName\":\"Tællerstand\",\"typeUid\":0,\"energyKeyUid\":1},{\"localeName\":\"Forbrugsmåling\",\"typeUid\":1,\"energyKeyUid\":2},{\"localeName\":\"Aktuel værdi\",\"typeUid\":2,\"energyKeyUid\":3},{\"localeName\":\"Andet\",\"typeUid\":3,\"energyKeyUid\":4},{\"localeName\":\"Tank pejling\",\"typeUid\":4,\"energyKeyUid\":5},{\"localeName\":\"Tank påfyldning\",\"typeUid\":5,\"energyKeyUid\":6}]",
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