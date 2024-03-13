const Node = {
  "id": "82b285953ab3800d",
  "type": "template",
  "z": "bd0288d62c2263f6",
  "name": "Forespørgsel ↓\\n Opret række til sensor \\n i metadata tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 600,
  "y": 900,
  "wires": [
    [
      "64fafe9bb267ed7e"
    ]
  ]
}

Node.template = `
INSERT INTO {{flow.metadata_tablename}}
(uid, tablename, sensor_type, sensor_location)
VALUES
('{{data.id}}', '{{data.tablename}}', '{{data.type}}', '{{data.location.value.coordinates}}');
`

module.exports = Node;