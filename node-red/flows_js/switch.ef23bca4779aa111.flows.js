const Node = {
  "id": "ef23bca4779aa111",
  "type": "switch",
  "z": "330fa4345482a521",
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
  "x": 650,
  "y": 540,
  "wires": [
    [
      "0481bb5f91875940"
    ],
    [
      "d6021a204b83a4c6"
    ]
  ]
}

module.exports = Node;