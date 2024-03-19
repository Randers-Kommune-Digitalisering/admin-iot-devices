const Node = {
  "id": "a82134f17fb3d9b5",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1030,
  "y": 480,
  "wires": [
    [
      "da17fa1b5901da1b"
    ]
  ]
}

Node.template = `
SELECT
    deviceUid,
    COUNT(*) as maalepunktCount
FROM {{global.metadataTablename.maalepunkt}}
WHERE deviceUid = 5
GROUP BY deviceUid
`

module.exports = Node;