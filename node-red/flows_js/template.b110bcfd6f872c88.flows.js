const Node = {
  "id": "b110bcfd6f872c88",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Select målepunkt \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 1480,
  "wires": [
    [
      "bf92874dd34afe65"
    ]
  ]
}

Node.template = `
SELECT * FROM {{global.metadataTablename.maalepunkt}} WHERE uid = {{uid}}
`

module.exports = Node;