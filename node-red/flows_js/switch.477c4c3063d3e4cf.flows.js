const Node = {
  "id": "477c4c3063d3e4cf",
  "type": "switch",
  "z": "5f6ef472b7d9e1e9",
  "name": "",
  "property": "error.message",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "Error: read ECONNRESET",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 530,
  "y": 640,
  "wires": [
    [
      "217985ec45797087"
    ]
  ]
}

module.exports = Node;