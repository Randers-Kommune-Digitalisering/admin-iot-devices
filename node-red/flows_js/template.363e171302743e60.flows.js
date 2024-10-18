const Node = {
  "id": "363e171302743e60",
  "type": "template",
  "z": "e4e3eef16c2dc327",
  "name": "Forespørgsel ↓\\n Opret device tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 610,
  "y": 820,
  "wires": [
    [
      "a0fedf4484692fc2"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{data.tablename}} (
	observedAt TIMESTAMP NOT NULL,
	type VARCHAR(255),
	value FLOAT SIGNED,
	
	UNIQUE(observedAt, type)
);
`

module.exports = Node;