const Node = {
  "id": "8f32174591048747",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select template",
  "field": "payload",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 980,
  "y": 520,
  "wires": [
    [
      "03479a37810184ed"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE devEui = {{deviceEui}}
`

module.exports = Node;