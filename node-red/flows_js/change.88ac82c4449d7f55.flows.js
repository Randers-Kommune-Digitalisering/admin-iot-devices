const Node = {
  "id": "88ac82c4449d7f55",
  "type": "change",
  "z": "bd0288d62c2263f6",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "OK",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1000,
  "y": 120,
  "wires": [
    [
      "70b8108e5c594366"
    ]
  ]
}

module.exports = Node;