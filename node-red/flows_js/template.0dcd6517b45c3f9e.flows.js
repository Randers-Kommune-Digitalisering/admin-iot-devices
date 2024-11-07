const Node = {
  "id": "0dcd6517b45c3f9e",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Opdater lastExport",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 2300,
  "wires": [
    [
      "2f0ca49f5ec98433"
    ]
  ]
}

Node.template = `
UPDATE
    {{global.metadataTablename.maalepunkt}}
SET
	lastExport = NOW()

WHERE uid = {{uid}}
`

module.exports = Node;