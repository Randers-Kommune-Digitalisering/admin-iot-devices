const Node = {
  "id": "2fce0755afa7ccd9",
  "type": "switch",
  "z": "7459f772194dcf44",
  "g": "f5b369166b3bae03",
  "name": "",
  "property": "sql ~> $contains(\"SELECT\")",
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
  "y": 440,
  "wires": [
    [
      "4c0fca4f3bbebaf6"
    ]
  ]
}

module.exports = Node;