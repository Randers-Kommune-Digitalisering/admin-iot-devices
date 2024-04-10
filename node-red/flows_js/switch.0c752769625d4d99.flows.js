const Node = {
  "id": "0c752769625d4d99",
  "type": "switch",
  "z": "5f6ef472b7d9e1e9",
  "name": "Success?",
  "property": "payload.filename = undefined",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 180,
  "y": 500,
  "wires": [
    [
      "82148cda2067c173"
    ]
  ]
}

module.exports = Node;