const Node = {
  "id": "d7176a3ceefe889e",
  "type": "template",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Hent fejlede forespørgesler",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 360,
  "wires": [
    [
      "b9f56a07ded276a5"
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
AND requestCount < 3
ORDER BY uid ASC
`

module.exports = Node;