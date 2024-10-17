const Node = {
  "id": "8d64672538ef77c1",
  "type": "switch",
  "z": "5f6ef472b7d9e1e9",
  "g": "b739c15631c21afd",
  "name": "",
  "property": "payload ~> $contains(\"paramiko\")",
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
  "y": 820,
  "wires": [
    [
      "85c7070f46e452ae"
    ],
    [
      "18a65811970daec3"
    ]
  ]
}

module.exports = Node;