const Node = {
  "id": "6cab6417bf96f118",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "WHERE clause",
  "rules": [
    {
      "t": "set",
      "p": "whereClause",
      "pt": "msg",
      "to": "measurementPoints.uid @ $uid . ( 'uid = ' &  $uid ) ~> $join(\" OR \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 560,
  "wires": [
    [
      "82148cda2067c173"
    ]
  ]
}

module.exports = Node;