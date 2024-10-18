const Node = {
  "id": "8f0b895aa93808d0",
  "type": "switch",
  "z": "d4c4c4565d1e740c",
  "name": "error?",
  "property": "error",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 280,
  "y": 180,
  "wires": [
    [
      "904e649993f93d6e"
    ]
  ]
}

module.exports = Node;