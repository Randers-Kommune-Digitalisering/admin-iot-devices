const Node = {
  "id": "6ae4226e83527024",
  "type": "change",
  "z": "317943546a48f552",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": isRunning ? 1 : 0,\t    \"labels\": {\t        \"comment\": \"Test comment\"\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 120,
  "wires": [
    [
      "f1229256841a296f",
      "0f5102ea65c501e6"
    ]
  ]
}

module.exports = Node;