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
      "3b2e68563dfd78b7"
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
	{{payload.energiartskode}},
	{{payload.typekode}},
	'{{payload.propertyName}}',
	'{{payload.controlledProperty}}'
)
`

module.exports = Node;