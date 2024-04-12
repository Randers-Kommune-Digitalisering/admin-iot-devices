const Node = {
  "id": "c56ad88dc7079589",
  "type": "switch",
  "z": "b05183ed45071965",
  "name": "",
  "property": "payload[0].isTemplate",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "1",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 810,
  "y": 1380,
  "wires": [
    [
      "fea45ce9be48474d"
    ],
    [
      "2deba40f3537060b"
    ]
  ]
}

module.exports = Node;