const Node = {
  "id": "79a7088371a69156",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "7dd315ad06879230",
  "name": "Request values",
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
      "to": "OS2IOT_API_KEY",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "requestBody",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 380,
  "wires": [
    [
      "867a0321ad608aeb",
      "48787cba96df272c"
    ]
  ]
}

module.exports = Node;