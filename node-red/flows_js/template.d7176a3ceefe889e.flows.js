const Node = {
  "id": "d7176a3ceefe889e",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Hent fejlede forespørgesler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 420,
  "wires": [
    [
      "2ddd12f83c47ab69"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    {{global.metadataTablename.os2status}}
WHERE
    requestSuccessful = 0
AND requestCount > 0
`

module.exports = Node;