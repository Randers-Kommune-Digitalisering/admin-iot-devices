const Node = {
  "id": "a96baed53b120e98",
  "type": "switch",
  "z": "bd0288d62c2263f6",
  "name": "Er data tom?",
  "property": "payload[0].last_observation ~> $exists()",
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
  "x": 330,
  "y": 900,
  "wires": [
    [
      "82b285953ab3800d"
    ],
    [
      "c9113d05e003bbaa"
    ]
  ]
}

module.exports = Node;