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
  "y": 1600,
  "wires": [
    [
      "b4b24c852599a3af"
    ]
  ]
}

Node.template = `
SELECT 
        *,
        DATE_FORMAT(dateCreated, '%Y-%m-%dT%H:%i:%s.000Z') as dateCreated,
        DATE_FORMAT(dateModified, '%Y-%m-%dT%H:%i:%s.000Z') as dateModified,
        DATE_FORMAT(lastExport, '%Y-%m-%dT%H:%i:%s.000Z') as lastExport

FROM {{global.metadataTablename.maalepunkt}} WHERE uid = {{uid}}
`

module.exports = Node;