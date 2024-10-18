const Node = {
  "id": "03701452390e007d",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "d": true,
  "name": "Creds",
  "rules": [
    {
      "t": "set",
      "p": "host",
      "pt": "msg",
      "to": "SFTP_URL",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "user",
      "pt": "msg",
      "to": "SFTP_USER",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "pass",
      "pt": "msg",
      "to": "SFTP_PASS",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "port",
      "pt": "msg",
      "to": "SFTP_PORT",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 380,
  "wires": [
    [
      "0a672221a456b458"
    ]
  ]
}

module.exports = Node;