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
  "x": 910,
  "y": 580,
  "wires": [
    [
      "1ac694583ba72ca3"
    ],
    [
      "d6021a204b83a4c6"
    ]
  ]
}

module.exports = Node;