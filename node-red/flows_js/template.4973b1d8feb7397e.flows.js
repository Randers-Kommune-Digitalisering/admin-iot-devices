const Node = {
  "id": "4973b1d8feb7397e",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Opdater målepunkt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 2120,
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
	energiartskode = {{payload.energiartskode}},
	typekode = {{payload.typekode}},
	propertyName = '{{payload.propertyName}}',
	operator = '{{payload.operator}}',
	operationvalue = {{payload.operationvalue}}

WHERE uid = {{payload.uid}}
`

module.exports = Node;