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
  "x": 750,
  "y": 1740,
  "wires": [
    [
      "25a3051c6505184c"
    ]
  ]
}

Node.template = `
SELECT
    t1.*
FROM {{global.metadataTablename.maalepunkt}} as t1

WHERE {{{whereClause}}}

ORDER BY 
    name
`

module.exports = Node;