const Node = {
  "id": "c9baa51691b3ec43",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Sucess?",
  "rules": [
    {
      "t": "set",
      "p": "requestCount",
      "pt": "msg",
      "to": "requestCount ~> $exists() ? requestCount + 1  : 1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "requestSuccessful",
      "pt": "msg",
      "to": "statusCode = 200 ? 1 : 0",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1040,
  "y": 260,
  "wires": [
    [
      "375758d704eef15d"
    ]
  ]
}

module.exports = Node;