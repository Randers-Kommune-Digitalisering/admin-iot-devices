const Node = {
  "id": "ce15574342330690",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Indsæt måler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 840,
  "wires": [
    [
      "3410192002dc84b0"
    ]
  ]
}

Node.template = `
INSERT INTO {{global.metadataTablename.maaler}}
(
	name,
	deviceEui,
	applicationKey,
	installationsnummer,
	energiartskode,
	-- lokationUid,
	-- deviceModelUid,
	deviceProfileUid,
	payloadDecoderUid,
	isTemplate,
	templateUid
)
VALUES
(
	'{{payload.name}}',
	'{{payload.devEui}}',
	'{{payload.appKey}}',
	'{{payload.installationsnummer}}',
	{{payload.energiart}},
	-- lokationUid,
	-- deviceModelUid,
	{{payload.deviceProfile}},
	{{payload.payloadDecoder}},
	{{payload.isTemplate}},
	{{payload.templateUid}}
)
`

module.exports = Node;