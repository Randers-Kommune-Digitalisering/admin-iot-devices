const Node = {
  "id": "721b18d47ddce8de",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "export",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "error ~> $exists() ? 'error' : 'success'",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 540,
  "wires": [
    [
      "8b2829375a60eea6"
    ]
  ]
}

module.exports = Node;