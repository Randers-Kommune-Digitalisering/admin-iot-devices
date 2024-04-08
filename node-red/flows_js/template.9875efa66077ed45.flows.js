const Node = {
  "id": "9875efa66077ed45",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "c73500befce19fee",
  "name": "Select målepunkter \\n med device Uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 950,
  "y": 1620,
  "wires": [
    [
      "25a3051c6505184c"
    ]
  ]
}

Node.template = `
SELECT
    t1.*,
    t2.dataTablename
FROM {{global.metadataTablename.maalepunkt}} as t1

LEFT JOIN 
    {{global.metadataTablename.maaler}} as t2
    ON t1.deviceUid = t2.uid

WHERE {{{whereClause}}}
`

module.exports = Node;