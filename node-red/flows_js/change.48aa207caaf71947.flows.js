const Node = {
  "id": "48aa207caaf71947",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"target\": target,\t        \"status_code\": status_code ~> $exists() ? status_code : statusCode\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 160,
  "wires": [
    [
      "1af91765f9fa70d0",
      "ef5592ee4f022057"
    ]
  ]
}

module.exports = Node;