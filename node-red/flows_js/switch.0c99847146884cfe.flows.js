const Node = {
  "id": "0c99847146884cfe",
  "type": "switch",
  "z": "bd0288d62c2263f6",
  "name": "Kontrollér om modtaget data \\n er nyere end gemt data",
  "property": "payload[0].lastObservation ~> $toMillis()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gte",
      "v": "\t\t(data.observedAt ~> $split(\".\"))[0] ~> $toMillis",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 620,
  "y": 960,
  "wires": [
    [
      "4fa46a20e880ebb4"
    ],
    [
      "98bd22c757d8b79e"
    ]
  ]
}

module.exports = Node;