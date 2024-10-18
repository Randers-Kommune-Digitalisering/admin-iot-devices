const Node = {
  "id": "75d4bd0207b4aca3",
  "type": "change",
  "z": "7459f772194dcf44",
  "g": "245f9dc8c4ef45d3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"status\": status,\t        \"table_name\": table_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 700,
  "wires": [
    [
      "6593cb29eb613596",
      "9e30a585f629f7cd"
    ]
  ]
}

module.exports = Node;