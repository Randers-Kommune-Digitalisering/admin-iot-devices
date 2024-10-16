const Node = {
  "id": "f18b889afb413ace",
  "type": "switch",
  "z": "5f6ef472b7d9e1e9",
  "name": "",
  "property": "isRetry",
  "propertyType": "msg",
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
  "x": 410,
  "y": 420,
  "wires": [
    [
      "2f94fa0c7501577a"
    ]
  ]
}

module.exports = Node;