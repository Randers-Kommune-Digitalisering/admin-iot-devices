const Node = {
  "id": "f4ad89407b80b421",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "d3309108f1a755b6",
  "name": "Select dataTablename  \\n med deviceUid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 2380,
  "wires": [
    [
      "13d1421b56d97636"
    ]
  ]
}

Node.template = `
SELECT DISTINCT
    dataTablename
FROM {{global.metadataTablename.maaler}}
WHERE
    uid = '{{deviceUid}}'
OR templateUid = '{{deviceUid}}'
`

module.exports = Node;