const Node = {
  "id": "e948f5e84d5f8c72",
  "type": "template",
  "z": "330fa4345482a521",
  "name": "Forespørgsel ↓\\n Hent tidspunkt for seneste datatræk",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 860,
  "y": 340,
  "wires": [
    [
      "4a2e0b018ceede11"
    ]
  ]
}

Node.template = `
SELECT lastPull FROM sftp_metadata WHERE maalernummer = '{{deviceId}}'
`

module.exports = Node;