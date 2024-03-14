const Node = {
  "id": "e35a9f42acf9150b",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select målepunkter \\n med device Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 1580,
  "wires": [
    [
      "25a3051c6505184c"
    ]
  ]
}

Node.template = `
SELECT * FROM {{global.metadataTablename.maalepunkt}} WHERE deviceUid = {{devUid}}
`

module.exports = Node;