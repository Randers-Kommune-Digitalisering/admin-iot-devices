const Node = {
  "id": "86cdf7cc0703ed96",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "Slet målepunkter",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 190,
  "y": 1100,
  "wires": [
    [
      "0116566a9fd0bb99"
    ]
  ]
}

Node.template = `
DELETE FROM
    {{global.metadataTablename.maalepunkt}}
WHERE
    deviceUid = {{uid}}
`

module.exports = Node;