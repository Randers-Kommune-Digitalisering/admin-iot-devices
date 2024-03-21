const Node = {
  "id": "b5b4c71b36e3db7c",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select templateUid \\n med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 290,
  "y": 1720,
  "wires": [
    [
      "632112509aa1a1b2"
    ]
  ]
}

Node.template = `
SELECT templateUid as templateUid FROM {{global.metadataTablename.maaler}} WHERE uid = {{deviceUid}}
`

module.exports = Node;