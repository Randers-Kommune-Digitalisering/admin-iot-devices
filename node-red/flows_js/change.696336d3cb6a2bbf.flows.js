const Node = {
  "id": "696336d3cb6a2bbf",
  "type": "change",
  "z": "bd0288d62c2263f6",
  "g": "d9883d443804cd54",
  "name": "Metric (Status)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload.warningCount > 0 ? 0 : 1,\t    \"labels\": {\t        \"sensor\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 960,
  "y": 1220,
  "wires": [
    [
      "e7594f21bc0f2496"
    ]
  ]
}

module.exports = Node;