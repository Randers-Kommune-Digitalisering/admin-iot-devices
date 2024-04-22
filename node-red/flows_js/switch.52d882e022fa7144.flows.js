const Node = {
  "id": "52d882e022fa7144",
  "type": "switch",
  "z": "e4e3eef16c2dc327",
  "name": "",
  "property": "payload.warningCount > 0 or error ~> $exists()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 190,
  "y": 1600,
  "wires": [
    [
      "0687486bb8dbf99f"
    ]
  ]
}

module.exports = Node;