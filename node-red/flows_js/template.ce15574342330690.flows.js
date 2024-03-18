const Node = {
  "id": "ce15574342330690",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Indsæt måler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 860,
  "wires": [
    [
      "aaa270f856dad07c"
    ]
  ]
}

Node.template = `
INSERT INTO {{global.metadataTablename.maaler}}
(
	name,
	deviceEui,
	applicationKey,
	-- installationsnummer,
	energiartskode,
	-- lokationUid,
	-- deviceProfileUid,
	serviceProfileUid,
	payloadDecoderUid,
	isTemplate,
	defaultValuesTemplateUid
)
VALUES
(
	'{{payload.name}}',
	'{{payload.devEui}}',
	'{{payload.appKey}}',
	-- installationsnummer,
	{{payload.energiart}},
	-- lokationUid,
	-- deviceProfileUid,
	{{payload.serviceProfile}},
	{{payload.payloadDecoder}},
	{{payload.isTemplate}},
	{{payload.templateUid}}
)
`

module.exports = Node;