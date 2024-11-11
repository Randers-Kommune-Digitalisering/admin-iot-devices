const Node = {
  "id": "4ffcd67740dbabde",
  "type": "switch",
  "z": "b05183ed45071965",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "id",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1050,
  "y": 780,
  "wires": [
    [
      "73e80c479439fb20"
    ],
    [
      "c8c6d2974faac629"
    ]
  ]
}

module.exports = Node;