const Node = {
  "id": "0cfb9646d9305e06",
  "type": "template",
  "z": "bd0288d62c2263f6",
  "name": "Forespørgsel ↓\\n Opret device tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 630,
  "y": 760,
  "wires": [
    [
      "cb315eff1b31ee25"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{data.tablename}} (
	observedAt TIMESTAMP NOT NULL,
	type VARCHAR(255),
	value FLOAT SIGNED,
	
	UNIQUE(type, value)
);
`

module.exports = Node;