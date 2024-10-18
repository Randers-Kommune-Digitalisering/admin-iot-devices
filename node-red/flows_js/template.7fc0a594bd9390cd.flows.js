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
  "x": 890,
  "y": 700,
  "wires": [
    [
      "d7feb7f385e588cf"
    ]
  ]
}

Node.template = `
SELECT
    os2uid as deviceProfileUid
FROM
    {{global.metadataTablename.deviceprofile}}
WHERE
    uid = {{data.deviceProfile}}
`

module.exports = Node;