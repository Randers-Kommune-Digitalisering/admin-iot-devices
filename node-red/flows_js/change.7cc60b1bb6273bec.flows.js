const Node = {
  "id": "7cc60b1bb6273bec",
  "type": "change",
  "z": "e4e3eef16c2dc327",
  "g": "caf8e84e96905852",
  "name": "Metric (Time)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": $millis(),\t    \"labels\": {\t        \"device\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 1240,
  "wires": [
    [
      "f4f2765d87a1cd37"
    ]
  ]
}

module.exports = Node;