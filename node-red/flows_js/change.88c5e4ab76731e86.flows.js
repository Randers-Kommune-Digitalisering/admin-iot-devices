const Node = {
  "id": "88c5e4ab76731e86",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "error.message",
      "pt": "msg",
      "to": "'Timeout while attempting to upload CSV to ' & host",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 160,
  "y": 400,
  "wires": [
    [
      "a83fd7b6a8b7efc7"
    ]
  ]
}

module.exports = Node;