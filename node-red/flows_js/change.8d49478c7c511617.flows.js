const Node = {
  "id": "8d49478c7c511617",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 580,
  "wires": [
    [
      "198810fa4e7a2083",
      "fea4005a09ee9b27"
    ]
  ]
}

module.exports = Node;