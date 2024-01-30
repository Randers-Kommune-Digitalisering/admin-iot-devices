const Node = {
  "id": "ef23bca4779aa111",
  "type": "switch",
  "z": "b1af099441f07c56",
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
  "x": 570,
  "y": 460,
  "wires": [
    [
      "20ae6fc0f8dd54b0"
    ],
    [
      "d6021a204b83a4c6"
    ]
  ]
}

module.exports = Node;