const Node = {
  "id": "0c752769625d4d99",
  "type": "switch",
  "z": "5f6ef472b7d9e1e9",
  "name": "Success?",
  "property": "payload.filename = undefined",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 360,
  "y": 580,
  "wires": [
    [
      "6cab6417bf96f118"
    ],
    [
      "5bae876f7cc8d3b2"
    ]
  ]
}

module.exports = Node;