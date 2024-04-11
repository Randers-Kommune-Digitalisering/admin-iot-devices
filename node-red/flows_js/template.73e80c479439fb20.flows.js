const Node = {
  "id": "73e80c479439fb20",
  "type": "template",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Sæt os2uid",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1670,
  "y": 440,
  "wires": [
    [
      "b0ce8fe253460af0"
    ]
  ]
}

Node.template = `
UPDATE {{global.metadataTablename.maaler}}
SET
    os2uid = {{response.id}}
WHERE
    deviceEui = '{{response.deviceEUI}}'
`

module.exports = Node;