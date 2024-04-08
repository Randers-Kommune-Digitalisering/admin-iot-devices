const Node = {
  "id": "4c8032bd0e7aac18",
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
  "y": 860,
  "wires": [
    [
      "8ade3c89dcbd11aa"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    {{global.metadataTablename.maaler}}
WHERE
    deviceEui = '{{data.devEui}}'
`

module.exports = Node;