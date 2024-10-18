const Node = {
  "id": "a2e2a028d3481db7",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload,\t    \"labels\": {\t        \"job_name\": job_name,\t        \"error_type\": error_type != null ? error_type\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 160,
  "wires": [
    [
      "92cd5e9e292334f6",
      "92e066a4d1a92d72"
    ]
  ]
}

module.exports = Node;