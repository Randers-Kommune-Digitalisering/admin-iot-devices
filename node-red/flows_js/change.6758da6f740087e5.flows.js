const Node = {
  "id": "6758da6f740087e5",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload.filename = undefined ? 0 : 1,\t    \"labels\": {\t        \"type\": \"csv\"\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1090,
  "y": 420,
  "wires": [
    [
      "0db8ead9775fc166"
    ]
  ]
}

module.exports = Node;