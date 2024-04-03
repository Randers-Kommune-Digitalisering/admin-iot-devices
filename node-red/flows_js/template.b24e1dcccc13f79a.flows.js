const Node = {
  "id": "b24e1dcccc13f79a",
  "type": "template",
  "z": "6f89a22d2f227f45",
  "name": "Forespørgsel ↓\\n Opret metadata tabel hvis der ikke \\n eksisterer en i forvejen ",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 300,
  "y": 360,
  "wires": [
    [
      "4fc1573122f5e977"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{flow.metadata_tablename}} (
	uid VARCHAR(255) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	tablename VARCHAR(255),
	device_type VARCHAR(255),
	device_location VARCHAR(255),
	last_observation TIMESTAMP,
	UNIQUE (uid)
	);
`

module.exports = Node;