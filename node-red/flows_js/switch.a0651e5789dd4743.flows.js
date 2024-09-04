const Node = {
  "id": "a0651e5789dd4743",
  "type": "switch",
  "z": "31eb0ab05cfa21a8",
  "name": "",
  "property": "payload ~> $type() = \"array\" and payload[0] ~> $type() = \"array\"",
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
  "x": 390,
  "y": 860,
  "wires": [
    [
      "d0b433a2fe203b93"
    ],
    [
      "083f7fb7b700f407"
    ]
  ]
}

module.exports = Node;