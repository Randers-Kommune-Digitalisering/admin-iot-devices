const Node = {
  "id": "c6c231d0887435ea",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "g": "0f8e00ef379b1e7c",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $count() > 0 ? payload[0] : {}",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 545,
  "y": 700,
  "wires": [
    [
      "550a4b5545fc0f86"
    ]
  ],
  "l": false
}

module.exports = Node;