const Node = {
  "id": "bd345cf8ed0b5e87",
  "type": "change",
  "z": "7597822579cc59c2",
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
      "cbce843d30b245db"
    ]
  ]
}

module.exports = Node;