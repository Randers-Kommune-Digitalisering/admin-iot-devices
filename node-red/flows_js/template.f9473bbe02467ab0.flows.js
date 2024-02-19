const Node = {
  "id": "f9473bbe02467ab0",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Opret metadata tabel for målepunkter",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1010,
  "y": 340,
  "wires": [
    [
      "806124c19a5a4e5a"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{flow.maalepunkt_metadata_tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	maalernummer VARCHAR(255),
	titel VARCHAR(255),
	datakey VARCHAR(255),
	type VARCHAR(255),
	energiartskode INT,
	typekode INT
);
`

module.exports = Node;