const Node = {
  "id": "fbae56af4d27fb1e",
  "type": "switch",
  "z": "7597822579cc59c2",
  "name": "",
  "property": "productType",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "pulse",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 390,
  "y": 160,
  "wires": [
    [
      "97d4d4f82036e80d"
    ],
    [
      "cf45c8d69cf3a956"
    ]
  ]
}

module.exports = Node;