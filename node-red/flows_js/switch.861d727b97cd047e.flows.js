const Node = {
  "id": "861d727b97cd047e",
  "type": "switch",
  "z": "e4e3eef16c2dc327",
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
  "x": 190,
  "y": 1220,
  "wires": [
    [
      "77953c1635743199"
    ],
    [
      "5737ec4a72c0a5c9"
    ]
  ]
}

module.exports = Node;