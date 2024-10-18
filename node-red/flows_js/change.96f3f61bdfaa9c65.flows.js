const Node = {
  "id": "96f3f61bdfaa9c65",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"target\": target,\t        \"status\": status ~> $exists() ? status : statusCode\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 260,
  "wires": [
    [
      "77e1b9d878c20812",
      "9afba3e1ae3df4f1"
    ]
  ]
}

module.exports = Node;