const Node = {
  "id": "eb8510ce27f08ff5",
  "type": "switch",
  "z": "6f89a22d2f227f45",
  "name": "Er data null?",
  "property": "payload[0].last_observation",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nnull"
    },
    {
      "t": "null"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 270,
  "y": 1200,
  "wires": [
    [
      "8bc2222bbe133ca5"
    ],
    [
      "88bbb7b21b2b99af"
    ]
  ],
  "_order": 68
}

module.exports = Node;