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
  "x": 560,
  "y": 1500,
  "wires": [
    [
      "8bd564237826c627"
    ]
  ]
}

Node.template = `
SELECT
    os2uid
FROM
    {{global.metadataTablename.maaler}}
WHERE
    deviceEui = '{{data.devEui}}'
`

module.exports = Node;