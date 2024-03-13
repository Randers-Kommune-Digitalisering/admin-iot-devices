const Node = {
  "id": "3067ddb371b5d11b",
  "type": "switch",
  "z": "bd0288d62c2263f6",
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
  "x": 340,
  "y": 660,
  "wires": [
    [
      "0e678bf293d6a90f"
    ],
    [
      "a96baed53b120e98"
    ]
  ]
}

module.exports = Node;