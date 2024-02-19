const Node = {
  "id": "df0b62472fa9bf8f",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Creds",
  "rules": [
    {
      "t": "set",
      "p": "host",
      "pt": "msg",
      "to": "sftp.randers.dk",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "user",
      "pt": "msg",
      "to": "Energimonitorering",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "password",
      "pt": "msg",
      "to": "SFTP_PASS",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "port",
      "pt": "msg",
      "to": "22",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 1600,
  "wires": [
    [
      "616e0423c54b2ad2"
    ]
  ]
}

module.exports = Node;