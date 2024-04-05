const Node = {
  "id": "9aa56ce665664e46",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "Find relevante \\n \"Randers [2]\"-dekodere",
  "rules": [
    {
      "t": "set",
      "p": "decoders",
      "pt": "msg",
      "to": "payload.data[name ~> $contains(\"Randers [2]\")]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "decoders.name",
      "pt": "msg",
      "to": "decoders.name ~> $substring(11) ~> $trim()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 850,
  "y": 100,
  "wires": [
    [
      "0754a8045dd921cf"
    ]
  ]
}

module.exports = Node;