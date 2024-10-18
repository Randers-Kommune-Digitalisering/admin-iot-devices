const Node = {
  "id": "d91fbd77ed26c76f",
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
  "y": 700,
  "wires": [
    [
      "054a03753565bd17",
      "a77ffe2b3826b283"
    ]
  ]
}

module.exports = Node;