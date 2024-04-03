const Node = {
  "id": "3a123fa6fc713fe1",
  "type": "change",
  "z": "6f89a22d2f227f45",
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
  "x": 1410,
  "y": 1360,
  "wires": [
    [
      "25a95b63c085e27b"
    ]
  ]
}

module.exports = Node;