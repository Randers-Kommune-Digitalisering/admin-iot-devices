const Node = {
  "id": "c163091bbf248015",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": " (ServiceProfiles) Service profiler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 330,
  "y": 320,
  "wires": [
    [
      "32c7a57618f2acb5"
    ]
  ]
}

Node.template = `
CREATE TABLE if not exists {{flow.serviceprofile_metadata_tablename}}
(
	uid MEDIUMINT NOT NULL AUTO_INCREMENT,
	created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

	os2uid VARCHAR(255),

	UNIQUE (uid)
);
`

module.exports = Node;