const Node = {
  "id": "9f4ad71f76a13a20",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "name": "Flere målere?",
  "property": "payload.length",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gt",
      "v": "1",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 340,
  "y": 800,
  "wires": [
    [
      "18e37d874a6f8249"
    ],
    [
      "9e7507e0b9f52a73"
    ]
  ]
}

module.exports = Node;