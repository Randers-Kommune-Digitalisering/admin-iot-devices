const Node = {
  "id": "cafd7102a2a28b85",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
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
      "p": "user",
      "pt": "msg",
      "to": "SFTP_USER",
      "tot": "env"
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
  "x": 390,
  "y": 1240,
  "wires": [
    [
      "b457abddca72fc94",
      "c9561890d065854b"
    ]
  ]
}

module.exports = Node;