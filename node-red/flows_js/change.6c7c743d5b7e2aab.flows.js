const Node = {
  "id": "6c7c743d5b7e2aab",
  "type": "change",
  "z": "78f25d49af5c6439",
  "name": "currentRetryAttempt+1",
  "rules": [
    {
      "t": "set",
      "p": "config.currentRetryAttempt",
      "pt": "msg",
      "to": "config.currentRetryAttempt+1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "config.schedule_name",
      "pt": "msg",
      "to": "config.schedule_name & \"_\" & config.currentRetryAttempt",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 80,
  "wires": [
    [
      "310f915d8edfc229"
    ]
  ]
}

module.exports = Node;