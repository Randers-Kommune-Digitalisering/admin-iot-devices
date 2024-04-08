const Node = {
  "id": "03701452390e007d",
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
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t   \"filename\": \"Energimonitorering/data.csv\",\t   \"filedata\": payload \t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 350,
  "y": 300,
  "wires": [
    [
      "4298c7311190156b"
    ]
  ]
}

module.exports = Node;