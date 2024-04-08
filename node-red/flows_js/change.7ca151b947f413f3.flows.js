const Node = {
  "id": "7ca151b947f413f3",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "8f0c1f26ead23f64",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "headers.x-api-key",
      "pt": "msg",
      "to": "OS2_API_KEY",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "headers.accept",
      "pt": "msg",
      "to": "application/json",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 2020,
  "wires": [
    [
      "7327db05440c531d"
    ]
  ]
}

module.exports = Node;