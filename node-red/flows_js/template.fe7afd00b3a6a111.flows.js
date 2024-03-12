const Node = {
  "id": "fe7afd00b3a6a111",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "(Device) Måler metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 310,
  "y": 200,
  "wires": [
    [
      "32c7a57618f2acb5"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{flow.maaler_metadata_tablename}}
(
	uid MEDIUMINT NOT NULL AUTO_INCREMENT,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	name VARCHAR(255),
	deviceEui VARCHAR(255),
	applicationKey VARCHAR(255),
	installationsnummer VARCHAR(255),
	energiartskode SMALLINT,

	lokationUid SMALLINT,

	deviceProfileUid SMALLINT,
	serviceProfileUid SMALLINT,
	payloadDecoderUid SMALLINT,

	isTemplate BOOL DEFAULT false,
	defaultValuesTemplateUid MEDIUMINT,

	lastObservation TIMESTAMP,
	dataTablename VARCHAR(255)

	UNIQUE (uid, deviceEui)
);
`

module.exports = Node;