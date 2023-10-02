const Node = {
  "id": "ca7192529d4aa8d2",
  "type": "change",
  "z": "6f89a22d2f227f45",
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
  "x": 1020,
  "y": 120,
  "wires": [
    [
      "84a9ee6d219e650d"
    ]
  ],
  "_order": 70
}

module.exports = Node;