const Node = {
  "id": "cb62915abe36898f",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "name": "Select device \\n med devEui",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 270,
  "y": 500,
  "wires": [
    [
      "00152d6dbca958e1"
    ]
  ]
}

Node.template = `
SELECT * FROM {{flow.maaler_metadata_tablename}} WHERE deviceEui = '{{devEui}}'
`

module.exports = Node;