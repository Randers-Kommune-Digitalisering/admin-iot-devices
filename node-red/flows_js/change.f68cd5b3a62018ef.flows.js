const Node = {
  "id": "f68cd5b3a62018ef",
  "type": "change",
  "z": "7459f772194dcf44",
  "g": "f5b369166b3bae03",
  "name": "Set metric db_write",
  "rules": [
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "error ~> $exists() ? \"error\" : \"success\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "table_name",
      "pt": "msg",
      "to": "tablename ~> $exists() ? tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 360,
  "wires": [
    [
      "85e5e3756d66c633"
    ]
  ]
}

module.exports = Node;