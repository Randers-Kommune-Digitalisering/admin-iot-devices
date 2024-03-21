const Node = {
  "id": "e9ad151549bce9b9",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Opdater måler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 280,
  "y": 960,
  "wires": [
    [
      "24eef3f14c107709"
    ]
  ]
}

Node.template = `
UPDATE {{global.metadataTablename.maaler}} SET

	name = '{{payload.name}}',
	-- deviceEui,
	applicationKey = '{{payload.appKey}}',
	-- installationsnummer,
	energiartskode = {{payload.energiart}},
	-- lokationUid,
	-- deviceProfileUid,
	serviceProfileUid = {{payload.serviceProfile}},
	payloadDecoderUid = {{payload.payloadDecoder}},
	isTemplate = {{payload.isTemplate}}

WHERE uid = {{payload.uid}}
`

module.exports = Node;