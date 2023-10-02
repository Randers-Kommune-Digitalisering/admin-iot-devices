const Node = {
  "id": "8bc2222bbe133ca5",
  "type": "switch",
  "z": "6f89a22d2f227f45",
  "name": "Kontrollér om modtaget data \\n er nyere end gemt data",
  "property": "payload[0].last_observation ~> $toMillis",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gte",
      "v": "(data.observedAt[0] ~> $split(\".\"))[0] ~> $toMillis",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 620,
  "y": 1180,
  "wires": [
    [
      "3bfbf1d97bb9f254"
    ],
    [
      "3fa3ed7cbdbe0884"
    ]
  ],
  "_order": 47
}

module.exports = Node;