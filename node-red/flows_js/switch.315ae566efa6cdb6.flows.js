const Node = {
  "id": "315ae566efa6cdb6",
  "type": "switch",
  "z": "e4e3eef16c2dc327",
  "name": "Kontrollér om modtaget data \\n er nyere end gemt data",
  "property": "payload",
  "propertyType": "msg",
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
  "x": 600,
  "y": 1020,
  "wires": [
    [
      "e592386ce36f8489"
    ],
    [
      "a75d5e45a6f4edc0"
    ]
  ]
}

module.exports = Node;