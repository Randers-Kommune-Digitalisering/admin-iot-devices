const Node = {
  "id": "39acdf42e01ef829",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "eb4e79ff28b44f23",
  "name": "API Call URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "baseurl & target",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 650,
  "y": 2160,
  "wires": [
    [
      "613093071ec24783"
    ]
  ]
}

module.exports = Node;