const Node = {
  "id": "9766ede82941d4c1",
  "type": "switch",
  "z": "d4c4c4565d1e740c",
  "name": "is JSON?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "json",
      "vt": "json"
    },
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 720,
  "y": 100,
  "wires": [
    [
      "bab9102c9ce6a406"
    ],
    [
      "20eaf0482fc38000"
    ],
    [
      "4f4086d3fdf571db"
    ]
  ]
}

module.exports = Node;