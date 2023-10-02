const Node = {
  "id": "2091210dd279104f",
  "type": "template",
  "z": "6f89a22d2f227f45",
  "name": "Forespørgsel ↓\\n Opret sensor tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 770,
  "y": 1040,
  "wires": [
    [
      "602c12adec3b2983"
    ]
  ],
  "_order": 32
}

Node.template = `
CREATE TABLE if not exists {{data.tablename}} (
	observedAt TIMESTAMP NOT NULL,
	type VARCHAR(255),
	value FLOAT SIGNED
	);
`

module.exports = Node;