const Node = {
  "id": "a0eada23b636715c",
  "type": "change",
  "z": "317943546a48f552",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": affectedRows,\t    \"labels\": {\t        \"table\": tableName\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 520,
  "wires": [
    [
      "4a8f23379067c18e",
      "1a2b6f2df7692c5f"
    ]
  ]
}

module.exports = Node;