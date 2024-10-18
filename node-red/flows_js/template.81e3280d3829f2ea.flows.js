const Node = {
  "id": "81e3280d3829f2ea",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Find os2uid for device",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 1380,
  "wires": [
    [
      "9533a5d61d7828db"
    ]
  ]
}

Node.template = `
SELECT
    os2uid,
    isTemplate
FROM
    {{global.metadataTablename.maaler}}
WHERE
    uid = '{{uid}}'
`

module.exports = Node;