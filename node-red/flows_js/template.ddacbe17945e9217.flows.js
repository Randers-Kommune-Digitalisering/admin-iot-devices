const Node = {
  "id": "ddacbe17945e9217",
  "type": "template",
  "z": "dc028cb1b3d1491a",
  "d": true,
  "name": "Forespørgsel ↓\\n Hent tidspunkt for seneste datatræk",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 820,
  "y": 1020,
  "wires": [
    [
      "82a05e8c2dcee7f3"
    ]
  ]
}

Node.template = `
SELECT lastPull FROM sftp_metadata WHERE maalernummer = '{{deviceUid}}'
`

module.exports = Node;