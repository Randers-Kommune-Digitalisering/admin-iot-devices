const Node = {
  "id": "30b13d010109ab15",
  "type": "switch",
  "z": "bd0288d62c2263f6",
  "name": "",
  "property": "data.decoder",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "adeunis",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 130,
  "y": 1360,
  "wires": [
    [
      "74863fd3b7c04171"
    ],
    [
      "d2f0e1292d96f808"
    ]
  ]
}

module.exports = Node;