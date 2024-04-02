const Node = {
  "id": "c78ae4a745888e7f",
  "type": "switch",
  "z": "dc028cb1b3d1491a",
  "name": "",
  "property": "format",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "csv",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 790,
  "y": 1300,
  "wires": [
    [
      "261b1a255404186f"
    ],
    [
      "2a9d94ed8d44823f"
    ]
  ]
}

module.exports = Node;