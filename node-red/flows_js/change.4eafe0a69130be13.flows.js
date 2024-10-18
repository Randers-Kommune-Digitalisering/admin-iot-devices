const Node = {
  "id": "4eafe0a69130be13",
  "type": "change",
  "z": "7459f772194dcf44",
  "g": "245f9dc8c4ef45d3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload,\t    \"labels\": {\t        \"dependency_name\": dependency_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 880,
  "wires": [
    [
      "fd54d4cc0ec3a65f",
      "ca619a472204e4fa"
    ]
  ]
}

module.exports = Node;