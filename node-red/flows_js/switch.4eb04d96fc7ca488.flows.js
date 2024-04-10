const Node = {
  "id": "4eb04d96fc7ca488",
  "type": "switch",
  "z": "dc028cb1b3d1491a",
  "name": "",
  "property": "requestBody.isTemplate",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "jsonata"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1230,
  "y": 340,
  "wires": [
    [
      "7e1f6bb795a1f7d2"
    ]
  ]
}

module.exports = Node;