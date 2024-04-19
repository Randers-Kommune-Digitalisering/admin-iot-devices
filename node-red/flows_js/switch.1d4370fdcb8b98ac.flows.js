const Node = {
  "id": "1d4370fdcb8b98ac",
  "type": "switch",
  "z": "e4e3eef16c2dc327",
  "name": "Findes måler?",
  "property": "payload ~> $count() > 0",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 320,
  "y": 720,
  "wires": [
    [
      "d296db9df324bffc"
    ],
    [
      "63eb54856cdfeaa1"
    ]
  ]
}

module.exports = Node;