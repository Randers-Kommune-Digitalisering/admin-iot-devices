const Node = {
  "id": "d1d2a41e32fa6523",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "g": "e26a157813bbe7fb",
  "name": "Findes data?",
  "property": "payload.dataTablename",
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
  "x": 650,
  "y": 2440,
  "wires": [
    [
      "70b4f531e6e2eff3"
    ],
    [
      "4a0138c6a37e4ee9"
    ]
  ]
}

module.exports = Node;