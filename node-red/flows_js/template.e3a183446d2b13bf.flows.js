const Node = {
  "id": "e3a183446d2b13bf",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "d775d098207c37e7",
  "name": "(Metric) Målepunkt metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 240,
  "wires": [
    [
      "e4ca3479e7db996d"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{global.metadataTablename.maalepunkt}}
(
	-- Identifikator
	deviceUid MEDIUMINT,
	uid MEDIUMINT NOT NULL AUTO_INCREMENT,
	propertyName VARCHAR(255),
	
	-- NGSIv2 data
	name VARCHAR(255),
	dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	dateModified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	controlledProperty VARCHAR(255),

	-- EnergyKey
	enhed VARCHAR(255),
	inputenhed VARCHAR(255),
	pulsEnhedRatio FLOAT,
	energiartskode SMALLINT,
	typekode SMALLINT,

	-- Metadata
	lastExport TIMESTAMP,

	UNIQUE (uid)
);
`

module.exports = Node;