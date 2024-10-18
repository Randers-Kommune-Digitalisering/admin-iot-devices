const Node = {
  "id": "c7142e66b8233c40",
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
  "y": 360,
  "wires": [
    [
      "15a60577493abbd3",
      "81ce90dabc7784f3"
    ]
  ]
}

module.exports = Node;