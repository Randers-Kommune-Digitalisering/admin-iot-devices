const Node = {
  "id": "7ef4e75e6630208b",
  "type": "switch",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "",
  "property": "templateUid",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "-1",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1270,
  "y": 880,
  "wires": [
    [
      "cefc5f1bab6add25"
    ],
    [
      "4c370fe200c3c11a"
    ]
  ]
}

module.exports = Node;