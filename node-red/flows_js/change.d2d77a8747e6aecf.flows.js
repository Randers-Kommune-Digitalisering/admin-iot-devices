const Node = {
  "id": "d2d77a8747e6aecf",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "set templateName",
  "rules": [
    {
      "t": "set",
      "p": "requestBody",
      "pt": "msg",
      "to": "requestBody ~> | $ | {\t    \"templateName\": $$.payload[0].name\t} |",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "response",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1710,
  "y": 840,
  "wires": [
    [
      "78d77be38d59d605",
      "f4fe574b19518461"
    ]
  ]
}

module.exports = Node;