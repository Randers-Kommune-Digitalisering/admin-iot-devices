const Node = {
  "id": "509195e317ea764b",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Slet måler",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1180,
  "y": 1100,
  "wires": [
    [
      "c37deddaa1c08606"
    ]
  ]
}

Node.template = `
DELETE FROM
    {{global.metadataTablename.maaler}}
WHERE
    uid = {{uid}}
`

module.exports = Node;