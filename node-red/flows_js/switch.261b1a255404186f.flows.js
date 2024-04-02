const Node = {
  "id": "261b1a255404186f",
  "type": "switch",
  "z": "dc028cb1b3d1491a",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 970,
  "y": 1280,
  "wires": [
    [
      "62e714530eb3b4af"
    ],
    [
      "1eb80abe600d5169"
    ]
  ]
}

module.exports = Node;