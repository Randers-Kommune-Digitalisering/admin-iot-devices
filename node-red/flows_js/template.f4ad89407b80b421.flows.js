const Node = {
  "id": "f4ad89407b80b421",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select dataTablename  \\n med deviceUid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 2160,
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
`

module.exports = Node;