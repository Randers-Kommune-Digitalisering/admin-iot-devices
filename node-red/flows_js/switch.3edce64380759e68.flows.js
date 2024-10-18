const Node = {
  "id": "3edce64380759e68",
  "type": "switch",
  "z": "7459f772194dcf44",
  "g": "f5b369166b3bae03",
  "name": "",
  "property": "(sql ~> $contains(\"INSERT\")) or (sql ~> $contains(\"UPDATE\"))",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 330,
  "y": 380,
  "wires": [
    [
      "f68cd5b3a62018ef",
      "64b6433bef24052d"
    ]
  ]
}

module.exports = Node;