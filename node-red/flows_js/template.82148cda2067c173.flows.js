const Node = {
  "id": "82148cda2067c173",
  "type": "template",
  "z": "5f6ef472b7d9e1e9",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 360,
  "y": 460,
  "wires": [
    [
      "bd4d6c6d9994893f"
    ]
  ]
}

Node.template = `
UPDATE
    {{global.metadataTablename.maalepunkt}}
SET
    lastExport = CURRENT_TIMESTAMP
WHERE 
    lastImport > lastExport
`

module.exports = Node;