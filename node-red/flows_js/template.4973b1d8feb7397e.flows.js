const Node = {
  "id": "4973b1d8feb7397e",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Opdater målepunkt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 2080,
  "wires": [
    [
      "ac1f18388bc3cec6"
    ]
  ]
}

Node.template = `
UPDATE {{global.metadataTablename.maalepunkt}}
SET
	name = '{{payload.name}}',
	inputenhed = '{{payload.inputenhed}}',
	enhed = '{{payload.enhed}}',
	pulsEnhedRatio = {{payload.pulsEnhedRatio}},
	energiartskode = {{payload.energiartskode}},
	typekode = {{payload.typekode}},
	propertyName = '{{payload.propertyName}}',
	controlledProperty = '{{payload.controlledProperty}}'

WHERE uid = {{uid}}
`

module.exports = Node;