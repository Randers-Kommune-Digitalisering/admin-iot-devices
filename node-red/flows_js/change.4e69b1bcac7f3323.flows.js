const Node = {
  "id": "4e69b1bcac7f3323",
  "type": "change",
  "z": "bd0288d62c2263f6",
  "g": "d9883d443804cd54",
  "name": "Metric (Count)",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": payload.affectedRows,\t    \"labels\": {\t        \"sensor\": data.id\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 960,
  "y": 1260,
  "wires": [
    [
      "e0ee7a3a406797e1"
    ]
  ]
}

module.exports = Node;