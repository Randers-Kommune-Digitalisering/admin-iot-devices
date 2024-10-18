const Node = {
  "id": "64b6433bef24052d",
  "type": "change",
  "z": "7459f772194dcf44",
  "g": "f5b369166b3bae03",
  "name": "Set metric db_write_rows",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.affectedRows",
      "tot": "jsonata"
    },
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
  "x": 550,
  "y": 400,
  "wires": [
    [
      "64eb2c9357e5450f"
    ]
  ]
}

module.exports = Node;