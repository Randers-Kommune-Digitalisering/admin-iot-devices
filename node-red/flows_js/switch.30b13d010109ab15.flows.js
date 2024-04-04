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
  "x": 210,
  "y": 1160,
  "wires": [
    [
      "4bfb7e143fc19332"
    ],
    [
      "d2f0e1292d96f808"
    ]
  ]
}

module.exports = Node;