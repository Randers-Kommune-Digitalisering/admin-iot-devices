const Node = {
  "id": "f2915e559da0a487",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "g": "b227236c55da336d",
  "name": "Status code \\n Error message",
  "rules": [
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "payload = [] or payload = {} ? 404 : 200",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "statusCode = 200 ? payload : { \"error\": \"NotFound\", \"message\": \"The requested device has not been found. Check the requested id.\" }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 120,
  "wires": [
    [
      "c0a3f151dc325552"
    ]
  ]
}

module.exports = Node;