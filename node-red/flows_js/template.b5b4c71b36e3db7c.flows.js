const Node = {
  "id": "b5b4c71b36e3db7c",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Select templateUid, \\n + tablename med Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 300,
  "y": 1740,
  "wires": [
    [
      "a99e0135916d5e38"
    ]
  ]
}

Node.template = `
SELECT
    templateUid,
    dataTablename
FROM
    {{global.metadataTablename.maaler}}
WHERE
    uid = {{deviceUid}}
`

module.exports = Node;