const Node = {
  "id": "cfdb80d24ea7f4ba",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "d775d098207c37e7",
  "name": " (OS2Request) Requests status",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 330,
  "y": 400,
  "wires": [
    [
      "32c7a57618f2acb5"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{global.metadataTablename.os2status}}
(
	uid MEDIUMINT NOT NULL AUTO_INCREMENT,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	lastUpdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	url VARCHAR(255),
	requestBody VARCHAR(255),

	lastRequest TIMESTAMP,
	requestCount SMALLINT DEFAULT 0,
	requestSuccessful BOOL DEFAULT false,
	
	UNIQUE (uid)
);
`

module.exports = Node;