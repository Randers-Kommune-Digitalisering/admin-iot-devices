const Node = {
  "id": "ca1551ec8d767370",
  "type": "change",
  "z": "e4e3eef16c2dc327",
  "g": "caf8e84e96905852",
  "name": "Metric (Status)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload.warningCount > 0 ? 0 : 1,\t    \"labels\": {\t        \"device\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 1280,
  "wires": [
    [
      "4aff2b2a2f2548bc"
    ]
  ]
}

module.exports = Node;