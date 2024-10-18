const Node = {
  "id": "79a7088371a69156",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "86f9a4f3efc9aad9",
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
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "msg.method",
      "pt": "msg",
      "to": "method ~> $exists() ? method : 'POST'",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 500,
  "wires": [
    [
      "48787cba96df272c"
    ]
  ]
}

module.exports = Node;