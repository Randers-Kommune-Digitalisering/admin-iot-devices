const Node = {
  "id": "e0811d3283425688",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload,\t    \"labels\": {\t        \"dependency_name\": dependency_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 260,
  "wires": [
    [
      "f7e37f3bc3b2c20c",
      "1eae9c90cf0b1509"
    ]
  ]
}

module.exports = Node;