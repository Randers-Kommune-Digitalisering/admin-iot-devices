const Node = {
  "id": "550a4b5545fc0f86",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "name": "Baseret på skabelon?",
  "property": "payload[0].defaultValuesTemplateUid",
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
  "x": 720,
  "y": 540,
  "wires": [
    [
      "8f32174591048747"
    ],
    [
      "49293fabb0fc27ff"
    ]
  ]
}

module.exports = Node;