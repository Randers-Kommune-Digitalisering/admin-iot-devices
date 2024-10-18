const Node = {
  "id": "3576edeecbbb87af",
  "type": "change",
  "z": "d4c4c4565d1e740c",
  "g": "6ea0a2cdaaa1c772",
  "name": "env vars",
  "rules": [
    {
      "t": "set",
      "p": "host",
      "pt": "msg",
      "to": "DB_HOST",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "port",
      "pt": "msg",
      "to": "DB_PORT",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "database",
      "pt": "msg",
      "to": "DB_DATABASE",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "username",
      "pt": "msg",
      "to": "DB_USER",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "password",
      "pt": "msg",
      "to": "DB_PASS",
      "tot": "env",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 100,
  "wires": [
    [
      "edcb5fc148fcf7f8"
    ]
  ]
}

module.exports = Node;