const Node = {
  "id": "b92bfd9513669a1b",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "measurementPointUids",
  "rules": [
    {
      "t": "set",
      "p": "measurementPointUids",
      "pt": "flow",
      "to": "$flowContext(\"measurementPointUids\") ~> $append(measurementPoints.uid)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 250,
  "y": 860,
  "wires": [
    [
      "6c319c813ef0163d"
    ]
  ]
}

module.exports = Node;