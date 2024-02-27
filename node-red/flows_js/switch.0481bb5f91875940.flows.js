const Node = {
  "id": "0481bb5f91875940",
  "type": "switch",
  "z": "330fa4345482a521",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 830,
  "y": 660,
  "wires": [
    [
      "1ac694583ba72ca3"
    ],
    [
      "9d32536e5def0eeb"
    ]
  ]
}

module.exports = Node;