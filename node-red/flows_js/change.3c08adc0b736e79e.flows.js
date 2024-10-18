const Node = {
  "id": "3c08adc0b736e79e",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload,\t    \"labels\": {\t        \"job_name\": job_name,\t        \"status\": status\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 780,
  "wires": [
    [
      "fe073432bf2419f3",
      "3c44ed9cb6e8bbf0"
    ]
  ]
}

module.exports = Node;