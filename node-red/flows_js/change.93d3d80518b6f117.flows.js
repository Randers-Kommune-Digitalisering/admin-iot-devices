const Node = {
  "id": "93d3d80518b6f117",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"job_name\": job_name,\t        \"status\": status\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 680,
  "wires": [
    [
      "209eb74889aa7892",
      "a270b9dd3f873549"
    ]
  ]
}

module.exports = Node;