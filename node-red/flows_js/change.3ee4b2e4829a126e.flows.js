const Node = {
  "id": "3ee4b2e4829a126e",
  "type": "change",
  "z": "7459f772194dcf44",
  "g": "245f9dc8c4ef45d3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": payload,\t    \"labels\": {\t        \"status\": status,\t        \"table_name\": table_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 780,
  "wires": [
    [
      "04d34751c60549ac",
      "650b4e14f71334e0"
    ]
  ]
}

module.exports = Node;