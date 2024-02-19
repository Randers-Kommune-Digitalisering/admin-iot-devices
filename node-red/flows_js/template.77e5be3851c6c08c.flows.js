const Node = {
  "id": "77e5be3851c6c08c",
  "type": "template",
  "z": "5f6ef472b7d9e1e9",
  "name": "Forespørgsel ↓\\n Opret metadata tabel for datatræk",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 640,
  "y": 200,
  "wires": [
    [
      "f3dbf1e29d58feeb"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{flow.metadata_tablename}} (
	maalernummer VARCHAR(255),
	lastPull TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE (maalernummer)
);
`

module.exports = Node;