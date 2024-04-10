const Node = {
  "id": "e8b10291b2fa1081",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Find uid for device profil",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1210,
  "y": 1120,
  "wires": [
    [
      "c9fb95c708824d37"
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