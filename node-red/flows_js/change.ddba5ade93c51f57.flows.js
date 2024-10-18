const Node = {
  "id": "ddba5ade93c51f57",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "ftp_name",
      "pt": "msg",
      "to": "sftp.randers.dk",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "payload.success",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 460,
  "wires": [
    [
      "8c566b7eab9ef3aa"
    ]
  ]
}

module.exports = Node;