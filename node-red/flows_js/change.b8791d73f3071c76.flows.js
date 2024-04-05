const Node = {
  "id": "b8791d73f3071c76",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Request parameters",
  "rules": [
    {
      "t": "set",
      "p": "target",
      "pt": "msg",
      "to": "application?limit=100&offset=0",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 1520,
  "wires": [
    [
      "39acdf42e01ef829"
    ]
  ]
}

module.exports = Node;