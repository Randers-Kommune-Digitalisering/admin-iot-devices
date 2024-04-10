const Node = {
  "id": "54136ebfcd1746c7",
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
  "y": 460,
  "wires": [
    [
      "ca3559c638357fa9"
    ]
  ]
}

module.exports = Node;