const Node = {
  "id": "e32b0f8debd3f0c3",
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
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$millis() - ($flowContext(\"job_start_ms_array\")[devEui = $$.deviceEui]).ms",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 580,
  "wires": [
    [
      "1553880bb60f9e17"
    ]
  ]
}

module.exports = Node;