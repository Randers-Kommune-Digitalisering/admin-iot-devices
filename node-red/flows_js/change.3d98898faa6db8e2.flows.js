const Node = {
  "id": "3d98898faa6db8e2",
  "type": "change",
  "z": "c14ae4066846d3c3",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"job_name\": job_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 580,
  "wires": [
    [
      "f18d8eb580953ce5",
      "b0a26a28916cccbd"
    ]
  ]
}

module.exports = Node;