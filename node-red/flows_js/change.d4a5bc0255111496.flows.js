const Node = {
  "id": "d4a5bc0255111496",
  "type": "change",
  "z": "6f89a22d2f227f45",
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
  "x": 1420,
  "y": 1400,
  "wires": [
    [
      "7d08d3bbcd676b2b"
    ]
  ]
}

module.exports = Node;