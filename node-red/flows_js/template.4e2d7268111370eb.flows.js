const Node = {
  "id": "4e2d7268111370eb",
  "type": "template",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "Indsæt dekodere",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 670,
  "y": 2060,
  "wires": [
    [
      "cf4ec607dd684811"
    ]
  ]
}

Node.template = `
INSERT INTO {{global.metadataTablename.decoder}}
    (os2uid, name)
VALUES {{{values}}}
`

module.exports = Node;