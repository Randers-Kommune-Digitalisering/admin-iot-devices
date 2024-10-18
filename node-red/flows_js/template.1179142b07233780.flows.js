const Node = {
  "id": "1179142b07233780",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "d": true,
  "g": "d775d098207c37e7",
  "name": " (Location) Lokation metadata",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 280,
  "wires": [
    [
      "e4ca3479e7db996d"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{global.metadataTablename.lokation}}
(
	uid MEDIUMINT NOT NULL AUTO_INCREMENT,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	lastUpdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	postnr VARCHAR(255),
	adresse VARCHAR(255),
	bygning VARCHAR(255),
	lokale VARCHAR(255),
	note VARCHAR(255),

	isTemplate BOOL DEFAULT false,
	templateUid MEDIUMINT,

	UNIQUE (uid)
);
`

module.exports = Node;