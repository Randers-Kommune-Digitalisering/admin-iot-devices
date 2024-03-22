const Node = {
  "id": "fe7afd00b3a6a111",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "d775d098207c37e7",
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
  ],
  "info": ""
}

Node.info = `
Device data model: https://github.com/smart-data-models/dataModel.Device/blob/master/Device/doc/spec.md

DeviceMeasurement data model: https://github.com/smart-data-models/dataModel.Device/blob/master/DeviceMeasurement/doc/spec.md
`

Node.template = `
CREATE TABLE if not exists {{global.metadataTablename.maaler}}
(
	-- Identifikator
	uid MEDIUMINT NOT NULL AUTO_INCREMENT,
	deviceEui VARCHAR(255),
	applicationKey VARCHAR(255),

	-- NGSIv2 data
	name VARCHAR(255),
	type VARCHAR(255) DEFAULT 'Device',
	deviceCategory VARCHAR(255) DEFAULT 'Meter',
	dateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	dateFirstUsed TIMESTAMP,
	dateModified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	supportedProtocol VARCHAR(255) DEFAULT 'lora',
	rssi SMALLINT,
	batteryLevel SMALLINT,

	-- EnergyKey
	installationsnummer VARCHAR(255),
	energiartskode SMALLINT,

	-- OS2 konfiguration
	deviceProfileUid SMALLINT,
	serviceProfileUid SMALLINT,
	payloadDecoderUid SMALLINT,

	-- Metadata
	isTemplate BOOL DEFAULT false,
	templateUid MEDIUMINT NOT NULL DEFAULT -1,
	dataTablename VARCHAR(255),
	lastObservation TIMESTAMP,

	UNIQUE (uid, deviceEui)
);
`

module.exports = Node;