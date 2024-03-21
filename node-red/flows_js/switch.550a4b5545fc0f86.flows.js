const Node = {
  "id": "550a4b5545fc0f86",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "name": "Baseret på skabelon?",
  "property": "payload.templateUid",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gt",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 700,
  "y": 640,
  "wires": [
    [
      "d4c9376b5eb61668"
    ],
    [
      "49293fabb0fc27ff"
    ]
  ]
}

module.exports = Node;