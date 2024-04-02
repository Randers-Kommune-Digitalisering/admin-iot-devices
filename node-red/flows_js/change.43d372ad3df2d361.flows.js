const Node = {
  "id": "43d372ad3df2d361",
  "type": "change",
  "z": "b0111dd5eb3ba369",
  "g": "4bcb18bc0268f279",
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
      "4b4c4cac05b10f2e"
    ]
  ]
}

module.exports = Node;