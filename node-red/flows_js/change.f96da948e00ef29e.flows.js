const Node = {
  "id": "f96da948e00ef29e",
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
  "y": 620,
  "wires": [
    [
      "1fb4079f2fbb2d77",
      "1d37d0c5d4290f0c"
    ]
  ]
}

module.exports = Node;