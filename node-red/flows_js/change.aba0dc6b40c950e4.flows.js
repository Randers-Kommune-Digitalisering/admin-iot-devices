const Node = {
  "id": "aba0dc6b40c950e4",
  "type": "change",
  "z": "317943546a48f552",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": actionTime,\t    \"labels\": {\t        \"description\": actionDescription\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 320,
  "wires": [
    [
      "62fde1bc28126840",
      "4d165a6001de17fe"
    ]
  ]
}

module.exports = Node;