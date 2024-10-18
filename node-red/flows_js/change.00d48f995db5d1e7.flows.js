const Node = {
  "id": "00d48f995db5d1e7",
  "type": "change",
  "z": "7459f772194dcf44",
  "name": "Set retry config",
  "rules": [
    {
      "t": "set",
      "p": "config",
      "pt": "msg",
      "to": "config ? config : {}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "config.retryAttempts",
      "pt": "msg",
      "to": "2",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 140,
  "wires": [
    [
      "0c5da4d758d1f7cd"
    ]
  ]
}

module.exports = Node;