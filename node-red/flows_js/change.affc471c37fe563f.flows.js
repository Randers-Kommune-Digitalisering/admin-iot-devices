const Node = {
  "id": "affc471c37fe563f",
  "type": "change",
  "z": "b0111dd5eb3ba369",
  "g": "4bcb18bc0268f279",
  "name": "clean",
  "rules": [
    {
      "t": "delete",
      "p": "host",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "port",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "database",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "username",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "password",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "sql",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 100,
  "wires": [
    [
      "30399ac02f57f33f"
    ]
  ]
}

module.exports = Node;