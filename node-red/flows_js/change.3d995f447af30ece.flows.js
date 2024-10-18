const Node = {
  "id": "3d995f447af30ece",
  "type": "change",
  "z": "78f25d49af5c6439",
  "name": "currentRetryAttempt=1",
  "rules": [
    {
      "t": "set",
      "p": "config.currentRetryAttempt",
      "pt": "msg",
      "to": "1",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "config.schedule_name",
      "pt": "msg",
      "to": "config.schedule_name & \"_1\"",
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
      "310f915d8edfc229"
    ]
  ]
}

module.exports = Node;