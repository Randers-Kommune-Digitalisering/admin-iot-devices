const Node = {
  "id": "5b1cabb42d024f64",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "export",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 970,
  "y": 140,
  "wires": [
    [
      "e38fd73c11b06e5a"
    ]
  ]
}

module.exports = Node;