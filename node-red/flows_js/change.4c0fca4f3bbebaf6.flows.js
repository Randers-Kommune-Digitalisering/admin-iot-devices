const Node = {
  "id": "4c0fca4f3bbebaf6",
  "type": "change",
  "z": "7459f772194dcf44",
  "g": "f5b369166b3bae03",
  "name": "Set metric db_read",
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
  "y": 440,
  "wires": [
    [
      "14cf0b2c0601eb64"
    ]
  ]
}

module.exports = Node;