const Node = {
  "id": "79b279c3ac457849",
  "type": "change",
  "z": "fa50bce83191652b",
  "name": "Set payload & \\n productType",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data.data",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "productType",
      "pt": "msg",
      "to": "data.productType",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 80,
  "wires": [
    [
      "bc5a3e212428f412"
    ]
  ]
}

module.exports = Node;