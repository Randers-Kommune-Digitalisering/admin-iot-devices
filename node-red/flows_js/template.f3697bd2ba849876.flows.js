const Node = {
  "id": "f3697bd2ba849876",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Alter query",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1290,
  "y": 260,
  "wires": [
    [
      "a5240416095115c4"
    ]
  ]
}

Node.template = `
ALTER TABLE {{global.metadataTablename.maalepunkt}}
ADD pulsEnhedRatio FLOAT;
`

module.exports = Node;