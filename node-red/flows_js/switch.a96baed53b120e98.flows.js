const Node = {
  "id": "a96baed53b120e98",
  "type": "switch",
  "z": "bd0288d62c2263f6",
  "name": "Findes en \\n observation?",
  "property": "payload[0].lastObservation = \"0000-00-00 00:00:00\"",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 330,
  "y": 780,
  "wires": [
    [
      "0cfb9646d9305e06"
    ],
    [
      "0c99847146884cfe"
    ]
  ]
}

module.exports = Node;