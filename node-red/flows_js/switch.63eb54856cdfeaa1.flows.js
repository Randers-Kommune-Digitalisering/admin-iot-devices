const Node = {
  "id": "63eb54856cdfeaa1",
  "type": "switch",
  "z": "e4e3eef16c2dc327",
  "name": "Findes en \\n observation?",
  "property": "payload[0].lastObservation = null or payload[0].lastObservation = \"0000-00-00 00:00:00\"",
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
  "x": 310,
  "y": 840,
  "wires": [
    [
      "363e171302743e60"
    ],
    [
      "c6c29db29af23505"
    ]
  ]
}

module.exports = Node;