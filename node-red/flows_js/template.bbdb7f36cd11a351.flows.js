const Node = {
  "id": "bbdb7f36cd11a351",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Indsæt målepunkt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 1960,
  "wires": [
    [
      "5e298ae09b21124a"
    ]
  ]
}

Node.template = `
INSERT INTO {{global.metadataTablename.maalepunkt}}
(
	deviceUid,
	name,
	inputenhed,
	enhed,
	pulsEnhedRatio,
	energiartskode,
	typekode,
	propertyName,
	controlledProperty
)
VALUES
(
	{{payload.deviceUid}},
	'{{payload.name}}',
	'{{payload.inputenhed}}',
	'{{payload.enhed}}',
	{{payload.pulsEnhedRatio}},
	{{payload.energiartskode}},
	{{payload.typekode}},
	'{{payload.propertyName}}',
	'{{payload.controlledProperty}}'
)
`

module.exports = Node;