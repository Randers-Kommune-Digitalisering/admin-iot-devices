const Node = {
  "id": "d3d6553ead498af3",
  "type": "template",
  "z": "b1af099441f07c56",
  "name": "Forespørgsel ↓\\n Opret metadata tabel for måler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 990,
  "y": 280,
  "wires": [
    [
      "4b04184ba3902566"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{flow.maaler_metadata_tablename}} (
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	navn VARCHAR(255),
	installationsnummer VARCHAR(255),
	nummer VARCHAR(255),
	energiartskode INT,
	UNIQUE (nummer)
);
`

module.exports = Node;