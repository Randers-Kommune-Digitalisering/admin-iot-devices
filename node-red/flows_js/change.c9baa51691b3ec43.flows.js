const Node = {
  "id": "c9baa51691b3ec43",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Sucess?",
  "rules": [
    {
      "t": "set",
      "p": "response",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "requestCount",
      "pt": "msg",
      "to": "requestCount ~> $exists() ? requestCount + 1 : 1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "requestSuccessful",
      "pt": "msg",
      "to": "response.error ~> $exists() ? 0 :\t(\t    response.statusCode ~> $exists() ?\t    (\t        response.statusCode = 200 ? 1 : 0\t    )\t    :\t    (\t        response.message = \"MESSAGE.ID-INVALID-OR-ALREADY-IN-USE\" ? 0 : 1\t    )\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1020,
  "y": 380,
  "wires": [
    [
      "375758d704eef15d"
    ]
  ]
}

module.exports = Node;