const Node = {
  "id": "f41030b5a6b74a74",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "d": true,
  "name": "Select os2uid",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 1060,
  "wires": [
    [
      "025a04762ecda90c"
    ]
  ]
}

Node.template = `
SELECT
    os2uid
FROM
    {{global.metadataTablename.maaler}}
WHERE
    uid = {{uid}}
`

module.exports = Node;