const Node = {
  "id": "375758d704eef15d",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Opdater request",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1240,
  "y": 260,
  "wires": [
    [
      "031bdb18f225e052"
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