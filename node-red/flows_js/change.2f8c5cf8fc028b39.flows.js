const Node = {
  "id": "2f8c5cf8fc028b39",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"status\": status\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 1020,
  "wires": [
    [
      "f68b25afddfa14c1",
      "83e31b54920e4723"
    ]
  ]
}

module.exports = Node;