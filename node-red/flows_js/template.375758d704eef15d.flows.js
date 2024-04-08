const Node = {
  "id": "375758d704eef15d",
  "type": "template",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Opdater request",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1220,
  "y": 380,
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