const Node = {
  "id": "7fc0a594bd9390cd",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Find uid for device profil",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 930,
  "y": 700,
  "wires": [
    [
      "452917dcbfea2be6"
    ]
  ]
}

Node.template = `
SELECT
    os2uid
FROM
    {{global.metadataTablename.deviceprofile}}
WHERE
    uid = {{data.deviceProfile}}
`

module.exports = Node;