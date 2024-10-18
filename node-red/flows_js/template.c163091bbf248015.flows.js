const Node = {
  "id": "c163091bbf248015",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "d775d098207c37e7",
  "name": " (ServiceProfiles) Device profiler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 320,
  "wires": [
    [
      "e4ca3479e7db996d"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{global.metadataTablename.deviceprofile}}
(
	uid MEDIUMINT NOT NULL AUTO_INCREMENT,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	lastUpdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	name VARCHAR(255),
	os2uid VARCHAR(255),

	UNIQUE (uid)
);
`

module.exports = Node;