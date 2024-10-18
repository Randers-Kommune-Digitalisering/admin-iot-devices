const Node = {
  "id": "6c0fda8e720a9a4d",
  "type": "template",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "Slet dekodere",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 660,
  "y": 2400,
  "wires": [
    [
      "be470d2fbca9f6cd"
    ]
  ]
}

Node.template = `
DELETE FROM {{global.metadataTablename.decoder}}
WHERE {{{values}}}
`

module.exports = Node;