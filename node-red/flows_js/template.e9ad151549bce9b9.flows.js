const Node = {
  "id": "e9ad151549bce9b9",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Opdater måler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 360,
  "y": 980,
  "wires": [
    [
      "4f79d6d35f916f65"
    ]
  ]
}

Node.template = `
UPDATE {{global.metadataTablename.maaler}} SET

	name = '{{payload.name}}',
	-- deviceEui,
	applicationKey = '{{payload.appKey}}',
	installationsnummer = '{{payload.installationsnummer}}',
	energiartskode = {{payload.energiart}},
	-- lokationUid,
	-- deviceModelUid,
	deviceProfileUid = {{payload.deviceProfile}},
	payloadDecoderUid = {{payload.payloadDecoder}},
	isTemplate = {{payload.isTemplate}}

WHERE uid = {{payload.uid}}
`

module.exports = Node;