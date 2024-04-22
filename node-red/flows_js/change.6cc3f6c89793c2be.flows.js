const Node = {
  "id": "6cc3f6c89793c2be",
  "type": "change",
  "z": "e4e3eef16c2dc327",
  "g": "caf8e84e96905852",
  "name": "Metric (Count)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": payload.affectedRows,\t    \"labels\": {\t        \"device\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 1320,
  "wires": [
    [
      "f665d05a9bee51c9"
    ]
  ]
}

module.exports = Node;