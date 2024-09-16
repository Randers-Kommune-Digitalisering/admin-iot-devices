const Node = {
  "id": "73e80c479439fb20",
  "type": "template",
  "z": "b05183ed45071965",
  "name": "Sæt os2uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1110,
  "y": 780,
  "wires": [
    [
      "b0ce8fe253460af0"
    ]
  ]
}

Node.template = `
UPDATE {{global.metadataTablename.maaler}}
SET
    os2uid = {{payload.id}}
WHERE
    deviceEui = '{{payload.deviceEUI}}'
`

module.exports = Node;