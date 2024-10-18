const Node = {
  "id": "03585dfbd4fbb1be",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Slet målepunkt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 2200,
  "wires": [
    [
      "23dceeced2e50374"
    ]
  ]
}

Node.template = `
DELETE FROM {{global.metadataTablename.maalepunkt}}
WHERE uid = {{uid}}
`

module.exports = Node;