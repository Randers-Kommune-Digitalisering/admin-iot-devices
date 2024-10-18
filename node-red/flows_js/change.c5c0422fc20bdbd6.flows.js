const Node = {
  "id": "c5c0422fc20bdbd6",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": $millis()\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 360,
  "wires": [
    [
      "43587b06b9889a66",
      "0a5717631fc631fb"
    ]
  ]
}

module.exports = Node;