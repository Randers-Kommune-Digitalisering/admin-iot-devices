const Node = {
  "id": "ec2eb72dd40b96e7",
  "type": "template",
  "z": "6f89a22d2f227f45",
  "name": "Forespørgsel ↓\\n Opret række til device \\n i metadata tabel",
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
      "2f23dc597a08df05"
    ]
  ]
}

Node.template = `
INSERT INTO {{flow.metadata_tablename}}
(uid, tablename, device_type, device_location)
VALUES
('{{data.id}}', '{{data.tablename}}', '{{data.type}}', '{{data.location.value.coordinates}}');
`

module.exports = Node;