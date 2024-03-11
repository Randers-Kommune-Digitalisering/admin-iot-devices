const Node = {
  "id": "7c48786f17665ce7",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "d": true,
  "name": " (History) Historik data",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 300,
  "y": 200,
  "wires": [
    []
  ]
}

Node.template = `
CREATE TABLE if not exists {{flow.lokation_metadata_tablename}}
(
	uid INT NOT NULL AUTO_INCREMENT,
	changed TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	
	editor VARCHAR(255),

	editedTable VARCHAR(255),
	editedUid MEDIUMINT NOT NULL,

	
	isTemplate BOOL DEFAULT false,
	defaultValuesTemplateUid MEDIUMINT,

	UNIQUE (uid)
);
`

module.exports = Node;