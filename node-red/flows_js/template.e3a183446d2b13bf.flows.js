const Node = {
  "id": "e3a183446d2b13bf",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "(Metric) Målepunkt metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 320,
  "y": 240,
  "wires": [
    [
      "32c7a57618f2acb5"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{global.metadataTablename.maalepunkt}}
(
	deviceUid MEDIUMINT,

	uid MEDIUMINT NOT NULL AUTO_INCREMENT,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	lastUpdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	navn VARCHAR(255),
	enhed VARCHAR(255),
	energiartskode SMALLINT,
	typekode SMALLINT,

	valuekey VARCHAR(255),

	inputenhed VARCHAR(255),
	operator VARCHAR(255),
	operationvalue SMALLINT,

	isTemplate BOOL DEFAULT false,
	defaultValuesTemplateUid MEDIUMINT,

	UNIQUE (uid)
);
`

module.exports = Node;