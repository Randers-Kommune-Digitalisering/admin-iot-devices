const Node = {
  "id": "53bdf70705e16155",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "g": "b739c15631c21afd",
  "name": "Parse JSON",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload\t~> $replace(\"'\", \"\\\"\")\t~> $replace(\"True\", \"true\")\t~> $replace(\"Frue\", \"false\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $eval()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 800,
  "wires": [
    [
      "da661e5a0c8235a7",
      "516c668ec2ad2ffc"
    ]
  ]
}

module.exports = Node;