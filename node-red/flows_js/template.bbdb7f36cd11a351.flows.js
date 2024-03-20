const Node = {
  "id": "bbdb7f36cd11a351",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Indsæt målepunkt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 2000,
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
	valuekey,
	operator,
	operationvalue
)
VALUES
(
	{{payload.devUid}},
	'{{payload.name}}',
	'{{payload.inputenhed}}',
	'{{payload.enhed}}',
	{{payload.energiartskode}},
	{{payload.typekode}},
	'{{payload.valuekey}}',
	'{{payload.operator}}',
	{{payload.operationvalue}}
)
`

module.exports = Node;