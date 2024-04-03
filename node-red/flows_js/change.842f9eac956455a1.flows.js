const Node = {
  "id": "842f9eac956455a1",
  "type": "change",
  "z": "6f89a22d2f227f45",
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
  "x": 1420,
  "y": 1440,
  "wires": [
    [
      "8321bf4ad454952a"
    ]
  ]
}

module.exports = Node;