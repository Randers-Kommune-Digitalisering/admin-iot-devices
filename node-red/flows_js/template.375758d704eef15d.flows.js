const Node = {
  "id": "375758d704eef15d",
  "type": "template",
  "z": "b05183ed45071965",
  "g": "86f9a4f3efc9aad9",
  "name": "Opdater request",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1120,
  "y": 500,
  "wires": [
    [
      "5033eaeb7f40c09c"
    ]
  ]
}

Node.template = `
UPDATE
    {{global.metadataTablename.os2status}}
SET
    requestCount = {{requestCount}},
    requestSuccessful = {{requestSuccessful}},
    lastRequest = CURRENT_TIMESTAMP
WHERE uid = {{insertId}}
`

module.exports = Node;